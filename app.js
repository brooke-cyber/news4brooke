// News4Brooke — Apple News–style PWA, curated for Brooke

const FEEDS = {
  'founders': [
    { name: 'TechCrunch · Startups', url: 'https://techcrunch.com/category/startups/feed/' },
    { name: 'TechCrunch · Venture',  url: 'https://techcrunch.com/category/venture/feed/' },
    { name: 'StrictlyVC',            url: 'https://www.strictlyvc.com/feed/' },
    { name: 'VC News',               url: 'https://news.google.com/rss/search?q=venture+capital+OR+startup+funding+when:2d&hl=en-US&gl=US&ceid=US:en' },
    { name: 'Founder Law',           url: 'https://news.google.com/rss/search?q=%22startup+law%22+OR+%22cap+table%22+OR+%22SAFE+note%22+OR+%22founder+agreement%22+when:7d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'ai': [
    { name: 'TechCrunch · AI',       url: 'https://techcrunch.com/category/artificial-intelligence/feed/' },
    { name: 'MIT Tech Review',       url: 'https://www.technologyreview.com/feed/' },
    { name: 'Wired · AI',            url: 'https://www.wired.com/feed/tag/ai/latest/rss' },
    { name: 'Ars Technica',          url: 'https://feeds.arstechnica.com/arstechnica/index/' },
    { name: 'OpenAI',                url: 'https://openai.com/blog/rss.xml' },
    { name: 'AI News',               url: 'https://news.google.com/rss/search?q=%22artificial+intelligence%22+(Anthropic+OR+OpenAI+OR+Claude+OR+ChatGPT+OR+Gemini)+when:2d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'legal-tech': [
    { name: 'Artificial Lawyer',     url: 'https://www.artificiallawyer.com/feed/' },
    { name: 'LawSites',              url: 'https://www.lawnext.com/feed' },
    { name: 'Law360',                url: 'https://www.law360.com/legalindustry/rss' },
  ],
  'markets': [
    { name: 'CNBC',                  url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html' },
    { name: 'Yahoo Finance',         url: 'https://finance.yahoo.com/news/rssindex' },
    { name: 'WSJ · Markets',         url: 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml' },
    { name: 'MarketWatch',           url: 'https://feeds.marketwatch.com/marketwatch/topstories/' },
    { name: 'FT · Markets',          url: 'https://www.ft.com/markets?format=rss' },
    { name: 'Stock Movers',          url: 'https://news.google.com/rss/search?q=stock+market+OR+S%26P+500+OR+Nasdaq+OR+Dow+when:1d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'style': [
    { name: 'Vogue',                 url: 'https://www.vogue.com/feed/rss' },
    { name: 'Elle',                  url: 'https://www.elle.com/rss/all.xml/' },
    { name: 'Harper’s Bazaar',  url: 'https://www.harpersbazaar.com/rss/all.xml/' },
    { name: 'Business of Fashion',   url: 'https://www.businessoffashion.com/feeds/news' },
    { name: 'Hypebeast',             url: 'https://hypebeast.com/feed' },
    { name: 'Hypebae',               url: 'https://hypebae.com/feed' },
    { name: 'Highsnobiety',          url: 'https://www.highsnobiety.com/feed/' },
    { name: 'WWD',                   url: 'https://wwd.com/feed/' },
    { name: 'Allure',                url: 'https://www.allure.com/feed/rss' },
    { name: 'Glamour',               url: 'https://www.glamour.com/feed/rss' },
    { name: 'New Drops',             url: 'https://news.google.com/rss/search?q=%22drops%22+OR+%22new+collection%22+OR+%22launches%22+(fashion+OR+beauty+OR+makeup)+when:3d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'pop-culture': [
    { name: 'Variety',               url: 'https://variety.com/feed/' },
    { name: 'Hollywood Reporter',    url: 'https://www.hollywoodreporter.com/feed/' },
    { name: 'Page Six',              url: 'https://pagesix.com/feed/' },
    { name: 'Reality Tea',           url: 'https://www.realitytea.com/feed/' },
    { name: 'Reality Blurb',         url: 'https://realityblurb.com/feed/' },
    { name: 'Bravo Buzz',            url: 'https://news.google.com/rss/search?q=%22Real+Housewives%22+OR+%22Bravo+TV%22+OR+%22Vanderpump%22+OR+%22Below+Deck%22+OR+%22Summer+House%22&hl=en-US&gl=US&ceid=US:en' },
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
  'ai':          'AI',
  'legal-tech':  'Legal Tech',
  'markets':     'Markets',
  'style':       'Style & Beauty',
  'pop-culture': 'Pop Culture',
  'us-news':     'US',
  'canada-news': 'Canada',
  'israel-iran': 'Israel/Iran',
};
const CAT_COLOR = {
  'founders':    'var(--c-founders)',
  'ai':          'var(--c-ai)',
  'legal-tech':  'var(--c-legal)',
  'markets':     'var(--c-markets)',
  'style':       'var(--c-style)',
  'pop-culture': 'var(--c-pop)',
  'us-news':     'var(--c-us)',
  'canada-news': 'var(--c-canada)',
  'israel-iran': 'var(--c-israel)',
};
const SECTION_ORDER = ['founders','ai','legal-tech','markets','style','pop-culture','us-news','canada-news','israel-iran'];

const PROXIES = [
  url => `/api/proxy?url=${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

const CACHE_KEY = 'n4b.cache.v6';
const CACHE_TTL_MS = 90 * 1000;
const AUTO_REFRESH_MS = 90 * 1000;
const ITEMS_PER_SOURCE = 12;

let activeCategory = 'all';
let articles = [];

// ============ fetch + parse ============

async function fetchRss(url) {
  let lastErr;
  for (const buildProxy of PROXIES) {
    try {
      const res = await fetch(buildProxy(url), { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (!text || text.length < 50) throw new Error('Empty');
      return text;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('All proxies failed');
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

// Extract a cover image URL from an RSS <item> node, trying multiple conventions.
function extractImage(item) {
  // 1. Walk direct children — media:content, media:thumbnail, enclosure, itunes:image
  for (const child of item.children) {
    const ln = (child.localName || child.nodeName || '').toLowerCase();
    if (ln === 'content') {
      const medium = (child.getAttribute('medium') || '').toLowerCase();
      const type = (child.getAttribute('type') || '').toLowerCase();
      if (medium === 'image' || type.startsWith('image')) {
        const u = child.getAttribute('url');
        if (u) return u;
      }
    }
    if (ln === 'thumbnail') {
      const u = child.getAttribute('url') || child.getAttribute('href');
      if (u) return u;
    }
    if (ln === 'enclosure') {
      const type = (child.getAttribute('type') || '').toLowerCase();
      const u = child.getAttribute('url');
      if (u && (type.startsWith('image') || /\.(jpe?g|png|webp|gif)(\?|$)/i.test(u))) return u;
    }
    if (ln === 'image') {
      const u = child.getAttribute('href') || child.getAttribute('url');
      if (u) return u;
      const inner = child.querySelector && child.querySelector('url');
      if (inner) return inner.textContent.trim();
    }
  }
  // 2. Try description / content:encoded HTML — extract first <img src>
  const htmlTags = ['encoded', 'description', 'summary', 'content'];
  for (const child of item.children) {
    const ln = (child.localName || child.nodeName || '').toLowerCase();
    if (htmlTags.includes(ln)) {
      const raw = child.textContent || '';
      const m = raw.match(/<img[^>]+src=["']([^"'>]+)["']/i);
      if (m && !/spacer|pixel|tracking/i.test(m[1])) return m[1];
    }
  }
  return null;
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
    const image = extractImage(node);
    if (title && link) items.push(buildArticle(title, link, desc, pub, sourceName, category, image));
  });
  if (items.length === 0) {
    doc.querySelectorAll('entry').forEach(node => {
      const title = txt(node, 'title');
      const linkEl = node.querySelector('link');
      const link = linkEl ? (linkEl.getAttribute('href') || linkEl.textContent) : '';
      const desc = txt(node, 'summary') || txt(node, 'content');
      const pub  = txt(node, 'updated') || txt(node, 'published');
      const image = extractImage(node);
      if (title && link) items.push(buildArticle(title, link, desc, pub, sourceName, category, image));
    });
  }
  return items.slice(0, ITEMS_PER_SOURCE);
}

function buildArticle(title, link, desc, pub, source, category, image) {
  let timestamp = Date.parse(pub);
  if (isNaN(timestamp)) timestamp = Date.now();
  return {
    title: stripHtml(title),
    link: link.trim(),
    desc: stripHtml(desc).slice(0, 240),
    source, category, timestamp,
    image: image || null,
  };
}

// ============ cache ============

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

// ============ orchestrator ============

async function loadAll(force = false) {
  const cached = readCache();
  const fresh = cached && (Date.now() - cached.fetchedAt < CACHE_TTL_MS);
  if (cached) {
    articles = cached.articles;
    render();
    updateGreeting(cached.fetchedAt);
    if (fresh && !force) return;
  }
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

// ============ "For You" curation — ranks for hero + top stories ============

function curatedForYou(all) {
  const weights = {
    'founders': 1.30, 'ai': 1.25, 'legal-tech': 1.20,
    'markets': 1.15, 'style': 1.15, 'pop-culture': 1.10,
    'israel-iran': 1.05, 'us-news': 1.00, 'canada-news': 0.95,
  };
  const now = Date.now();
  const scored = all.map(a => {
    const ageHrs = Math.max(0.5, (now - a.timestamp) / 3.6e6);
    const recency = 1 / Math.pow(ageHrs, 0.55);
    const w = weights[a.category] || 1;
    // Prefer articles with images for hero candidates
    const imgBoost = a.image ? 1.06 : 1.0;
    return { ...a, _score: recency * w * imgBoost };
  }).sort((x, y) => y._score - x._score);
  // round-robin so no single category dominates
  const counts = {};
  const picked = [];
  const rest = [];
  for (const a of scored) {
    counts[a.category] = counts[a.category] || 0;
    if (picked.length < 40 && counts[a.category] < 5) {
      counts[a.category]++;
      picked.push(a);
    } else { rest.push(a); }
  }
  return picked.concat(rest);
}

// ============ render ============

function renderArticleHero(a) {
  return `
    <a class="article hero" href="${escapeAttr(a.link)}" target="_blank" rel="noopener">
      ${a.image ? `
        <div class="cover">
          <img src="${escapeAttr(a.image)}" alt="" loading="eager" referrerpolicy="no-referrer" onerror="this.parentElement.style.display='none'" />
          <div class="cover-shade"></div>
        </div>` : ''}
      <div class="body">
        <div class="meta">
          <span class="chip" data-cat="${a.category}">${CAT_LABELS[a.category] || ''}</span>
          <span class="source">${escapeHtml(a.source)}</span>
          <span class="dot">·</span>
          <span class="timeago">${timeAgo(a.timestamp)}</span>
        </div>
        <h2>${escapeHtml(a.title)}</h2>
        ${a.desc ? `<p>${escapeHtml(a.desc)}</p>` : ''}
      </div>
    </a>
  `;
}

function renderArticleStandard(a) {
  return `
    <a class="article standard" href="${escapeAttr(a.link)}" target="_blank" rel="noopener">
      <div class="body">
        <div class="meta">
          <span class="chip" data-cat="${a.category}">${CAT_LABELS[a.category] || ''}</span>
          <span class="source">${escapeHtml(a.source)}</span>
          <span class="dot">·</span>
          <span class="timeago">${timeAgo(a.timestamp)}</span>
        </div>
        <h2>${escapeHtml(a.title)}</h2>
        ${a.desc ? `<p>${escapeHtml(a.desc)}</p>` : ''}
      </div>
      ${a.image ? `
        <div class="thumb">
          <img src="${escapeAttr(a.image)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.style.display='none'" />
        </div>` : `<div class="thumb" style="display:none;"></div>`}
    </a>
  `;
}

function renderArticleCompact(a) {
  return `
    <a class="article compact" href="${escapeAttr(a.link)}" target="_blank" rel="noopener">
      <div class="meta">
        <span class="chip" data-cat="${a.category}">${CAT_LABELS[a.category] || ''}</span>
        <span class="source">${escapeHtml(a.source)}</span>
        <span class="dot">·</span>
        <span class="timeago">${timeAgo(a.timestamp)}</span>
      </div>
      <h2>${escapeHtml(a.title)}</h2>
      ${a.desc ? `<p>${escapeHtml(a.desc)}</p>` : ''}
    </a>
  `;
}

function renderArticle(a, variant) {
  if (variant === 'hero') return renderArticleHero(a);
  if (a.image) return renderArticleStandard(a);
  return renderArticleCompact(a);
}

function renderSectionHeader(label, color) {
  return `
    <div class="section-header">
      <h2><span class="section-dot" style="--section-color:${color}"></span>${label}</h2>
    </div>
  `;
}

function render() {
  const main = document.getElementById('feed');

  // ---- Single-category view: hero + flowing list ----
  if (activeCategory !== 'all') {
    const list = articles.filter(a => a.category === activeCategory);
    if (!list.length) {
      main.innerHTML = `<div class="state">No stories yet. Tap ↻ to refresh.</div>`;
      return;
    }
    const hero = list.find(a => a.image) || list[0];
    const rest = list.filter(a => a !== hero).slice(0, 60);
    main.innerHTML =
      renderArticle(hero, 'hero') +
      rest.map(a => renderArticle(a)).join('');
    return;
  }

  // ---- For You: hero + Top Stories + per-category sections ----
  const curated = curatedForYou(articles);
  if (!curated.length) {
    main.innerHTML = `<div class="state">No stories yet. Tap ↻ to refresh.</div>`;
    return;
  }
  // Hero = best curated item (with image preferred)
  const hero = curated.find(a => a.image) || curated[0];
  const heroSet = new Set([hero.link]);

  // Top Stories: next 5 from the curated list
  const topStories = curated.filter(a => !heroSet.has(a.link)).slice(0, 6);
  topStories.forEach(a => heroSet.add(a.link));

  // Per-section: pull 4-5 per category, freshest first, skipping already-shown items
  const sectionsHtml = SECTION_ORDER.map(cat => {
    const items = articles
      .filter(a => a.category === cat && !heroSet.has(a.link))
      .sort((x, y) => y.timestamp - x.timestamp)
      .slice(0, 4);
    if (!items.length) return '';
    items.forEach(a => heroSet.add(a.link));
    return renderSectionHeader(CAT_LABELS[cat], CAT_COLOR[cat]) +
           items.map(a => renderArticle(a)).join('');
  }).join('');

  main.innerHTML =
    renderArticle(hero, 'hero') +
    renderSectionHeader('Top Stories', 'var(--fg)') +
    topStories.map(a => renderArticle(a)).join('') +
    sectionsHtml;
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
  const eye   = document.getElementById('eyebrow');
  if (eye) eye.textContent = activeCategory === 'all' ? 'Today' : CAT_LABELS[activeCategory] || 'Today';
  if (greet) greet.textContent = activeCategory === 'all'
    ? `${timeOfDayGreeting()}, Brooke`
    : (CAT_LABELS[activeCategory] || 'News');
  if (sub) {
    const dateStr = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const updated = ts ? ` · updated ${timeAgo(ts)}` : '';
    sub.textContent = `${dateStr}${updated}`;
  }
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
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}
function escapeAttr(s) { return escapeHtml(s); }

// ============ events ============

document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.seg');
  if (!btn) return;
  document.querySelectorAll('.seg').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.cat;
  updateGreeting(readCache()?.fetchedAt);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const refreshBtn = document.getElementById('refresh-btn-top');
if (refreshBtn) {
  refreshBtn.addEventListener('click', async () => {
    refreshBtn.disabled = true;
    refreshBtn.classList.add('spin');
    try { await loadAll(true); }
    finally {
      refreshBtn.disabled = false;
      refreshBtn.classList.remove('spin');
    }
  });
}

// ============ Jennifer — AI chat assistant ============
const JENNIFER_KEY = 'n4b.jennifer.chat.v1';

const jenniferFab       = document.getElementById('jennifer-fab');
const jenniferBackdrop  = document.getElementById('jennifer-backdrop');
const jenniferSheet     = document.getElementById('jennifer-sheet');
const jenniferClose     = document.getElementById('jennifer-close');
const jenniferMessages  = document.getElementById('jennifer-messages');
const jenniferForm      = document.getElementById('jennifer-form');
const jenniferInput     = document.getElementById('jennifer-input');
const jenniferSend      = document.getElementById('jennifer-send');
const jenniferSuggest   = document.getElementById('jennifer-suggestions');

function loadChat() {
  try {
    const raw = localStorage.getItem(JENNIFER_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch { return []; }
}
function saveChat(msgs) {
  try { localStorage.setItem(JENNIFER_KEY, JSON.stringify(msgs.slice(-40))); } catch {}
}
let chatMessages = loadChat();

function renderChat() {
  jenniferMessages.innerHTML = '';
  if (!chatMessages.length) {
    jenniferMessages.innerHTML = `
      <div class="jennifer-greeting">
        <div class="hi">Hi Brooke, I'm Jennifer ✨</div>
        <div class="pitch">I'm caught up on everything in your news feed — founders, AI, legal tech, markets, style, pop culture, and world events. Ask me anything.</div>
      </div>`;
    return;
  }
  for (const m of chatMessages) {
    const el = document.createElement('div');
    el.className = `msg ${m.role}${m.error ? ' error' : ''}`;
    el.textContent = m.content;
    jenniferMessages.appendChild(el);
  }
  jenniferMessages.scrollTop = jenniferMessages.scrollHeight;
}

function showTyping() {
  const t = document.createElement('div');
  t.className = 'msg-typing';
  t.id = 'jennifer-typing';
  t.innerHTML = '<span></span><span></span><span></span>';
  jenniferMessages.appendChild(t);
  jenniferMessages.scrollTop = jenniferMessages.scrollHeight;
}
function hideTyping() {
  const t = document.getElementById('jennifer-typing');
  if (t) t.remove();
}

function newsContextForJennifer() {
  // Pull the top recent headlines across categories — keep prompt small
  const cached = readCache();
  if (!cached || !cached.articles) return '';
  const byCat = {};
  for (const a of cached.articles) {
    byCat[a.category] = byCat[a.category] || [];
    if (byCat[a.category].length < 8) byCat[a.category].push(a);
  }
  let context = '';
  for (const [cat, arts] of Object.entries(byCat)) {
    context += `\n## ${CAT_LABELS[cat] || cat}\n`;
    for (const a of arts) {
      const when = timeAgo(a.timestamp);
      context += `- [${a.source} · ${when}] ${a.title}${a.desc ? ' — ' + a.desc.slice(0, 160) : ''}\n`;
    }
  }
  return context.slice(0, 12000); // bound prompt size
}

async function askJennifer(question) {
  chatMessages.push({ role: 'user', content: question });
  saveChat(chatMessages);
  renderChat();
  showTyping();

  // Send last 10 turns + news context
  const apiMessages = chatMessages.slice(-10).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content,
  }));

  try {
    const res = await fetch('/api/jennifer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: apiMessages,
        context: newsContextForJennifer(),
      }),
    });
    const data = await res.json();
    hideTyping();
    if (!res.ok || data.error) {
      chatMessages.push({ role: 'assistant', content: data.error || 'Sorry, something went wrong.', error: true });
    } else {
      chatMessages.push({ role: 'assistant', content: data.reply || '...' });
    }
  } catch (e) {
    hideTyping();
    chatMessages.push({ role: 'assistant', content: 'I had trouble reaching the server. Try again in a moment.', error: true });
  }
  saveChat(chatMessages);
  renderChat();
}

function openJennifer() {
  renderChat();
  jenniferSheet.classList.add('open');
  jenniferBackdrop.classList.add('open');
  document.body.classList.add('jennifer-open');
  setTimeout(() => jenniferInput && jenniferInput.focus(), 320);
}
function closeJennifer() {
  jenniferSheet.classList.remove('open');
  jenniferBackdrop.classList.remove('open');
  document.body.classList.remove('jennifer-open');
}
jenniferFab?.addEventListener('click', openJennifer);
jenniferClose?.addEventListener('click', closeJennifer);
jenniferBackdrop?.addEventListener('click', closeJennifer);

// Auto-grow textarea
jenniferInput?.addEventListener('input', () => {
  jenniferInput.style.height = 'auto';
  jenniferInput.style.height = Math.min(jenniferInput.scrollHeight, 140) + 'px';
});

// Cmd/Ctrl-Enter to send; Enter on mobile also sends
jenniferInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    jenniferForm.requestSubmit();
  }
});

jenniferForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = (jenniferInput.value || '').trim();
  if (!q) return;
  jenniferInput.value = '';
  jenniferInput.style.height = 'auto';
  jenniferSend.disabled = true;
  try { await askJennifer(q); }
  finally { jenniferSend.disabled = false; }
});

jenniferSuggest?.addEventListener('click', (e) => {
  const btn = e.target.closest('.suggestion');
  if (!btn) return;
  askJennifer(btn.dataset.q);
});

setInterval(() => {
  const cached = readCache();
  if (cached) updateGreeting(cached.fetchedAt);
}, 30_000);

// continuous-refresh
let autoTimer = null;
function startAutoRefresh() {
  if (autoTimer) return;
  autoTimer = setInterval(() => {
    if (document.visibilityState === 'visible') loadAll(true).catch(() => {});
  }, AUTO_REFRESH_MS);
}
function stopAutoRefresh() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
startAutoRefresh();

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') { loadAll(true).catch(() => {}); startAutoRefresh(); }
  else stopAutoRefresh();
});
window.addEventListener('focus',   () => loadAll(true).catch(() => {}));
window.addEventListener('pageshow',() => loadAll(true).catch(() => {}));
window.addEventListener('online',  () => loadAll(true).catch(() => {}));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

updateGreeting(null);
loadAll(false);
