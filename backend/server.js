const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// ✅ Enable CORS for the frontend hosted on Render
app.use(cors({
  origin: 'https://devops-frontend-shx7.onrender.com'
}));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
