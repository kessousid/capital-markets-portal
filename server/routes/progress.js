import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { verifyToken } from './auth.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_PATH = join(__dirname, '../data/users.json');

function readUsers() {
  const data = readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(data).users || [];
}

function writeUsers(users) {
  writeFileSync(DATA_PATH, JSON.stringify({ users }, null, 2));
}

// PATCH /api/progress/video — mark video watched
router.patch('/video', verifyToken, (req, res) => {
  const { moduleId } = req.body;
  if (!moduleId) return res.status(400).json({ error: 'moduleId required' });

  const users = readUsers();
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  if (!users[idx].progress[moduleId]) {
    users[idx].progress[moduleId] = {};
  }
  users[idx].progress[moduleId].videoWatched = true;
  writeUsers(users);

  res.json({ progress: users[idx].progress });
});

// PATCH /api/progress/quiz — save quiz result
router.patch('/quiz', verifyToken, (req, res) => {
  const { moduleId, score, passed } = req.body;
  if (!moduleId || score === undefined || passed === undefined) {
    return res.status(400).json({ error: 'moduleId, score, and passed required' });
  }

  const users = readUsers();
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  if (!users[idx].progress[moduleId]) {
    users[idx].progress[moduleId] = {};
  }
  users[idx].progress[moduleId].quizScore = score;
  users[idx].progress[moduleId].quizPassed = passed;
  if (passed) {
    users[idx].progress[moduleId].completed = true;
  }
  writeUsers(users);

  res.json({ progress: users[idx].progress });
});

export default router;
