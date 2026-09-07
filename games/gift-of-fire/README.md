# Gift of Fire — web build

The Godot 4.3 web export lives in `Mini_Jam_218/`, with its entry point at:

    games/gift-of-fire/Mini_Jam_218/index.html

That path is what `project pages/GiftOfFire.html` frames in its "Play in
browser" section. If the folder is ever renamed, update the iframe `src` there.

## Why this build works on a plain static host

Godot's web export needs `SharedArrayBuffer` when **Thread Support** is enabled,
and browsers only grant that when the server sends two headers on every request:

    Cross-Origin-Opener-Policy: same-origin
    Cross-Origin-Embedder-Policy: require-corp

Hosts that can't set custom headers — GitHub Pages among them — cannot send
those, and such a build fails with `SharedArrayBuffer is not defined`.

This export has no `index.worker.js`, which means Thread Support was off, so it
sidesteps the requirement entirely. Keep it off when re-exporting.

## Testing locally

`file://` will not work — browsers block WebAssembly and the audio worklets over
that scheme. Serve over HTTP from the repo root:

    python -m http.server 8000

Then open <http://localhost:8000/project%20pages/GiftOfFire.html>.

## Housekeeping

`index.zip` (21 MB) is the bundle for uploading to itch.io. It isn't used when
serving the game from this folder and can be deleted from the repo without
affecting the embed.

`index.wasm` (39 MB) plus `index.pck` (12 MB) means a visitor downloads roughly
51 MB before the game starts. Fine over broadband, slow on mobile data. Godot's
export can be trimmed by disabling unused modules in a custom build if that
matters later.
