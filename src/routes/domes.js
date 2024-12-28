const pool = require('../../config/db');
const router = require('express').Router();

// Get all domes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM domes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    const isProduction = process.env.NODE_ENV === 'production';
    res.status(500).json({ error: isProduction ? 'Internal Server Error' : err.message });
  }
});

module.exports = router;
