const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ הגדרות CORS מדויקות, כולל headers עתידיים
app.use(cors({
  origin: 'https://devops-frontend-shx7.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const PORT = process.env.PORT;

// ✅ חיבור למונגו
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ✅ Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ Test API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

// ✅ Root route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// ✅ Routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
