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
    // Brand-focused AI legal tech (Harvey, Crosby, Legora, Spellbook, Robin AI, Claude/GPT-for-law)
    { name: 'AI Legal Tech',         url: 'https://news.google.com/rss/search?q=(%22Harvey+AI%22+OR+%22Crosby+AI%22+OR+Legora+OR+Spellbook+OR+%22Robin+AI%22+OR+%22Hebbia%22+OR+%22Eve+Legal%22+OR+%22Ironclad+AI%22+OR+%22Claude+legal%22+OR+%22ChatGPT+legal%22+OR+%22legal+AI+startup%22)+when:14d&hl=en-US&gl=US&ceid=US:en' },
    { name: 'Harvey AI',             url: 'https://news.google.com/rss/search?q=%22Harvey+AI%22+OR+%22Harvey.ai%22+when:30d&hl=en-US&gl=US&ceid=US:en' },
  ],
  'astrology': [
    { name: 'Astrostyle',            url: 'https://astrostyle.com/feed/' },
    { name: 'Aries Daily',           url: 'https://news.google.com/rss/search?q=%22Aries+horoscope%22+today+when:1d&hl=en-US&gl=US&ceid=US:en' },
    { name: 'Moon Watch',            url: 'https://news.google.com/rss/search?q=%22full+moon%22+OR+%22new+moon%22+OR+%22moon+phase%22+OR+%22moon+sign%22+when:3d&hl=en-US&gl=US&ceid=US:en' },
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
  'astrology':   'Stars',
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
  'astrology':   '#c0a3e6',
  'us-news':     'var(--c-us)',
  'canada-news': 'var(--c-canada)',
  'israel-iran': 'var(--c-israel)',
};
const SECTION_ORDER = ['ai','markets','style','pop-culture','astrology','us-news','canada-news','israel-iran'];

// Brooke's birth chart (March 22, 2000 · 1:19 AM · Toronto, Ontario)
const BROOKE_CHART = {
  sun:     { sign: 'Aries',       glyph: '♈', element: 'Fire', modality: 'Cardinal', archetype: 'The pioneer — bold, direct, all-in.' },
  moon:    { sign: 'Libra',       glyph: '♎', element: 'Air',  modality: 'Cardinal', archetype: 'Emotionally needs harmony, beauty, partnership.' },
  rising:  { sign: 'Sagittarius', glyph: '♐', element: 'Fire', modality: 'Mutable',  archetype: 'Reads as adventurous, philosophical, candid.' },
  born:    'March 22, 2000 · 1:19 AM · Toronto, Ontario',
};

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
    updateTabCounts();
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
  updateTabCounts();
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

function renderSectionHeader(label, color, jumpCat, subtitle) {
  const jumpAttr = jumpCat ? `data-jump-cat="${jumpCat}"` : '';
  const cls = jumpCat ? 'section-header' : 'section-header no-jump';
  const tail = jumpCat ? '<span class="see-more">All →</span>' : '';
  return `
    <button class="${cls}" ${jumpAttr} type="button">
      <h2><span class="section-dot" style="--section-color:${color}"></span>${label}</h2>
      ${tail}
    </button>
    ${subtitle ? `<div class="section-sub">${subtitle}</div>` : ''}
  `;
}

function renderSectionFooter(cat, label) {
  if (!cat) return '';
  return `<button class="section-footer" type="button" data-jump-cat="${cat}">More in ${label} →</button>`;
}

// ============ Astrology helpers ============
const ZODIAC = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const ZODIAC_GLYPHS = { Aries:'♈',Taurus:'♉',Gemini:'♊',Cancer:'♋',Leo:'♌',Virgo:'♍',Libra:'♎',Scorpio:'♏',Sagittarius:'♐',Capricorn:'♑',Aquarius:'♒',Pisces:'♓' };

function moonPhase(date = new Date()) {
  // Conway/NASA-style approximation
  const newMoonRef = Date.UTC(2000, 0, 6, 18, 14, 0) / 1000; // Jan 6 2000 18:14 UTC = new moon
  const synodic = 29.530588853 * 86400; // seconds
  const t = (date.getTime() / 1000 - newMoonRef) % synodic;
  const phase = t / synodic; // 0..1
  let name, glyph;
  if (phase < 0.03 || phase > 0.97) { name = 'New Moon'; glyph = '🌑'; }
  else if (phase < 0.22) { name = 'Waxing Crescent'; glyph = '🌒'; }
  else if (phase < 0.28) { name = 'First Quarter'; glyph = '🌓'; }
  else if (phase < 0.47) { name = 'Waxing Gibbous'; glyph = '🌔'; }
  else if (phase < 0.53) { name = 'Full Moon'; glyph = '🌕'; }
  else if (phase < 0.72) { name = 'Waning Gibbous'; glyph = '🌖'; }
  else if (phase < 0.78) { name = 'Last Quarter'; glyph = '🌗'; }
  else { name = 'Waning Crescent'; glyph = '🌘'; }
  const illum = Math.round(50 * (1 - Math.cos(2 * Math.PI * phase)));
  return { name, glyph, illum, phase };
}

function moonSign(date = new Date()) {
  // Mean longitude of the Moon (Meeus, simplified)
  const d = (date.getTime() / 86400000) - 10957.5; // days since J2000
  let L = (218.316 + 13.176396 * d) % 360;
  if (L < 0) L += 360;
  const sign = ZODIAC[Math.floor(L / 30)];
  return { sign, glyph: ZODIAC_GLYPHS[sign], degree: Math.floor(L % 30) };
}

function sunSeason(date = new Date()) {
  // What zodiac season the sun is currently in (approximate boundaries)
  const m = date.getMonth() + 1, day = date.getDate();
  const r = [
    [3, 20, 'Aries'],[4, 20, 'Taurus'],[5, 21, 'Gemini'],[6, 21, 'Cancer'],
    [7, 23, 'Leo'],[8, 23, 'Virgo'],[9, 23, 'Libra'],[10, 23, 'Scorpio'],
    [11, 22, 'Sagittarius'],[12, 22, 'Capricorn'],[1, 20, 'Aquarius'],[2, 19, 'Pisces']
  ];
  // pick the most recent boundary not later than today
  const stamp = m * 100 + day;
  let cur = 'Pisces';
  for (const [mm, dd, sign] of r) { if (stamp >= mm * 100 + dd) cur = sign; }
  // wrap for jan/feb (pisces from feb 19 onwards, etc.)
  // Aquarius spans late Jan to mid Feb, override
  if ((m === 1 && day >= 20) || (m === 2 && day < 19)) cur = 'Aquarius';
  return { sign: cur, glyph: ZODIAC_GLYPHS[cur] };
}

const MOON_SIGN_VIBE = {
  Aries:'Bold, impatient, action-first. Pick the bravest option.',
  Taurus:'Cozy, sensual, slow. Tend to your body and your space.',
  Gemini:'Curious, chatty, scattered. A good day for ideas and texts.',
  Cancer:'Tender and home-focused. Honor what you actually feel.',
  Leo:'Warm, theatrical, generous. Take up space; be seen.',
  Virgo:'Practical, fine-detail, clean-slate energy. Tidy something.',
  Libra:'Harmonizing, social, aesthetic. Your home turf, Brooke.',
  Scorpio:'Intense, private, transformative. Trust the undercurrent.',
  Sagittarius:'Big-picture, restless, philosophical. Adventure beckons.',
  Capricorn:'Disciplined, ambitious, structural. Build something.',
  Aquarius:'Detached, inventive, future-facing. Solve something weird.',
  Pisces:'Dreamy, porous, intuitive. Make art; nap; listen to music.',
};
const LIBRA_MOON_TODAY = (moonSignName) => {
  if (moonSignName === 'Libra') return "The Moon is on your natal Moon today — emotionally home base. Expect big feelings, then balance.";
  if (moonSignName === 'Aries') return "The Moon opposes your natal Moon — partnership tension or push-pull. Don't avoid the conversation.";
  if (moonSignName === 'Cancer' || moonSignName === 'Capricorn') return "The Moon squares your natal Moon — friction with home or career goals. Adjust, don't force.";
  if (moonSignName === 'Gemini' || moonSignName === 'Aquarius') return "Air-sign Moon trining your Libra Moon — ease, conversation, social flow.";
  return `Moon in ${moonSignName}, working with your Libra Moon — emotional weather is shifting; notice what feels off.`;
};
const SAG_RISING_VIBE = "Your Sag Rising puts an outgoing, philosophical mask on the world — today's energy lands as: do bigger, ask bigger questions, follow what feels expansive, not what feels safe.";

// Full natal placements for March 22, 2000 · 1:19 AM · Toronto
// Inner planets derived from known 2000 ephemeris snapshots — degrees approximate.
const BROOKE_NATAL = [
  { body: 'Sun',       glyph: '☉', sign: 'Aries',       degree: '~1°',  house: '4th',  note: 'Identity, will' },
  { body: 'Moon',      glyph: '☾', sign: 'Libra',       degree: '~19°', house: '11th', note: 'Emotions, needs' },
  { body: 'Mercury',   glyph: '☿', sign: 'Pisces',      degree: '~22°', house: '3rd',  note: 'Mind, voice' },
  { body: 'Venus',     glyph: '♀', sign: 'Aquarius',    degree: '~19°', house: '2nd',  note: 'Love, values' },
  { body: 'Mars',      glyph: '♂', sign: 'Taurus',      degree: '~7°',  house: '5th',  note: 'Drive, anger' },
  { body: 'Jupiter',   glyph: '♃', sign: 'Aries',       degree: '~26°', house: '4th',  note: 'Growth, luck' },
  { body: 'Saturn',    glyph: '♄', sign: 'Taurus',      degree: '~17°', house: '5th',  note: 'Discipline' },
  { body: 'Uranus',    glyph: '♅', sign: 'Aquarius',    degree: '~17°', house: '2nd',  note: 'Disruption' },
  { body: 'Neptune',   glyph: '♆', sign: 'Aquarius',    degree: '~6°',  house: '2nd',  note: 'Dreams' },
  { body: 'Pluto',     glyph: '♇', sign: 'Sagittarius', degree: '~12°', house: '1st',  note: 'Power, depth' },
  { body: 'Rising',    glyph: '↑', sign: 'Sagittarius', degree: '~9°',  house: '—',   note: 'Outer mask' },
];

// Sun-sign element & modality (for synastry quick-look)
const ZODIAC_META = {
  Aries:{el:'Fire',mod:'Cardinal'}, Taurus:{el:'Earth',mod:'Fixed'}, Gemini:{el:'Air',mod:'Mutable'},
  Cancer:{el:'Water',mod:'Cardinal'}, Leo:{el:'Fire',mod:'Fixed'}, Virgo:{el:'Earth',mod:'Mutable'},
  Libra:{el:'Air',mod:'Cardinal'}, Scorpio:{el:'Water',mod:'Fixed'}, Sagittarius:{el:'Fire',mod:'Mutable'},
  Capricorn:{el:'Earth',mod:'Cardinal'}, Aquarius:{el:'Air',mod:'Fixed'}, Pisces:{el:'Water',mod:'Mutable'},
};
function signFromDate(month, day) {
  const r = [
    [3,21,'Aries'],[4,20,'Taurus'],[5,21,'Gemini'],[6,21,'Cancer'],[7,23,'Leo'],[8,23,'Virgo'],
    [9,23,'Libra'],[10,23,'Scorpio'],[11,22,'Sagittarius'],[12,22,'Capricorn'],[1,20,'Aquarius'],[2,19,'Pisces']
  ];
  const stamp = month * 100 + day;
  let cur = 'Pisces';
  for (const [m, d, s] of r) if (stamp >= m * 100 + d) cur = s;
  if ((month === 1 && day >= 20) || (month === 2 && day < 19)) cur = 'Aquarius';
  return cur;
}
function synastrySummary(theirSign) {
  if (!theirSign) return null;
  const mine = ZODIAC_META.Aries;            // her sun
  const moon = ZODIAC_META.Libra;            // her moon
  const them = ZODIAC_META[theirSign];
  const sameEl = mine.el === them.el;
  const compatibleEl = (
    (mine.el === 'Fire' && (them.el === 'Air' || them.el === 'Fire')) ||
    (mine.el === 'Air'  && (them.el === 'Fire' || them.el === 'Air'))  ||
    (mine.el === 'Earth'&& (them.el === 'Water'|| them.el === 'Earth'))||
    (mine.el === 'Water'&& (them.el === 'Earth'|| them.el === 'Water'))
  );
  let verdict;
  if (sameEl) verdict = 'Strong elemental match — easy chemistry, similar pace.';
  else if (compatibleEl) verdict = 'Compatible elements — natural attraction, with growth.';
  else verdict = 'Tension elements — magnetic but high-effort; growth comes through difference.';
  const moonSync = (moon.el === them.el) ? 'Your Libra Moon vibes with their sign — emotional ease.' : 'Your Libra Moon will need balance work with their style.';
  return { verdict, moonSync, mine, them };
}

// Today's aspect of Sun to her Aries Sun (rough — by sign distance)
function aspectToAriesSun(todaySign) {
  const idx = (a) => ZODIAC.indexOf(a);
  const diff = Math.abs(idx(todaySign) - idx('Aries'));
  const d = Math.min(diff, 12 - diff);
  switch (d) {
    case 0: return 'Solar return energy — strong sense of self.';
    case 1: return 'Soft hum next to your Sun — minor adjustments.';
    case 2: return 'Sextile to your Sun — easy, opportunity.';
    case 3: return 'Square to your Sun — friction; growth via challenge.';
    case 4: return 'Trine to your Sun — flow, ease, momentum.';
    case 5: return 'Quincunx — restless; pivot needed.';
    case 6: return 'Opposition — mirror; relationships in focus.';
  }
}

function renderAstrologyView() {
  const today = new Date();
  const mp = moonPhase(today);
  const ms = moonSign(today);
  const ss = sunSeason(today);
  const aspect = aspectToAriesSun(ss.sign);
  const dateStr = today.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });

  // Astrology articles (from the dedicated feed)
  const astroArts = articles.filter(a => a.category === 'astrology').slice(0, 12);

  return `
    <div class="astro-section">
      <!-- Birth chart -->
      <div class="astro-card chart">
        <div class="astro-eyebrow">Your Birth Chart</div>
        <div class="astro-born">${BROOKE_CHART.born}</div>
        <div class="big-three">
          ${['sun','moon','rising'].map(k => {
            const c = BROOKE_CHART[k];
            return `
              <div class="b3">
                <div class="b3-glyph">${c.glyph}</div>
                <div class="b3-label">${k === 'sun' ? 'Sun' : k === 'moon' ? 'Moon' : 'Rising'}</div>
                <div class="b3-sign">${c.sign}</div>
                <div class="b3-note">${c.archetype}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Full placements -->
      <div class="astro-card">
        <div class="astro-eyebrow">All Placements</div>
        <div class="placements">
          ${BROOKE_NATAL.map(p => `
            <div class="placement-row">
              <span class="p-glyph">${p.glyph}</span>
              <span class="p-body">${p.body}</span>
              <span class="p-sign">${p.sign}</span>
              <span class="p-degree">${p.degree}</span>
              <span class="p-house">${p.house}</span>
            </div>
          `).join('')}
        </div>
        <div class="astro-note">Inner-planet degrees are reputable approximations; for precise minutes use a Placidus chart tool.</div>
      </div>

      <!-- Today's sky -->
      <div class="astro-card">
        <div class="astro-eyebrow">Today's Sky · ${escapeHtml(dateStr)}</div>
        <div class="sky-grid">
          <div class="sky-tile">
            <div class="sky-glyph">${ZODIAC_GLYPHS[ss.sign]}</div>
            <div class="sky-label">Sun</div>
            <div class="sky-val">${ss.sign}</div>
            <div class="sky-sub">${ZODIAC_META[ss.sign].el} · ${ZODIAC_META[ss.sign].mod}</div>
          </div>
          <div class="sky-tile">
            <div class="sky-glyph">${ms.glyph}</div>
            <div class="sky-label">Moon Sign</div>
            <div class="sky-val">${ms.sign}</div>
            <div class="sky-sub">${ZODIAC_META[ms.sign].el} · ${ZODIAC_META[ms.sign].mod}</div>
          </div>
          <div class="sky-tile">
            <div class="sky-glyph">${mp.glyph}</div>
            <div class="sky-label">Phase</div>
            <div class="sky-val">${mp.name}</div>
            <div class="sky-sub">${mp.illum}% illuminated</div>
          </div>
        </div>
      </div>

      <!-- Transit reading for Brooke -->
      <div class="astro-card">
        <div class="astro-eyebrow">Today's Transit Reading · For Brooke</div>
        <div class="reading">
          <div class="reading-row">
            <div class="reading-label">☉ Sun in ${ss.sign} to your Aries Sun</div>
            <div class="reading-body">${aspect}</div>
          </div>
          <div class="reading-row">
            <div class="reading-label">☾ Moon in ${ms.sign} to your Libra Moon</div>
            <div class="reading-body">${LIBRA_MOON_TODAY(ms.sign)}</div>
          </div>
          <div class="reading-row">
            <div class="reading-label">↑ Sag Rising vibe</div>
            <div class="reading-body">${SAG_RISING_VIBE}</div>
          </div>
          <div class="reading-row">
            <div class="reading-label">Moon's flavor today</div>
            <div class="reading-body">${MOON_SIGN_VIBE[ms.sign]}</div>
          </div>
        </div>
      </div>

      <!-- Synastry tool -->
      <div class="astro-card">
        <div class="astro-eyebrow">Synastry · Quick Compatibility</div>
        <div class="syn-controls">
          <label for="syn-input">Partner's birthday</label>
          <input id="syn-input" type="date" />
        </div>
        <div id="syn-result"></div>
      </div>

      <!-- News -->
      ${astroArts.length ? `
        <div class="section-header no-jump"><h2><span class="section-dot" style="--section-color:#c0a3e6"></span>Astrology News</h2></div>
        ${astroArts.map(a => renderArticle(a)).join('')}
      ` : ''}
    </div>
  `;
}

function renderQuickBrief(items) {
  if (!items.length) return '';
  return `
    <div class="quick-brief" data-brief>
      <div class="qb-eyebrow">Today's Brief</div>
      <div class="qb-head">
        <div class="qb-title">The three things to know.</div>
        <button class="qb-listen" id="qb-listen-btn" type="button" aria-label="Listen">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 4 20 12 6 20 6 4" fill="currentColor"/></svg>
          <span>Listen</span>
        </button>
      </div>
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

// ============ Listen mode (Web Speech API) ============
let speakingActive = false;
function listenToBrief(items) {
  const btn = document.getElementById('qb-listen-btn');
  if (!window.speechSynthesis) return;
  if (speakingActive) {
    window.speechSynthesis.cancel();
    speakingActive = false;
    btn?.classList.remove('playing');
    btn && (btn.querySelector('span').textContent = 'Listen');
    return;
  }
  const intro = `Here are the three things to know, ${timeOfDayGreeting().toLowerCase()}, Brooke. `;
  const body = items.map((a, i) =>
    `Number ${i+1}, from ${a.source}: ${a.title}.${a.desc ? ' ' + a.desc : ''}`
  ).join(' ');
  const utter = new SpeechSynthesisUtterance(intro + body);
  utter.rate = 1.0;
  utter.pitch = 1.0;
  // Try to pick a nice English voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => /Samantha|Karen|Moira|Ava|Allison/i.test(v.name) && /en/i.test(v.lang))
                 || voices.find(v => /en[-_]US/i.test(v.lang) && !v.name.includes('Google'))
                 || voices.find(v => /en/i.test(v.lang));
  if (preferred) utter.voice = preferred;
  utter.onend = () => {
    speakingActive = false;
    btn?.classList.remove('playing');
    btn && (btn.querySelector('span').textContent = 'Listen');
  };
  utter.onerror = utter.onend;
  speakingActive = true;
  btn?.classList.add('playing');
  btn && (btn.querySelector('span').textContent = 'Stop');
  window.speechSynthesis.speak(utter);
}

function render() {
  const main = document.getElementById('feed');

  // ---- Astrology (custom view) ----
  if (activeCategory === 'astrology') {
    main.innerHTML = renderAstrologyView();
    // Wire up the synastry input each render
    const synInput = document.getElementById('syn-input');
    if (synInput) {
      synInput.addEventListener('input', () => {
        const [y, m, d] = synInput.value.split('-').map(Number);
        const result = document.getElementById('syn-result');
        if (!y || !m || !d) { result.innerHTML = ''; return; }
        const sign = signFromDate(m, d);
        const s = synastrySummary(sign);
        result.innerHTML = `
          <div class="syn-summary">
            <div class="syn-row"><span class="syn-label">Their Sun</span><span class="syn-val">${sign} ${ZODIAC_GLYPHS[sign]}</span></div>
            <div class="syn-row"><span class="syn-label">Their element</span><span class="syn-val">${s.them.el} · ${s.them.mod}</span></div>
            <div class="syn-row"><span class="syn-label">Yours</span><span class="syn-val">Aries · ${s.mine.el} · ${s.mine.mod}</span></div>
            <div class="syn-verdict">${s.verdict}</div>
            <div class="syn-moon">${s.moonSync}</div>
          </div>
        `;
      });
    }
    return;
  }

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
  window.__brief = brief;

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

  // Per-category sections (header tappable + "More in" footer button)
  const sectionsHtml = SECTION_ORDER.map(cat => {
    const items = articles
      .filter(a => a.category === cat && !used.has(a.link))
      .sort((x, y) => y.timestamp - x.timestamp)
      .slice(0, 4);
    if (!items.length) return '';
    items.forEach(a => used.add(a.link));
    return renderSectionHeader(CAT_LABELS[cat], CAT_COLOR[cat], cat) +
           items.map(a => renderArticle(a)).join('') +
           renderSectionFooter(cat, CAT_LABELS[cat]);
  }).join('');

  main.innerHTML =
    renderQuickBrief(brief) +
    renderArticle(heroCandidate, 'hero') +
    renderSectionHeader('Top Stories', 'var(--fg)', null) +
    topStories.map(a => renderArticle(a)).join('') +
    (practiceItems.length
      ? renderSectionHeader('For Your Practice', 'var(--gold)', null, 'Founders &amp; legal tech, curated for For Founders Law.') +
        practiceItems.map(a => renderArticle(a)).join('') +
        renderSectionFooter('legal-tech', 'Legal Tech')
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
  updateTabCounts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mark articles read on click and toggle bookmarks
document.getElementById('feed').addEventListener('click', (e) => {
  // Section header / footer jump
  const jump = e.target.closest('[data-jump-cat]');
  if (jump && jump.dataset.jumpCat) {
    e.preventDefault(); e.stopPropagation();
    switchToCategory(jump.dataset.jumpCat);
    return;
  }
  // Listen button
  if (e.target.closest('#qb-listen-btn')) {
    e.preventDefault(); e.stopPropagation();
    const briefItems = (window.__brief || []);
    listenToBrief(briefItems);
    return;
  }
  const bm = e.target.closest('[data-action="save"]');
  if (bm) {
    e.preventDefault(); e.stopPropagation();
    const link = bm.dataset.link;
    const art = articles.find(a => a.link === link) || savedMap[link];
    if (!art) return;
    const wasSaved = !!savedMap[link];
    if (wasSaved) { delete savedMap[link]; }
    else {
      savedMap[link] = { ...art, savedAt: Date.now() };
      // Animate the icon
      bm.classList.remove('pop');
      void bm.offsetWidth;
      bm.classList.add('pop');
    }
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

// ============ Bottom tab bar — iOS-style nav ============
const tabbarToday    = document.getElementById('tabbar-today');
const tabbarSaved    = document.getElementById('tabbar-saved');
const tabbarSections = document.getElementById('tabbar-sections');
const tabbarSettings = document.getElementById('tabbar-settings');
const sectionsSheet  = document.getElementById('sections-sheet');
const sectionsClose  = document.getElementById('sections-close');
const sectionsGrid   = document.getElementById('sections-grid');
const tbSavedBadge   = document.getElementById('tb-saved-badge');

function switchToCategory(cat) {
  document.querySelectorAll('.seg').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
  activeCategory = cat;
  updateGreeting(readCache()?.fetchedAt);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateTabbarActive();
}

function updateTabbarActive() {
  document.querySelectorAll('.tabbar-item').forEach(b => b.classList.remove('active'));
  if (activeCategory === 'all')        tabbarToday.classList.add('active');
  else if (activeCategory === 'saved') tabbarSaved.classList.add('active');
  else                                 tabbarSections.classList.add('active');
}

function updateSavedBadge() {
  const n = Object.keys(savedMap).length;
  if (!tbSavedBadge) return;
  if (n > 0) { tbSavedBadge.textContent = n > 99 ? '99+' : String(n); tbSavedBadge.style.display = ''; }
  else tbSavedBadge.style.display = 'none';
}

function openSectionsSheet() {
  // Build the grid
  const stats = {};
  for (const a of articles) { stats[a.category] = (stats[a.category] || 0) + 1; }
  const cats = ['founders','ai','legal-tech','markets','style','pop-culture','us-news','canada-news','israel-iran'];
  sectionsGrid.innerHTML = cats.map(c => `
    <button class="section-card" data-cat="${c}" style="--sc-color:${CAT_COLOR[c]}">
      <span class="sc-dot"></span>
      <span class="sc-label">${CAT_LABELS[c]}</span>
      <span class="sc-meta">${stats[c] || 0} stories</span>
    </button>
  `).join('');
  sectionsSheet.classList.add('open');
  sheetBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSectionsSheet() {
  sectionsSheet.classList.remove('open');
  if (!settingsSheet.classList.contains('open')) sheetBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}
sectionsClose.addEventListener('click', closeSectionsSheet);
sectionsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.section-card');
  if (!card) return;
  closeSectionsSheet();
  switchToCategory(card.dataset.cat);
});

tabbarToday.addEventListener('click', () => switchToCategory('all'));
tabbarSaved.addEventListener('click', () => switchToCategory('saved'));
tabbarSections.addEventListener('click', () => openSectionsSheet());
tabbarSettings.addEventListener('click', () => openSheet());

// Close sections sheet when backdrop clicked
sheetBackdrop.addEventListener('click', () => {
  if (sectionsSheet.classList.contains('open')) closeSectionsSheet();
});

// Keep tabbar active state in sync when category changes via top tabs
document.getElementById('tabs').addEventListener('click', () => setTimeout(updateTabbarActive, 0));

// Keep saved badge fresh
const _origPersistSaved = persistSaved;
persistSaved = function() { _origPersistSaved.apply(this, arguments); updateSavedBadge(); };

// ============ Tab counts (top scrolling pills) ============
function updateTabCounts() {
  document.querySelectorAll('.seg').forEach(btn => {
    const cat = btn.dataset.cat;
    let n = 0;
    if (cat === 'all') n = articles.length;
    else if (cat === 'saved') n = Object.keys(savedMap).length;
    else n = articles.filter(a => a.category === cat).length;
    let countEl = btn.querySelector('.seg-count');
    if (n > 0) {
      if (!countEl) {
        countEl = document.createElement('span');
        countEl.className = 'seg-count';
        btn.appendChild(countEl);
      }
      countEl.textContent = n > 999 ? '999+' : String(n);
    } else if (countEl) countEl.remove();
  });
}
// Note: tab counts are refreshed wherever we call render() — see boot, loadAll, tab handlers
// Wrapping render() directly proved unreliable across script-loading modes.

// ============ Search overlay ============
const searchBtn      = document.getElementById('search-btn');
const searchOverlay  = document.getElementById('search-overlay');
const searchCancel   = document.getElementById('search-cancel');
const searchInput    = document.getElementById('search-input');
const searchResults  = document.getElementById('search-results');

function openSearch() {
  searchOverlay.classList.add('open');
  setTimeout(() => searchInput?.focus(), 220);
  if (!searchInput.value) renderSearchResults('');
}
function closeSearch() {
  searchOverlay.classList.remove('open');
  searchInput.value = '';
}
function renderSearchResults(q) {
  q = (q || '').trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = `
      <div class="search-hint">
        <div class="big">Search the feed</div>
        Find any headline, source, or topic across every category.
      </div>`;
    return;
  }
  const tokens = q.split(/\s+/).filter(Boolean);
  const hits = articles.filter(a => {
    const blob = (a.title + ' ' + a.desc + ' ' + a.source + ' ' + (CAT_LABELS[a.category] || '')).toLowerCase();
    return tokens.every(t => blob.includes(t));
  }).slice(0, 60);
  if (!hits.length) {
    searchResults.innerHTML = `<div class="search-hint"><div class="big">No results</div>Try a different word — or refresh the feed.</div>`;
    return;
  }
  searchResults.innerHTML = hits.map(a => renderArticle(a)).join('');
}
searchBtn?.addEventListener('click', openSearch);
searchCancel?.addEventListener('click', closeSearch);
searchInput?.addEventListener('input', () => renderSearchResults(searchInput.value));
searchResults?.addEventListener('click', (e) => {
  const bm = e.target.closest('[data-action="save"]');
  if (bm) {
    e.preventDefault(); e.stopPropagation();
    const link = bm.dataset.link;
    const art = articles.find(a => a.link === link) || savedMap[link];
    if (!art) return;
    if (savedMap[link]) delete savedMap[link];
    else { savedMap[link] = { ...art, savedAt: Date.now() }; bm.classList.remove('pop'); void bm.offsetWidth; bm.classList.add('pop'); }
    persistSaved();
    renderSearchResults(searchInput.value);
    render();
    return;
  }
  const a = e.target.closest('[data-link]');
  if (a && a.dataset.link && !readSet.has(a.dataset.link)) {
    readSet.add(a.dataset.link); saveRead();
  }
});

// ============ Theme picker ============
const THEME_KEY = 'n4b.theme';
function applyTheme(t) {
  if (t === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', t);
}
function loadTheme() { return localStorage.getItem(THEME_KEY) || 'auto'; }
function saveTheme(t) { try { localStorage.setItem(THEME_KEY, t); } catch {} }
const themePicker = document.getElementById('theme-picker');
if (themePicker) {
  const cur = loadTheme();
  themePicker.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.theme === cur));
  themePicker.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-theme]');
    if (!b) return;
    const t = b.dataset.theme;
    themePicker.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    applyTheme(t);
    saveTheme(t);
  });
}
applyTheme(loadTheme());

// ============ boot ============
readSet  = loadRead();
savedMap = loadSaved();
lastSeenAt = loadLastSeen() || Date.now();
bumpLastSeen();
document.body.classList.add('has-tabbar');
updateGreeting(null);
updateTabbarActive();
updateSavedBadge();
updateTabCounts();
loadAll(false);
