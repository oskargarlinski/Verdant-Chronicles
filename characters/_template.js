// ─────────────────────────────────────────────
//  NEW CHARACTER TEMPLATE
//  1. Rename this file to yourcharacter.js
//  2. Rename the const below to match (e.g. const yourcharacter)
//  3. Add your spreads - each spread is one left + one right page
//  4. Add the file to manifest.js
// ─────────────────────────────────────────────

const template = [
  // Spread 1 - Character card (left) + backstory (right)
  {
    left: `
      <div class="char-name">Character Name</div>
      <div class="char-subtitle">Race · Class</div>
      <div class="char-divider"><hr><span>✦</span><hr></div>
      <div class="stat"><span class="stat-label">Title</span><span class="stat-value">Your title here</span></div>
      <div class="stat"><span class="stat-label">Background</span><span class="stat-value">Your background</span></div>
      <div class="stat"><span class="stat-label">Motivation</span><span class="stat-value">What drives them</span></div>
      <div class="stat"><span class="stat-label">Status</span><span class="stat-value" style="color:#2a6e2a;">Active</span></div>
      <div class="handnote">"A short quote or<br>defining phrase here."</div>`,
    right: `
      <div class="story-heading">Your Chapter Title</div>
      <div class="story-body">
        <p>Your first paragraph here. The first letter will automatically get a large drop cap.</p>
        <p>Second paragraph.</p>
        <div class="story-rule"><hr><span>✦</span><hr></div>
        <p>A paragraph after the decorative rule - good for a scene break or time skip.</p>
      </div>`
  },

  // Spread 2 - Add more spreads if needed, or delete this one
  {
    left: `
      <div class="story-heading">Continued</div>
      <div class="story-body">
        <p>More story content on the left page.</p>
      </div>`,
    right: `
      <div class="story-heading">Final Notes</div>
      <div class="story-body">
        <p>More content on the right page.</p>
      </div>`
  }
];
