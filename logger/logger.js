const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// ✅ מסלול בריאות
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// שאר ה־API שלך...

app.listen(port, () => {
  console.log(`Logger service running on port ${port}`);
});
