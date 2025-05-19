// --- 1. ייבוא ספריות בסיסיות
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// --- 2. יצירת ה־app
const app = express();

// --- 3. הגדרת CORS - חשוב שזה יבוא לפני כל route או use
const corsOptions = {
  origin: 'https://devops-frontend-shx7.onrender.com',
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // מאפשר בקשות preflight

app.use(express.json());

// --- 4. ראוט שורש / (לתצוגה ידידותית)
app.get('/', (req, res) => {
  res.send('👋 Welcome to the DevOps Backend! Try /api/hello or /api/health');
});

// --- 5. ראוטים לבדיקה
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

// --- 6. מסלול בריאות – תחת /api
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// --- 7. הרצת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
