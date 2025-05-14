const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ✅ Healthcheck route for Render
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 🧪 Test route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// 📦 Main API routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
