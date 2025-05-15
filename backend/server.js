const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ הגדרת CORS – התאמה ל־Render
const corsOptions = {
  origin: 'https://devops-frontend-shx7.onrender.com',
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ תמיכה בבקשות OPTIONS (preflight) לכל הנתיבים
app.options('*', cors(corsOptions));

app.use(express.json());

const PORT = process.env.PORT || 3000; // ברירת מחדל ל־3000
console.log("💬 PORT FROM ENV:", PORT);

// ✅ התחברות למונגו
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

// ✅ ראוטים בסיסיים
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// ✅ ראוטים חיצוניים
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// ✅ הפעלת השרת
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
