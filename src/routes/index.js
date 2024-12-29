const express = require('express');
const router = express.Router();
const searchAll = require('./retrieve/retrieveAll');
const searchYear = require('./retrieve/retrieveYear');
const searchCity = require('./retrieve/retrieveCity');

// Default end-point of home page
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome come to our the homepage!'
  });
});

// About endpoint website
router.get('/about', (req, res) => {
  res.json({
    message: 'This website is deigned base on idea of Rate My Professor Website'
  });
});

// Retrieve all Domes end points
router.use('/all', searchAll);

// Retrieve Domes by years
router.use('/year', searchYear);

// Retrieve Domes by city
router.use('/city', searchCity);



module.exports = router;