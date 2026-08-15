#!/usr/bin/env python3
"""
Trae las publicaciones de @ramaieeeyt al archivo del sitio.

Se ejecuta en GitHub Actions, no en el navegador: el token vive en los secrets
del repositorio y nunca llega al cliente. Las imágenes se DESCARGAN y se
recortan aquí — las URLs que sirve Meta van firmadas y caducan en días, así que
enlazarlas en vivo rompería el archivo solo.

Pasa por el mismo recorte 4:5 que usan los retratos de la directiva, de modo que
lo que entra desde Instagram encaja en la retícula sin retoques.

Uso:
    IG_TOKEN=xxx python3 scripts/sync_instagram.py [--limit 24] [--dry-run]
"""

import argparse
import io
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

from PIL import Image

API = "https://graph.instagram.com"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "assets", "img", "instagram")
MANIFEST = os.path.join(ROOT, "assets", "img", "instagram", "index.json")

# Los tipos que tienen imagen fija. Los reels entran por su miniatura.
WANTED = {"IMAGE", "CAROUSEL_ALBUM", "VIDEO"}

TILE_W, TILE_H = 864, 1080          # 4:5, igual que las piezas del archivo


def get(url, params):
    q = urllib.parse.urlencode(params)
    try:
        with urllib.request.urlopen(f"{url}?{q}", timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        sys.exit(f"La API respondió {e.code}:\n{body}\n\n"
                 "Si dice 'Invalid OAuth access token', el token caducó: "
                 "renuévalo y actualiza el secret IG_TOKEN.")


def fetch_media(token, limit):
    """Devuelve las publicaciones más recientes, ya filtradas."""
    # En los carruseles el post padre puede no traer media_url, así que
    # pedimos también los hijos y tiramos del primero si hace falta.
    fields = ("id,caption,media_type,media_url,thumbnail_url,"
              "permalink,timestamp,children{media_url,thumbnail_url}")
    data = get(f"{API}/me/media", {"fields": fields,
                                   "access_token": token,
                                   "limit": limit})
    out = []
    for m in data.get("data", []):
        if m.get("media_type") not in WANTED:
            continue
        # de un vídeo nos sirve la miniatura; del resto, la imagen. Si es un
        # carrusel sin media_url propio, la portada es su primer hijo.
        src = m.get("thumbnail_url") or m.get("media_url")
        if not src:
            hijos = (m.get("children") or {}).get("data") or []
            for h in hijos:
                src = h.get("media_url") or h.get("thumbnail_url")
                if src:
                    break
        if not src:
            print(f"  ! {m['id']} sin imagen utilizable, se salta")
            continue
        out.append({
            "id": m["id"],
            "src": src,
            "caption": (m.get("caption") or "").strip(),
            "permalink": m.get("permalink", ""),
            "timestamp": m.get("timestamp", ""),
            "type": m["media_type"],
        })
    return out


def title_from(caption):
    """La primera línea con contenido, sin hashtags, recortada."""
    for line in caption.splitlines():
        line = " ".join(w for w in line.split() if not w.startswith("#")).strip()
        if len(line) > 3:
            return line[:96] + ("…" if len(line) > 96 else "")
    return "Publicación"


def process(src_url, dest):
    """Descarga, recorta a 4:5 desde el centro y optimiza."""
    req = urllib.request.Request(src_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        im = Image.open(io.BytesIO(r.read())).convert("RGB")

    target = TILE_W / TILE_H
    w, h = im.size
    if w / h > target:                       # demasiado ancha: recorta a los lados
        nw = int(h * target)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:                                    # demasiado alta: recorta arriba y abajo
        nh = int(w / target)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))

    im.resize((TILE_W, TILE_H), Image.LANCZOS).save(
        dest, quality=82, optimize=True, progressive=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=24)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    token = os.environ.get("IG_TOKEN")
    if not token:
        sys.exit("Falta IG_TOKEN. En local: IG_TOKEN=xxx python3 scripts/sync_instagram.py")

    posts = fetch_media(token, args.limit)
    print(f"La API devolvió {len(posts)} publicaciones utilizables.")
    if args.dry_run:
        for p in posts[:5]:
            print(f"  · {p['timestamp'][:10]}  {title_from(p['caption'])}")
        return

    os.makedirs(IMG_DIR, exist_ok=True)
    known = {}
    if os.path.exists(MANIFEST):
        with io.open(MANIFEST, encoding="utf-8") as f:
            known = {p["id"]: p for p in json.load(f).get("posts", [])}

    manifest, nuevas = [], 0
    for p in posts:
        name = f"{p['id']}.jpg"
        path = os.path.join(IMG_DIR, name)
        if not os.path.exists(path):
            try:
                process(p["src"], path)
                nuevas += 1
                print(f"  + {name}  {title_from(p['caption'])}")
            except Exception as e:                       # una foto rota no tumba el sync
                print(f"  ! {p['id']} se saltó: {e}")
                continue
        manifest.append({
            "id": p["id"],
            "f": name,
            "c": title_from(p["caption"]),
            "url": p["permalink"],
            "date": p["timestamp"][:10],
        })

    # las que ya no están en la cuenta se quedan en el manifiesto: el archivo
    # es un archivo, no un espejo. Bórralas a mano si quieres que desaparezcan.
    for pid, old in known.items():
        if pid not in {m["id"] for m in manifest}:
            manifest.append(old)

    manifest.sort(key=lambda m: m["date"], reverse=True)
    with io.open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump({"posts": manifest}, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Listo: {nuevas} imágenes nuevas, {len(manifest)} en el archivo.")


if __name__ == "__main__":
    main()
