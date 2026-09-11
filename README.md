# Daily Anchors — Cross-Device Tracker (Netlify Blobs)

HTML tracker whose check state is stored server-side via Netlify Blobs,
so it follows you across devices/browsers.

## Deploy
1. Push this repo to GitHub (private is fine).
2. On Netlify: **Add new site → Import an existing project** → select this repo.
3. Netlify auto-detects `netlify.toml`, runs `npm install`, builds the
   `anchors` function, and deploys. No manual config needed.
4. Blobs need no extra setup — automatically available once deployed on Netlify.

## Structure
- `public/index.html` — the tracker UI, talks to `/.netlify/functions/anchors`
- `netlify/functions/anchors.js` — GET (single key or list-by-prefix) / POST (set)
- `netlify.toml` — points Netlify at `public/` and `netlify/functions/`
