# Abode Property value/cost System Design

# Related Projects
- https://github.com/MKS-Inc/service-similarhomes
- https://github.com/MKS-Inc/service-neighborhood

# API Documentation

## get home value summary
- GET `/homes/:id/homeValueSummary`
- Url Params: `id = [integer]`
- Response
  - Status : `200 OK`
  - Content example:
  ```
  {
    'addressSummary': {
      id: 1,
      address: '565 Herzog Extension Kling Crescent, Schummborough, New Jersey, 11400-0653',
      zipcode: 11400,
      on_market: 'false',
      sqft: 5090,
      bed: 0,
      bath: 10,
      currentestimatedvalue: 1434446,
      pictureurl: 'https://abodeproject.s3.us-east-2.amazonaws.com/address1.jpg'
    },
    'addressValues': [value1, value2, value3...],
    'similarAddresses': [addresse1, addresse2, addresse3...]
  }
  ```
- Sample Call:
  `axios.get('/homes/1/homeValueSummary');`

## Add new home value summary
- POST `/homes/:id/newValue`
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