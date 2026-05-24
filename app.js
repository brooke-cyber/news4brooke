// News4Brooke — personal news PWA, curated for Brooke
// Pulls RSS via free CORS proxies, parses in-browser, caches in localStorage.

const FEEDS = {
  'founders': [
    { name: 'TechCrunch · Startups', url: 'https://techcrunch.com/category/startups/feed/' },
    { name: 'TechCrunch · Venture',  url: 'https://techcrunch.com/category/venture/feed/' },
    { name: 'StrictlyVC',            url: 'https://www.strictlyvc.com/feed/' },
    { name: 'VC News',               url: 'https://news.google.com/rss/search?q=venture+capital+OR+startup+funding+when:2d&hl=en-US&gl=US&ceid=US:en' },
    { name: 'Founder Law',           url: 'https://news.google.com/rss/search?q=%22startup+law%22+OR+%22cap+table%22+OR+%22SAFE+note%22+OR+%22founder+agreement%22+when:7d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'legal-tech': [
    { name: 'Artificial Lawyer',     url: 'https://www.artificiallawyer.com/feed/' },
    { name: 'LawSites',              url: 'https://www.lawnext.com/feed' },
    { name: 'Law360',                url: 'https://www.law360.com/legalindustry/rss' },
  ],
  'bravo': [
    { name: 'Reality Tea',           url: 'https://www.realitytea.com/feed/' },
    { name: 'Reality Blurb',         url: 'https://realityblurb.com/feed/' },
    { name: 'Bravo Buzz',            url: 'https://news.google.com/rss/search?q=%22Real+Housewives%22+OR+%22Bravo+TV%22+OR+%22Vanderpump%22+OR+%22Below+Deck%22+OR+%22Summer+House%22&hl=en-US&gl=US&ceid=US:en' },
  ],
  'pop-culture': [
    { name: 'Variety',               url: 'https://variety.com/feed/' },
    { name: 'Hollywood Reporter',    url: 'https://www.hollywoodreporter.com/feed/' },
    { name: 'Page Six',              url: 'https://pagesix.com/feed/' },
  ],
  'us-news': [
    { name: 'NPR',                   url: 'https://feeds.npr.org/1001/rss.xml' },
    { name: 'NYT',                   url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml' },
    { name: 'CNN',                   url: 'http://rss.cnn.com/rss/cnn_topstories.rss' },
    { name: 'BBC US/Canada',         url: 'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml' },
  ],
  'canada-news': [
    { name: 'CBC',                   url: 'https://www.cbc.ca/webfeed/rss/rss-topstories' },
    { name: 'National Post',         url: 'https://nationalpost.com/feed' },
    { name: 'Google News Canada',    url: 'https://news.google.com/rss?hl=en-CA&gl=CA&ceid=CA:en' },
  ],
  'israel-iran': [
    { name: 'Times of Israel',       url: 'https://www.timesofisrael.com/feed/' },
    { name: 'Jerusalem Post',        url: 'https://www.jpost.com/rss/rssfeedsfrontpage.aspx' },
    { name: 'BBC Middle East',       url: 'http://feeds.bbci.co.uk/news/world/middle_east/rss.xml' },
    { name: 'Iran News',             url: 'https://news.google.com/rss/search?q=Iran+when:3d&hl=en-US&gl=US&ceid=US:en' },
  ],
};

const CAT_LABELS = {
  'founders':    'Founders & VC',
  'legal-tech':  'Legal Tech',
  'bravo':       'Bravo',
  'pop-culture': 'Pop Culture',
  'us-news':     'US',
  'canada-news': 'Canada',
  'israel-iran': 'Israel/Iran',
};

// CORS proxy chain — tried in order, falls back on failure.
const PROXIES = [
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
];

const CACHE_KEY = 'n4b.cache.v3';
const CACHE_TTL_MS = 90 * 1000;            // 90 seconds — counts as "stale"
const AUTO_REFRESH_MS = 90 * 1000;         // background re-fetch every 90s while app is open
const ITEMS_PER_SOURCE = 12;

let activeCategory = 'all';
let articles = [];

// ---------- fetch + parse ----------

async function fetchRss(url) {
  let lastErr;
  for (const buildProxy of PROXIES) {
    try {
      const proxyUrl = buildProxy(url);
      const res = await fetch(proxyUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (!text || text.length < 50) throw new Error('Empty response');
      return text;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('All proxies failed');
}

function parseRss(xmlText, sourceName, category) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'application/xml');
  if (doc.querySelector('parsererror')) return [];

  const items = [];
  doc.querySelectorAll('item').forEach(node => {
    const title = txt(node, 'title');
    const link  = txt(node, 'link');
    const desc  = txt(node, 'description');
    const pub   = txt(node, 'pubDate') || txt(node, 'date');
    if (title && link) items.push(buildArticle(title, link, desc, pub, sourceName, category));
  });
  if (items.length === 0) {
    doc.querySelectorAll('entry').forEach(node => {
      const title = txt(node, 'title');
      const linkEl = node.querySelector('link');
      const link = linkEl ? (linkEl.getAttribute('href') || linkEl.textContent) : '';
      const desc = txt(node, 'summary') || txt(node, 'content');
      const pub  = txt(node, 'updated') || txt(node, 'published');
      if (title && link) items.push(buildArticle(title, link, desc, pub, sourceName, category));
    });
  }
  return items.slice(0, ITEMS_PER_SOURCE);
}

function txt(node, tag) {
  const el = node.querySelector(tag);
  return el ? (el.textContent || '').trim() : '';
}
function stripHtml(s) {
  if (!s) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = s;
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}
function buildArticle(title, link, desc, pub, source, category) {
  let timestamp = Date.parse(pub);
  if (isNaN(timestamp)) timestamp = Date.now();
  return {
    title: stripHtml(title),
    link: link.trim(),
    desc:  stripHtml(desc).slice(0, 280),
    source, category, timestamp,
  };
}

// ---------- cache ----------

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
function writeCache(arts) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), articles: arts }));
  } catch {}
}

// ---------- orchestrator ----------

async function loadAll(force = false) {
  const cached = readCache();
  const fresh = cached && (Date.now() - cached.fetchedAt < CACHE_TTL_MS);
  if (cached) {
    articles = cached.articles;
    render();
    updateGreeting(cached.fetchedAt);
    if (fresh && !force) return;
  }
  if (!cached) setLoading();

  const tasks = [];
  for (const [cat, sources] of Object.entries(FEEDS)) {
    for (const src of sources) {
      tasks.push(
        fetchRss(src.url)
          .then(text => parseRss(text, src.name, cat))
          .catch(err => { console.warn('Feed failed:', src.name, err.message); return []; })
      );
    }
  }
  const results = await Promise.all(tasks);
  const seen = new Set();
  const deduped = [];
  for (const a of results.flat().sort((x, y) => y.timestamp - x.timestamp)) {
    if (seen.has(a.link)) continue;
    seen.add(a.link);
    deduped.push(a);
  }
  articles = deduped;
  writeCache(articles);
  render();
  updateGreeting(Date.now());
}

// ---------- "For You" curation ----------
// Personal mix: weight Brooke's primary interests higher and ensure breadth.
function curatedForYou(all) {
  const weights = {
    'founders':    1.25,
    'legal-tech':  1.20,
    'bravo':       1.15,
    'israel-iran': 1.10,
    'pop-culture': 1.00,
    'us-news':     0.95,
    'canada-news': 0.95,
  };
  const now = Date.now();
  const scored = all.map(a => {
    const ageHrs = Math.max(0.5, (now - a.timestamp) / 3.6e6);
    const recency = 1 / Math.pow(ageHrs, 0.55); // decay
    const w = weights[a.category] || 1;
    return { ...a, _score: recency * w };
  }).sort((x, y) => y._score - x._score);

  // round-robin-ish — make sure no single category dominates the first ~20
  const counts = {};
  const picked = [];
  const rest = [];
  for (const a of scored) {
    counts[a.category] = counts[a.category] || 0;
    if (picked.length < 30 && counts[a.category] < 4) {
      counts[a.category]++;
      picked.push(a);
    } else {
      rest.push(a);
    }
  }
  return picked.concat(rest);
}

// ---------- render ----------

function render() {
  const main = document.getElementById('feed');
  let list = articles;
  if (activeCategory === 'all') {
    list = curatedForYou(articles);
  } else {
    list = articles.filter(a => a.category === activeCategory);
  }
  if (!list.length) {
    main.innerHTML = `
      <div class="state">
        <div class="state-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
          </svg>
        </div>
        <div class="state-title">No stories yet</div>
        <div class="state-body">Tap ↻ at the top right to fetch the latest.</div>
      </div>`;
    return;
  }
  const html = list.slice(0, 250).map((a, i) => `
    <a class="article ${i === 0 && activeCategory === 'all' ? 'featured' : ''}"
       href="${escapeAttr(a.link)}" target="_blank" rel="noopener"
       style="animation-delay:${Math.min(i, 12) * 28}ms">
      <div class="meta">
        <span class="chip" data-cat="${a.category}">${CAT_LABELS[a.category]}</span>
        <span class="source">${escapeHtml(a.source)}</span>
        <span class="dot">·</span>
        <span>${timeAgo(a.timestamp)}</span>
      </div>
      <h2>${escapeHtml(a.title)}</h2>
      ${a.desc ? `<p>${escapeHtml(a.desc)}</p>` : ''}
    </a>
  `).join('');
  main.innerHTML = html;
}

function setLoading() {
  document.getElementById('feed').innerHTML = `
    <div class="state">
      <div class="spinner"></div>
      <div class="state-body">Gathering today's headlines for you…</div>
    </div>`;
}

function timeOfDayGreeting() {
  const h = new Date().getHours();
  if (h < 5)  return 'Up late';
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  if (h < 21) return 'Good evening';
  return 'Tonight';
}
function updateGreeting(ts) {
  const greet = document.getElementById('greeting');
  const sub   = document.getElementById('subtitle');
  greet.textContent = `${timeOfDayGreeting()}, Brooke`;
  const dateStr = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  const updated = ts ? ` · updated ${timeAgo(ts)}` : '';
  sub.textContent = `${dateStr}${updated}`;
}

function timeAgo(ts) {
  const diff = (Date.now() - ts) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(ts).toLocaleDateString();
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}
function escapeAttr(s) { return escapeHtml(s); }

// ---------- events ----------

document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.seg');
  if (!btn) return;
  document.querySelectorAll('.seg').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.cat;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', async () => {
  refreshBtn.disabled = true;
  refreshBtn.classList.add('spin');
  try { await loadAll(true); }
  finally {
    refreshBtn.disabled = false;
    refreshBtn.classList.remove('spin');
  }
});

// Re-render relative timestamps every 30 seconds
setInterval(() => {
  const cached = readCache();
  if (cached) updateGreeting(cached.fetchedAt);
}, 30_000);

// ---------- aggressive auto-refresh ----------
// 1) background timer: pull every AUTO_REFRESH_MS (90s) while app is open
let autoTimer = null;
function startAutoRefresh() {
  if (autoTimer) return;
  autoTimer = setInterval(() => {
    if (document.visibilityState === 'visible') {
      loadAll(true).catch(() => {});
    }
  }, AUTO_REFRESH_MS);
}
function stopAutoRefresh() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}
startAutoRefresh();

// 2) refresh the instant the app comes to the foreground (tab focused, app re-opened)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') loadAll(true).catch(() => {});
});
window.addEventListener('focus', () => loadAll(true).catch(() => {}));
window.addEventListener('pageshow', () => loadAll(true).catch(() => {}));

// 3) refresh when network comes back online
window.addEventListener('online', () => loadAll(true).catch(() => {}));

// 4) save battery: pause timer when tab is hidden, resume when visible
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') stopAutoRefresh();
  else startAutoRefresh();
});

// Service worker registration (for installability + offline)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

// Show greeting immediately, even before data arrives
updateGreeting(null);
// Kickoff
loadAll(false);
