-- Create the domes table
CREATE TABLE IF NOT EXISTS domes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    construction_year INT
);

-- Import data from the CSV file
COPY domes(id, name, address, city, state, zip_code, type, description, construction_year)
FROM '/docker-entrypoint-initdb.d/domes.csv'
DELIMITER ','
CSV HEADER;