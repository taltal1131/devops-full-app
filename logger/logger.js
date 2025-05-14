const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Logger microservice operational. Monitoring and logging events.',
    service: 'logger-service',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Logger service running on port ${PORT}`);
});
