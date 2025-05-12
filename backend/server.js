app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend service is up and running. Ready to receive API requests.',
    service: 'user-service',
    version: '1.0.0'
  });
});
