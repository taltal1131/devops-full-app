app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Logger microservice operational. Monitoring and logging events.',
    service: 'logger-service',
    version: '1.0.0'
  });
});
