const router = require('express').Router();

router.post('/token', (req, res) => {
  res.send('JWT token');
});

router.post('/refresh-token', (req, res) => {
  res.send('Refresh token');
});

router.get('/invalidate-token', (req, res) => {
  res.send('Token invalidated');
});

module.exports = router;
