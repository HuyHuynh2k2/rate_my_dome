const pool = require('../../../config/db');
const searchAll = require('express').Router();

searchAll.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM domes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

module.exports = searchAll;
