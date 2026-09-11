# Daily Anchors — Cross-Device Tracker (Netlify Blobs)

HTML tracker whose check state is stored server-side via Netlify Blobs,
so it follows across devices/browsers.


## Structure
- `public/index.html` — the tracker UI, talks to `/.netlify/functions/anchors`
- `netlify/functions/anchors.js` — GET (single key or list-by-prefix) / POST (set)
- `netlify.toml` — points Netlify at `public/` and `netlify/functions/`
