# app2pack_landing

Static landing page for [app2pack.dev](https://app2pack.dev).

Everything lives in `site/` — plain HTML, no build step. Pushes to `master` deploy it to GitHub Pages.

Preview locally:

```bash
python3 -m http.server -d site
```

## Games portal (games.app2pack.dev)

`games/` is a separate static site for the games list. To add a game, add one entry to `games/games.js` (optional square thumbnail in `games/thumbs/`).

Preview locally:

```bash
python3 -m http.server -d games
```

It is not deployed yet: the existing workflow only publishes `site/` to app2pack.dev.
