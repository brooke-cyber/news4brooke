# Brief — install on your phone

This is the "app" — a folder of plain HTML/JS/CSS that behaves like a real iOS/Android app once installed to your home screen. No App Store needed.

## What's inside

```
news-app/
├── index.html         ← the page
├── app.js             ← fetches RSS + renders feed
├── service-worker.js  ← offline support, makes it installable
├── manifest.json      ← tells iOS/Android how to install it
├── icon-192.png       ← home-screen icon (Android)
├── icon-512.png       ← splash screen icon
├── apple-touch-icon.png ← home-screen icon (iPhone)
└── favicon-32.png
```

## Step 1 — host the folder (free, 60 seconds)

A PWA must be served over HTTPS to be installable. The easiest free host:

**Netlify Drop** (no account needed for a test, account = permanent):

1. Open **https://app.netlify.com/drop** on your computer.
2. Drag the entire `news-app` folder onto the page.
3. Netlify gives you a URL like `https://amazing-pony-12345.netlify.app`. That's your app.
4. (Optional) Create a free Netlify account in the popup to keep the URL forever and give it a custom name.

Alternatives if you prefer: **Vercel** (drag-drop at vercel.com/new), **GitHub Pages** (commit to a repo, enable Pages), or **Cloudflare Pages**. All free, all work.

## Step 2 — install to your iPhone

1. Open the Netlify URL in **Safari** (must be Safari, not Chrome, for iOS install).
2. Tap the **Share button** (square with arrow, bottom of screen).
3. Scroll down, tap **Add to Home Screen**.
4. Name stays as "Brief" (or rename). Tap **Add**.
5. App icon appears on your home screen. Tap it — opens fullscreen, no Safari chrome.

## Step 2 — install to Android

1. Open the URL in **Chrome**.
2. You'll see an "Install app" banner, or tap menu (⋮) → **Install app** / **Add to Home screen**.
3. Confirm. Icon lands on home screen, opens fullscreen.

## How it works

- Pulls fresh headlines from 20+ RSS feeds (NPR, NYT, CNN, BBC, CBC, National Post, Times of Israel, Jerusalem Post, Variety, Page Six, Reality Tea, Artificial Lawyer, Law360, etc.) through free CORS proxies.
- Caches results in your browser for 15 minutes — opens instantly even on bad signal.
- Service worker stores the app shell so it works **offline** (you'll see your last-loaded articles).
- Tap a story → opens in your default browser.
- Pull down / tap ↻ to force refresh.

## Customizing sources

Open `app.js` and edit the `FEEDS` object at the top. Add or remove any RSS URL.
After editing, re-drag the folder onto Netlify Drop — it'll redeploy in seconds.

To add a new category: add a key to `FEEDS`, add a label to `CAT_LABELS`, and add a `<button class="tab" data-cat="your-key">Your Label</button>` to `index.html`. Optionally add a color in the `<style>` block (look for the `--legal`, `--bravo` lines).

## Troubleshooting

**Feed not loading?** CORS proxies occasionally rate-limit. The app already tries three (allorigins → codetabs → corsproxy.io) before giving up. Open Safari/Chrome devtools and check the console for which one failed. If all three are blocked from your network, you'd need to host your own proxy (a 10-line Cloudflare Worker).

**Install option missing on iPhone?** Make sure you're in Safari and on the actual Netlify URL — local file:// URLs and non-HTTPS pages can't be installed.

**Stale headlines?** Tap ↻ Refresh. The 15-minute cache exists to spare the proxies — bypass with the button.
