// News4Brooke — premium news PWA, custom for Brooke

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
const SECTION_ORDER = ['ai','markets','style','pop-culture','us-news','canada-news','israel-iran'];

// Source avatar colors (deterministic by source name)
const SOURCE_COLORS = ['#6c8bef','#e88aa5','#67c9c1','#d4af6a','#a78bfa','#5ec27a','#e8a572','#8ba9d9','#d88a8a','#b89dd6'];
function sourceColor(name) {
  let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return SOURCE_COLORS[h % SOURCE_COLORS.length];
}
function sourceInitials(name) {
  return name.replace(/[^A-Za-z0-9 &]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase().slice(0,2) || '•';
}

const PROXIES = [
  url => `/api/proxy?url=${encodeURIComponent(url)}`,
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

const CACHE_KEY     = 'n4b.cache.v7';
const READ_KEY      = 'n4b.read.v1';
const SAVED_KEY     = 'n4b.saved.v1';
const LASTSEEN_KEY  = 'n4b.lastseen.v1';
const CACHE_TTL_MS    = 90 * 1000;
const AUTO_REFRESH_MS = 90 * 1000;
const ITEMS_PER_SOURCE = 12;

let activeCategory = 'all';
let articles = [];
let readSet  = new Set();
let savedMap = {};   // { link: article }
let lastSeenAt = Date.now();

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

function txt(node, tag) { const el = node.querySelector(tag); return el ? (el.textContent || '').trim() : ''; }
function stripHtml(s) { if (!s) return ''; const tmp = document.createElement('div'); tmp.innerHTML = s; return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim(); }

function extractImage(item) {
  for (const child of item.children) {
    const ln = (child.localName || child.nodeName || '').toLowerCase();
    if (ln === 'content') {
      const medium = (child.getAttribute('medium') || '').toLowerCase();
      const type = (child.getAttribute('type') || '').toLowerCase();
      if (medium === 'image' || type.startsWith('image')) {
        const u = child.getAttribute('url'); if (u) return u;
      }
    }
    if (ln === 'thumbnail') { const u = child.getAttribute('url') || child.getAttribute('href'); if (u) return u; }
    if (ln === 'enclosure') {
      const type = (child.getAttribute('type') || '').toLowerCase();
      const u = child.getAttribute('url');
      if (u && (type.startsWith('image') || /\.(jpe?g|png|webp|gif)(\?|$)/i.test(u))) return u;
    }
    if (ln === 'image') {
      const u = child.getAttribute('href') || child.getAttribute('url'); if (u) return u;
      const inner = child.querySelector && child.querySelector('url'); if (inner) return inner.textContent.trim();
    }
  }
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
  const cleanTitle = stripHtml(title);
  const cleanDesc  = stripHtml(desc).slice(0, 320);
  const wordCount = (cleanTitle + ' ' + cleanDesc).split(/\s+/).length;
  // For brief snippets we use a min of 1; real article reading time can't be known w/o fetching the page
  const readMin = Math.max(1, Math.round(wordCount / 200));
  return {
    title: cleanTitle,
    link: link.trim(),
    desc: cleanDesc,
    source, category, timestamp,
    image: image || null,
    readMin,
  };
}

// ============ persistence ============

function readCache()  { try { return JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch { return null; } }
function writeCache(arts) { try { localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), articles: arts })); } catch {} }

function loadRead()   { try { return new Set(JSON.parse(localStorage.getItem(READ_KEY) || '[]')); } catch { return new Set(); } }
function saveRead()   { try { localStorage.setItem(READ_KEY, JSON.stringify(Array.from(readSet).slice(-2000))); } catch {} }

function loadSaved()  { try { return JSON.parse(localStorage.getItem(SAVED_KEY) || '{}'); } catch { return {}; } }
function persistSaved(){ try { localStorage.setItem(SAVED_KEY, JSON.stringify(savedMap)); } catch {} }

function loadLastSeen(){ const v = parseInt(localStorage.getItem(LASTSEEN_KEY) || '0', 10); return isNaN(v) ? 0 : v; }
function bumpLastSeen(){ localStorage.setItem(LASTSEEN_KEY, String(Date.now())); }

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

// ============ curation ============

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
    const imgBoost = a.image ? 1.06 : 1.0;
    const readDown = readSet.has(a.link) ? 0.55 : 1.0;
    return { ...a, _score: recency * w * imgBoost * readDown };
  }).sort((x, y) => y._score - x._score);
  const counts = {};
  const picked = []; const rest = [];
  for (const a of scored) {
    counts[a.category] = counts[a.category] || 0;
    if (picked.length < 40 && counts[a.category] < 5) {
      counts[a.category]++; picked.push(a);
    } else rest.push(a);
  }
  return picked.concat(rest);
}

// ============ render helpers ============

function bookmarkSvg(saved) {
  if (saved) {
    return '<svg viewBox="0 0 14 16" fill="currentColor" stroke="currentColor" stroke-width="1.4"><path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V15.5L7 12.5L2 15.5V1.5Z"/></svg>';
  }
  return '<svg viewBox="0 0 14 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V15.5L7 12.5L2 15.5V1.5Z"/></svg>';
}

function metaHtml(a) {
  const isJustIn = (Date.now() - a.timestamp) < 30 * 60 * 1000;
  const sa = `<span class="source-avatar" style="background:${sourceColor(a.source)}">${escapeHtml(sourceInitials(a.source))}</span>`;
  return `
    <div class="article-meta">
      <span class="chip" data-cat="${a.category}">${CAT_LABELS[a.category] || ''}</span>
      ${isJustIn ? '<span class="badge-new">Just in</span>' : ''}
      ${sa}
      <span class="source">${escapeHtml(a.source)}</span>
      <span class="dot">·</span>
      <span class="timeago">${timeAgo(a.timestamp)}</span>
      <span class="dot">·</span>
      <span class="readtime">${a.readMin} min</span>
    </div>
  `;
}

function renderArticleHero(a) {
  const isSaved = !!savedMap[a.link];
  const isRead  = readSet.has(a.link);
  const cls = `article hero ${a.image ? '' : 'no-image'} ${isRead ? 'read' : ''}`;
  const style = a.image ? '' : `style="--hero-tint:${CAT_COLOR[a.category] || 'var(--tint)'}"`;
  return `
    <a class="${cls}" ${style} href="${escapeAttr(a.link)}" target="_blank" rel="noopener" data-link="${escapeAttr(a.link)}">
      <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-action="save" data-link="${escapeAttr(a.link)}" aria-label="${isSaved ? 'Unsave' : 'Save'}">${bookmarkSvg(isSaved)}</button>
      ${a.image ? `<div class="cover"><img src="${escapeAttr(a.image)}" alt="" loading="eager" referrerpolicy="no-referrer" onerror="this.parentElement.style.display='none'" /></div><div class="shade"></div>` : ''}
      <div class="body">
        ${metaHtml(a)}
        <h2 class="article-title">${escapeHtml(a.title)}</h2>
        ${a.desc ? `<p class="article-desc">${escapeHtml(a.desc)}</p>` : ''}
      </div>
    </a>
  `;
}

function renderArticleStandard(a) {
  const isSaved = !!savedMap[a.link];
  const isRead  = readSet.has(a.link);
  return `
    <a class="article standard ${isRead ? 'read' : ''}" href="${escapeAttr(a.link)}" target="_blank" rel="noopener" data-link="${escapeAttr(a.link)}">
      <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-action="save" data-link="${escapeAttr(a.link)}" aria-label="${isSaved ? 'Unsave' : 'Save'}">${bookmarkSvg(isSaved)}</button>
      <div class="body">
        ${metaHtml(a)}
        <h2 class="article-title">${escapeHtml(a.title)}</h2>
        ${a.desc ? `<p class="article-desc">${escapeHtml(a.desc)}</p>` : ''}
      </div>
      ${a.image ? `<div class="thumb"><img src="${escapeAttr(a.image)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.style.display='none'" /></div>` : `<div class="thumb" style="display:none;"></div>`}
    </a>
  `;
}

function renderArticleCompact(a) {
  const isSaved = !!savedMap[a.link];
  const isRead  = readSet.has(a.link);
  return `
    <a class="article compact ${isRead ? 'read' : ''}" href="${escapeAttr(a.link)}" target="_blank" rel="noopener" data-link="${escapeAttr(a.link)}">
      <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-action="save" data-link="${escapeAttr(a.link)}" aria-label="${isSaved ? 'Unsave' : 'Save'}">${bookmarkSvg(isSaved)}</button>
      ${metaHtml(a)}
      <h2 class="article-title">${escapeHtml(a.title)}</h2>
      ${a.desc ? `<p class="article-desc">${escapeHtml(a.desc)}</p>` : ''}
    </a>
  `;
}

function renderArticle(a, variant) {
  if (variant === 'hero') return renderArticleHero(a);
  if (a.image) return renderArticleStandard(a);
  return renderArticleCompact(a);
}

function renderSectionHeader(label, color, subtitle) {
  return `
    <div class="section-header">
      <h2><span class="section-dot" style="--section-color:${color}"></span>${label}</h2>
    </div>
    ${subtitle ? `<div class="section-sub">${subtitle}</div>` : ''}
  `;
}

function renderQuickBrief(items) {
  if (!items.length) return '';
  return `
    <div class="quick-brief">
      <div class="qb-eyebrow">Today's Brief</div>
      <div class="qb-title">The three things to know.</div>
      <ol class="qb-list">
        ${items.map(a => `
          <a class="qb-item ${readSet.has(a.link) ? 'read' : ''}" href="${escapeAttr(a.link)}" target="_blank" rel="noopener" data-link="${escapeAttr(a.link)}">
            <div>
              <div class="qb-meta">${CAT_LABELS[a.category] || ''} · ${escapeHtml(a.source)} · ${a.readMin} min</div>
              <h3>${escapeHtml(a.title)}</h3>
            </div>
          </a>
        `).join('')}
      </ol>
    </div>
  `;
}

function render() {
  const main = document.getElementById('feed');

  // ---- Saved tab ----
  if (activeCategory === 'saved') {
    const saved = Object.values(savedMap).sort((a,b) => (b.savedAt||0) - (a.savedAt||0));
    if (!saved.length) {
      main.innerHTML = `
        <div class="state">
          <div class="state-icon">
            <svg width="20" height="22" viewBox="0 0 14 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V15.5L7 12.5L2 15.5V1.5Z"/></svg>
          </div>
          <div class="state-title">Saved for later</div>
          <div>Tap the bookmark on any story to keep it here.</div>
        </div>`;
      return;
    }
    main.innerHTML = saved.map(a => renderArticle(a)).join('');
    return;
  }

  // ---- Single-category view ----
  if (activeCategory !== 'all') {
    const list = articles.filter(a => a.category === activeCategory);
    if (!list.length) { main.innerHTML = `<div class="state">No stories yet. Pull to refresh.</div>`; return; }
    const hero = list.find(a => a.image) || list[0];
    const rest = list.filter(a => a !== hero).slice(0, 60);
    main.innerHTML = renderArticle(hero, 'hero') + rest.map(a => renderArticle(a)).join('');
    return;
  }

  // ---- For You ----
  const curated = curatedForYou(articles);
  if (!curated.length) { main.innerHTML = `<div class="state">No stories yet. Pull to refresh.</div>`; return; }

  const used = new Set();
  // Quick Brief: top 3 unique top-ranked items
  const brief = [];
  for (const a of curated) { if (brief.length >= 3) break; brief.push(a); used.add(a.link); }

  // Hero: best curated item with image (not in brief)
  const heroCandidate = curated.find(a => a.image && !used.has(a.link)) || curated.find(a => !used.has(a.link)) || curated[0];
  used.add(heroCandidate.link);

  // Top Stories: next 5
  const topStories = curated.filter(a => !used.has(a.link)).slice(0, 5);
  topStories.forEach(a => used.add(a.link));

  // For Your Practice — combine founders + legal-tech (Brooke's work context)
  const practiceItems = articles
    .filter(a => (a.category === 'founders' || a.category === 'legal-tech') && !used.has(a.link))
    .sort((x,y) => y.timestamp - x.timestamp)
    .slice(0, 4);
  practiceItems.forEach(a => used.add(a.link));

  // Per-category sections
  const sectionsHtml = SECTION_ORDER.map(cat => {
    const items = articles
      .filter(a => a.category === cat && !used.has(a.link))
      .sort((x, y) => y.timestamp - x.timestamp)
      .slice(0, 4);
    if (!items.length) return '';
    items.forEach(a => used.add(a.link));
    return renderSectionHeader(CAT_LABELS[cat], CAT_COLOR[cat]) +
           items.map(a => renderArticle(a)).join('');
  }).join('');

  main.innerHTML =
    renderQuickBrief(brief) +
    renderArticle(heroCandidate, 'hero') +
    renderSectionHeader('Top Stories', 'var(--fg)') +
    topStories.map(a => renderArticle(a)).join('') +
    (practiceItems.length
      ? renderSectionHeader('For Your Practice', 'var(--gold)', 'Founders &amp; legal tech, curated for For Founders Law.') +
        practiceItems.map(a => renderArticle(a)).join('')
      : '') +
    sectionsHtml;
}

// ============ greeting ============

function timeOfDayGreeting() {
  const h = new Date().getHours();
  if (h < 5)  return 'Up late';
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  if (h < 21) return 'Good evening';
  return 'Tonight';
}
function dayPrefix() {
  const d = new Date();
  const day = d.getDay();   // 0 Sun
  const h = d.getHours();
  if (day === 0) return 'Happy Sunday';
  if (day === 6) return 'Happy Saturday';
  if (day === 5 && h >= 16) return 'TGIF';
  if (day === 1 && h < 12) return 'Monday morning';
  return null;
}
function updateGreeting(ts) {
  const greet = document.getElementById('greeting');
  const sub   = document.getElementById('subtitle');
  const eye   = document.getElementById('eyebrow');
  const prefix = dayPrefix();
  if (eye) eye.textContent = activeCategory === 'all'
    ? (prefix ? prefix : 'Today')
    : (activeCategory === 'saved' ? 'Library' : CAT_LABELS[activeCategory] || 'Today');
  if (greet) {
    if (activeCategory === 'saved') greet.textContent = 'Saved for later';
    else if (activeCategory === 'all') greet.textContent = `${timeOfDayGreeting()}, Brooke`;
    else greet.textContent = CAT_LABELS[activeCategory] || 'News';
  }
  if (sub) {
    const dateStr = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const updated = ts ? ` · updated ${timeAgo(ts)}` : '';
    let newCountHtml = '';
    if (ts && activeCategory === 'all') {
      const fresh = articles.filter(a => a.timestamp > lastSeenAt).length;
      if (fresh > 0) newCountHtml = `<span class="new-count">${fresh} new</span>`;
    }
    sub.innerHTML = `${dateStr}${updated}${newCountHtml}`;
  }
  updateSettingsCounts();
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

function updateSettingsCounts() {
  const unreadEl = document.getElementById('unread-count');
  const savedEl  = document.getElementById('saved-count');
  if (unreadEl) {
    const unread = articles.filter(a => !readSet.has(a.link)).length;
    unreadEl.textContent = `${unread} unread`;
  }
  if (savedEl) savedEl.textContent = `${Object.keys(savedMap).length}`;
}

// ============ events ============

document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.seg');
  if (!btn) return;
  document.querySelectorAll('.seg').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.cat;
  bumpLastSeen(); lastSeenAt = Date.now();
  updateGreeting(readCache()?.fetchedAt);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mark articles read on click and toggle bookmarks
document.getElementById('feed').addEventListener('click', (e) => {
  const bm = e.target.closest('[data-action="save"]');
  if (bm) {
    e.preventDefault(); e.stopPropagation();
    const link = bm.dataset.link;
    const art = articles.find(a => a.link === link) || savedMap[link];
    if (!art) return;
    if (savedMap[link]) { delete savedMap[link]; }
    else { savedMap[link] = { ...art, savedAt: Date.now() }; }
    persistSaved();
    render();
    return;
  }
  const a = e.target.closest('[data-link]');
  if (a && a.dataset.link) {
    if (!readSet.has(a.dataset.link)) {
      readSet.add(a.dataset.link);
      saveRead();
    }
  }
});

const refreshBtn = document.getElementById('refresh-btn-top');
if (refreshBtn) {
  refreshBtn.addEventListener('click', async () => {
    refreshBtn.disabled = true; refreshBtn.classList.add('spin');
    try { await loadAll(true); }
    finally { refreshBtn.disabled = false; refreshBtn.classList.remove('spin'); }
  });
}

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

if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js').catch(() => {});

// ============ Settings sheet ============
const settingsFab      = document.getElementById('settings-fab');
const sheetBackdrop    = document.getElementById('sheet-backdrop');
const settingsSheet    = document.getElementById('settings-sheet');
const settingsClose    = document.getElementById('settings-close');

function openSheet()  { settingsSheet.classList.add('open');  sheetBackdrop.classList.add('open'); document.body.style.overflow='hidden'; updateSettingsCounts(); }
function closeSheet() { settingsSheet.classList.remove('open'); sheetBackdrop.classList.remove('open'); document.body.style.overflow=''; }
settingsFab.addEventListener('click', openSheet);
settingsClose.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);

document.getElementById('setting-mark-read').addEventListener('click', () => {
  for (const a of articles) readSet.add(a.link);
  saveRead(); render(); updateSettingsCounts();
});
document.getElementById('setting-clear-read').addEventListener('click', () => {
  readSet = new Set(); saveRead(); render(); updateSettingsCounts();
});
document.getElementById('setting-view-saved').addEventListener('click', () => {
  document.querySelectorAll('.seg').forEach(t => t.classList.toggle('active', t.dataset.cat === 'saved'));
  activeCategory = 'saved';
  closeSheet(); updateGreeting(readCache()?.fetchedAt); render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('setting-clear-saved').addEventListener('click', () => {
  savedMap = {}; persistSaved(); render(); updateSettingsCounts();
});
document.getElementById('setting-refresh-now').addEventListener('click', async () => { closeSheet(); await loadAll(true); });
document.getElementById('setting-clear-cache').addEventListener('click', async () => {
  try {
    const regs = await navigator.serviceWorker.getRegistrations(); for (const r of regs) await r.unregister();
    for (const n of await caches.keys()) await caches.delete(n);
  } catch {}
  localStorage.removeItem(CACHE_KEY);
  location.reload();
});

// ============ boot ============
readSet  = loadRead();
savedMap = loadSaved();
lastSeenAt = loadLastSeen() || Date.now();
bumpLastSeen();
updateGreeting(null);
loadAll(false);
