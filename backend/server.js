// --- 1. ייבוא ספריות בסיסיות
const express = require('express');
const mongoose = require('mongoose');
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
app.options('*', cors(corsOptions)); // מאפשר בקשות preflight (חשוב מאוד!)

app.use(express.json());

// --- 4. התחברות ל־MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// --- 5. ראוטים לבדיקה
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// --- 6. ראוטים אחרים
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// --- 7. הרצת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
