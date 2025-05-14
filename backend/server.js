const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ← ✅ הוספת CORS
require('dotenv').config();

const app = express();

// ✅ אפשר גישה רק מה-Frontend שלך ב-Render
app.use(cors({
  origin: 'https://devops-frontend-shx7.onrender.com'
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
