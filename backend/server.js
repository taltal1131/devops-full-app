const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ הגדרת CORS – התאמה ל־Render
const corsOptions = {
  origin: 'https://devops-frontend-shx7.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ מענה מלא לבקשות preflight (OPTIONS)
app.options('*', cors(corsOptions));

// ✅ טיפול ידני בבקשות OPTIONS (לפעמים חובה ב-Render)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://devops-frontend-shx7.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

const PORT = process.env.PORT || 3000;
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

// ✅ האזנה לכל כתובת IP (חשוב לדוקר/רנדר)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
