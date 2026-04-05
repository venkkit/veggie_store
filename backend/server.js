const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Serve frontend static files ────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ─── Health-check endpoint (useful for hosting platforms) ───────────────────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'VeggieStore', ts: new Date().toISOString() });
});

// ─── Catch-all: send index.html for any unknown route (SPA support) ─────────
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌿 VeggieStore server running at http://localhost:${PORT}`);
});
