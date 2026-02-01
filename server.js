import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

console.log('--- Starting Server (05-portfolio-frontend-ai) ---');
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', PORT);

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Health check
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

// Serve static files
app.use(express.static(distPath));

// SPA routing
app.get('*', (req, res) => {
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Build missing.');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
