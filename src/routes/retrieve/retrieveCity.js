const pool = require('../../../config/db');
const searchCity = require('express').Router();

searchCity.get('/', async (req, res) => {
  try {
    const city = req.query.city;

    // Validate city input
    if (!city) {
      return res.status(400).json({
        message: 'Please provide a valid city',
      });
    }

    // Query to fetch domes by city
    const theQuery = 'SELECT * FROM domes WHERE city = $1';
    const { rows, rowCount } = await pool.query(theQuery, [city]);

    // Check if no records were found
    if (rowCount === 0) {
      return res.status(404).json({
        message: 'No domes found in the given city',
      });
    }

    // Map database rows to the desired response format
    const myDomes = rows.map((row) => ({
      name: row.name,
      address: row.address,
      city: row.city,
      state: row.state,
      zip_code: row.zip_code,
      type: row.type,
      description: row.description,
      year: row.construction_year, // Ensure this matches your database column name
    }));

    // Send the response
    res.json(myDomes);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

module.exports = searchCity;
