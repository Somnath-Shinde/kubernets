const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Kubernetes!',
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: os.uptime()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
