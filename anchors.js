const { getStore } = require('@netlify/blobs');

function jsonRes(statusCode, obj) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  };
}

exports.handler = async (event) => {
  const store = getStore('daily-anchors');

  try {
    if (event.httpMethod === 'GET') {
      const { action, key, prefix } = event.queryStringParameters || {};

      if (action === 'list') {
        const { blobs } = await store.list({ prefix: prefix || '' });
        return jsonRes(200, { keys: blobs.map((b) => b.key) });
      }

      if (!key) return jsonRes(400, { error: 'key is required' });
      const value = await store.get(key);
      return jsonRes(200, { key, value: value ?? null });
    }

    if (event.httpMethod === 'POST') {
      const { key, value } = JSON.parse(event.body || '{}');
      if (!key) return jsonRes(400, { error: 'key is required' });
      await store.set(key, value);
      return jsonRes(200, { key, value });
    }

    return jsonRes(405, { error: 'method not allowed' });
  } catch (err) {
    return jsonRes(500, { error: err.message });
  }
};
