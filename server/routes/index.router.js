const express = require('express');
const router = express.Router();
const path = require('path');

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log('In base GET route.');
  const indexRoute = (path.join(__dirname, '../public/views/index.html'));
  res.sendFile(indexRoute);
});

router.get('/*', function(req, res) {
  console.log('404 : ', req.params);
  res.sendStatus(404);
});

module.exports = router;