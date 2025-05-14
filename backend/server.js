const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
