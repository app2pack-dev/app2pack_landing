/*
 * The game list for games.app2pack.dev.
 * To add a game, copy one entry and change it. Order here is the order on the page.
 *
 *   id        short unique name, used in the page address (#snake-arena)
 *   title     name shown on the tile
 *   url       where the game is played (opens when the tile is clicked)
 *   mode      "single" or "multi"
 *   players   optional, shown on multiplayer tiles, e.g. "2-8"
 *   thumb     optional image in games/thumbs/ (square, 512x512 or larger works best)
 *             If left out, the tile draws `emoji` on a gradient of `colors`.
 *   emoji     placeholder art when there is no thumb
 *   colors    two colors for the placeholder gradient
 *   featured  optional, true makes the tile big (use for 1-2 games)
 *   isNew     optional, true adds a "New" tag
 *
 * NOTE: the games below are placeholders. Replace them with the real ones.
 */
window.GAMES = [
  { id: "snake-arena",  title: "Snake Arena",   url: "#", mode: "multi",  players: "2-8", emoji: "🐍", colors: ["#34d399", "#0e7490"], featured: true, isNew: true },
  { id: "block-drop",   title: "Block Drop",    url: "#", mode: "single", emoji: "🧱", colors: ["#fb923c", "#be123c"] },
  { id: "paper-planes", title: "Paper Planes",  url: "#", mode: "single", emoji: "✈️", colors: ["#7dd3fc", "#4f46e5"] },
  { id: "draw-guess",   title: "Draw & Guess",  url: "#", mode: "multi",  players: "3-10", emoji: "🎨", colors: ["#f472b6", "#7c3aed"] },
  { id: "space-dodge",  title: "Space Dodge",   url: "#", mode: "single", emoji: "🚀", colors: ["#a78bfa", "#1e1b4b"] },
  { id: "fruit-slice",  title: "Fruit Slice",   url: "#", mode: "single", emoji: "🍉", colors: ["#fda4af", "#16a34a"], isNew: true },
  { id: "word-rush",    title: "Word Rush",     url: "#", mode: "multi",  players: "2-6", emoji: "🔤", colors: ["#fde047", "#ea580c"] },
  { id: "mini-golf",    title: "Mini Golf",     url: "#", mode: "single", emoji: "⛳", colors: ["#bef264", "#15803d"] },
  { id: "chess-blitz",  title: "Chess Blitz",   url: "#", mode: "multi",  players: "2",   emoji: "♟️", colors: ["#e2e8f0", "#475569"] },
  { id: "bubble-pop",   title: "Bubble Pop",    url: "#", mode: "single", emoji: "🎈", colors: ["#67e8f9", "#db2777"] },
  { id: "pixel-racer",  title: "Pixel Racer",   url: "#", mode: "multi",  players: "2-4", emoji: "🏎️", colors: ["#fca5a5", "#b91c1c"] },
  { id: "dungeon-dash", title: "Dungeon Dash",  url: "#", mode: "single", emoji: "🗝️", colors: ["#fcd34d", "#78350f"] },
  { id: "tank-duel",    title: "Tank Duel",     url: "#", mode: "multi",  players: "2",   emoji: "💥", colors: ["#d9f99d", "#3f6212"] },
  { id: "ocean-match",  title: "Ocean Match",   url: "#", mode: "single", emoji: "🐠", colors: ["#5eead4", "#1d4ed8"] },
];
