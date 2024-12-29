const pool = require('../../../config/db');
const searchYear = require('express').Router();

searchYear.get('/', async (req, res) => {
  try {
    const year = req.query.year;

    if (!year) {
      return res.status(400).json({
        message: 'Year query paramter is required'
      });
    }

    const theQuery = 'SELECT * FROM domes WHERE construction_year = $1';
    const {rows, rowCount} = await pool.query(theQuery, [year]);

    if (rowCount === 0) {
      return res.status(404).json({
        message: `No domes found for year ${year}`,
      });
    }

    const myDomes = rows.map((row) => ({
      name: row.name,
      address: row.address,
      city: row.city,
      state: row.state,
      zip_code: row.zip_code,
      type: row.type,
      description: row.description,
      year: row.construction_year,
    }));

    res.json(myDomes); // send back to the client in JSON format

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

module.exports = searchYear;