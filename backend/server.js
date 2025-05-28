require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.get('/health', (req, res) => {
  res.status(200).send('הכל תקין - השרת עובד');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
