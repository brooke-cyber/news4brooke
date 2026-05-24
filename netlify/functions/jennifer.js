// Netlify Function: /api/jennifer
// Brooke's AI news assistant — calls Claude with current news headlines as context.

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let payload = {};
  try { payload = JSON.parse(event.body || '{}'); }
  catch { return json(400, { error: 'Invalid JSON' }); }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json(200, {
      reply:
        "Hi! I'm Jennifer ✨ — but I need to be plugged in before I can chat.\n\n" +
        "Brooke: open your Netlify project → Project configuration → Environment variables → " +
        "add `ANTHROPIC_API_KEY` with a key from console.anthropic.com (free $5 credit), " +
        "then redeploy. I'll come right to life."
    });
  }

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (!messages.length) return json(400, { error: 'No messages' });

  const newsContext = (payload.context || '').slice(0, 12000);

  const systemPrompt =
    "You are Jennifer, Brooke's personal AI news assistant inside her News4Brooke app. " +
    "Brooke is a lawyer at For Founders Law — she advises startup founders. She follows " +
    "Founders & VC, AI, Legal Tech, Markets, Style & Beauty, Pop Culture (including Bravo), " +
    "US, Canada, and Israel/Iran news.\n\n" +
    "Voice: warm, smart, concise. Speak like a sharp friend — not a press release. " +
    "Use plain text (no markdown headers, no bullet points unless really needed). " +
    "Keep replies tight: usually 2–6 sentences. When you reference a story, name the source " +
    "(e.g. 'TechCrunch reports…'). If you don't see something in the feed, say so honestly.\n\n" +
    "Here are the latest headlines Brooke is reading right now:\n\n" +
    (newsContext || '(news feed is empty)') +
    "\n\nAnswer Brooke's question grounded in this feed where relevant. " +
    "If she asks about something outside the feed, answer from general knowledge and note " +
    "it's not from her current headlines.";

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return json(200, { error: (data && data.error && data.error.message) || `Upstream error ${res.status}` });
    }
    const reply = (data.content && data.content[0] && data.content[0].text) || '…';
    return json(200, { reply });
  } catch (err) {
    return json(200, { error: 'Reach error: ' + String(err && err.message ? err.message : err) });
  }
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  };
}
