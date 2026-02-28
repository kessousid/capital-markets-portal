import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import authRoutes from './routes/auth.js';
import progressRoutes from './routes/progress.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

// In dev, allow Vite dev server; in prod, same-origin so no CORS needed
if (!isProd) {
  app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
  }));
}

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve React build in production
if (isProd) {
  const distPath = join(__dirname, '../client/dist');
  if (existsSync(distPath)) {
    app.use(express.static(distPath));
    // Catch-all: send index.html for client-side routes
    app.get('*', (req, res) => {
      res.sendFile(join(distPath, 'index.html'));
    });
  }
}

app.listen(PORT, () => {
  console.log(`Capital Markets Server running on http://localhost:${PORT} [${isProd ? 'production' : 'development'}]`);
});
