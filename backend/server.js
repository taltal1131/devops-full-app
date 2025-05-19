// --- 1. ייבוא ספריות בסיסיות
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// --- 2. יצירת ה־app
const app = express();

// --- 3. הגדרת CORS - הכי חשוב שזה יבוא לפני כל route או use
const corsOptions = {
  origin: 'https://devops-frontend-shx7.onrender.com',
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // מאפשר בקשות preflight

app.use(express.json());

// --- 4. ראוטים לבדיקה
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

// 🔁 מסלול בריאות – עכשיו תחת /api
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// --- 5. ראוטים אחרים (routes/tasks.js)
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// --- 6. הרצת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
