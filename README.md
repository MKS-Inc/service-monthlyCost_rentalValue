# Abode Property value/cost System Design

# Related Projects
- https://github.com/MKS-Inc/service-similarhomes
- https://github.com/MKS-Inc/service-neighborhood

# API Documentation

## get home value summary
- GET `/homes/:id`
- Url Params: `id = [integer]`
- Response
  - Status : `200 OK`
  - Content example:
  ```
  {
    'homeSummary': {
      id: 1,
      address: '565 Herzog Extension Kling Crescent, Schummborough, New Jersey',
      zipCode: 11400,
      onMarket: false,
      sqft: 5090,
      bedCount: 0,
      bathCount: 10,
      listingValue: 1434446,
      pictureUrl: 'https://abodeproject.s3.us-east-2.amazonaws.com/address1.jpg'
    },
    'similarhomes': [home1, home2, home3...]
  }
  ```
- Sample Call:
  `axios.get('/homes/1/homeValueSummary');`

## Add new home value summary
- POST `/homes/:id`
- Url Params: `id = [integer]`
- Data Params: homeValueSummary object
- Response
  - Status : `200 OK`
  - Content: `{success: 'Post new home values successfully!'}`
- Sample Call:
  `axios.post('/homes/109/newValue');`

## Update home value summary
- PUT `/homes/:id`
- Url Params: `id = [integer]`
- Data Params: homeValueSummary object
- Response
  - Status : 200 OK
  - Content: `{success: 'Update home values successfully!'}`
- Sample Call:
  `axios.put('/homes/7');`

## Delete home value summary
- DELETE `/homes/:id`
- Url Params: `id = [integer]`
- Response
  - Status : 200 OK
  - Content: `{success: 'Delete new home values successfully!'}`
- Sample Call:
  `axios.delete('/homes/3');`

# Server set up
NOTE: This server will run on port 3006 of your local host

NOTE: you might have to change the option in the db.js file (inside the server folder) to have the correct log in to your mysql server

Run this command in the CLI (in this module's root directorate):
- npm start

# Accessing the service
Go to your browser (preferrably Google Chrome) and type in:
- http://localhost:3006