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
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents1.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes1.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents2.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes2.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents3.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes3.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents4.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes4.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents5.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes5.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents6.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes6.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents7.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes7.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents8.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes8.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents9.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes9.csv' DELIMITER',' CSV HEADER;

COPY agents (agentName, agentEmail) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/agents10.csv' DELIMITER',' CSV HEADER;
COPY homes (address, zipCode, onMarket, sqft, bedCount, bathCount, currentValue, pictureUrl, agent_id) 
FROM '/Users/siyun/hrsf126/hrsf126-system-design-capstone/abode-homevalue-pricetax/fakeData/postgres/homes10.csv' DELIMITER',' CSV HEADER;
