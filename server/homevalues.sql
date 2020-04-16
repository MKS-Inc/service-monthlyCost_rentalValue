DROP DATABASE IF EXISTS homevalues;

CREATE DATABASE homevalues;

\c homevalues;

CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  agentName TEXT,
  agentEmail TEXT
);

CREATE TABLE homes (
  id SERIAL PRIMARY KEY,
  address TEXT,
  zipCode INT,
  onMarket BOOLEAN,
  sqft INT,
  bedCount INT,
  bathCount INT,
  currentValue INT,
  pictureUrl TEXT,
  agent_id INT,
  FOREIGN KEY (agent_id) REFERENCES agents(id)
);

-- run this line to add index after seeding: CREATE INDEX idx_zipCode ON homes (zipCode);

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents1.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes1.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents2.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes2.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents3.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes3.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents4.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes4.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents5.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes5.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents6.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes6.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents7.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes7.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents8.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes8.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents9.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes9.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/local/testData/agents10.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/local/testData/homes10.csv' DELIMITER',' CSV HEADER;
