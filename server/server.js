require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const model = require('./model');

const app = express();

const port = 3006;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public/')));

app.get('/homes/:zipcode', (req, res) => {
  const { address, zipcode } = req.params;
  // console.log('The query address is:', address);
  console.log('The query zipcode is:', zipcode);
  var startTime = new Date().getTime();
  model.getExampleAddressesData(req.params, (error, homes) => {
    if (error) {
      res.end();
    } else {
      var endTime = new Date().getTime();
      console.log("Took: " + (endTime - startTime) + "ms");
      // console.log(homes[0]);

      homes.map((home) => {
        home.on_market = home.onmarket ? 'true' : 'false';
        home.bed = home.bedcount;
        home.bath = home.bathcount;
        home.currentestimatedvalue = home.currentvalue;
      })

      const returnData = {
        addressSummary: homes[0],
        addressValues: [],
        similarAddresses: homes.slice(1),
      };
      
      res.send(returnData);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
