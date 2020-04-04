-- DROP DATABASE IF EXISTS homevalues;

-- CREATE DATABASE homevalues;

CREATE TABLE homes (
  id INT,
  address TEXT,
  zipCode INT,
  onMarket BOOLEAN,
  sqft INT,
  bedCount INT,
  bathCount INT,
  currentValue INT,
  pictureUrl TEXT,
  PRIMARY KEY (id)
);
 
COPY homes (id, address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/homes.csv' DELIMITER',' CSV HEADER;

-- CREATE TABLE history_values (
--   history_id INT(10) AUTO_INCREMENT,
--   history_value INT(15),
--   home_id INT(10),
--   PRIMARY KEY (history_id),
--   FOREIGN KEY (home_id) REFERENCES homes(id)
-- );

-- CREATE TABLE price_history (
--   id INT(10) AUTO_INCREMENT,
--   address_id INT(10),
--   event VARCHAR(25),
--   price INT(15),
--   source VARCHAR(25),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE tax_history (
--   id INT(10) AUTO_INCREMENT,
--   address_id INT(10),
--   property_tax INT(15),
--   tax_assessment INT(15),
--   PRIMARY KEY (id)
-- );

-- to clear data && set schema in CLI:
-- mysql -u root < server/schema.sql

-- to load data for addresses table in mysql:
-- USE homevalue_pricetax;
-- LOAD DATA LOCAL INFILE './fakeData/addressTableData.txt' INTO TABLE addresses;

-- to load data for estimated_value_history table in mysql:
-- USE homevalue_pricetax;
-- LOAD DATA LOCAL INFILE './fakeData/estimatedValueHistoryTableData.txt' INTO TABLE estimated_value_history;
