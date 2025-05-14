const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST /tasks
router.post('/', async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.status(201).json(task);
});

module.exports = router;
