// routes/tasks.js
const express = require('express');
const router = express.Router();

// Dummy data
const tasks = [
  { id: 1, title: 'Learn DevOps' },
  { id: 2, title: 'Deploy to Render' },
];

// GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

module.exports = router;
