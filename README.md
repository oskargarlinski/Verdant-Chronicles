# The Verdant Chronicles

A character portfolio for a D&D 5e campaign, presented as a flippable journal. Each character gets their own spread of pages - a stat card, a backstory, and whatever notes feel right. Built so that adding a new character only requires creating one new file.

## Structure

```
chronicles/
  index.html              — book engine, no need to touch
  styles.css              — all visual styles
  manifest.js             — controls which characters appear and in what order
  characters/
    halden.js             — character spreads
    archibald.js
    _template.js          — copy this to add a new character
```

## Adding a character

1. Copy `characters/_template.js` and rename it
2. Fill in the left (stat card) and right (story) content for each spread
3. Open `manifest.js` and add the filename to `scripts` and the const name to `characters`

## Navigation

Click the page edges, use the arrow buttons, or press the left/right keyboard arrows to flip through the book.
