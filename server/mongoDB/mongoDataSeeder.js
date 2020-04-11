const faker = require('faker');
const mongoose = require('mongoose');
const Home = require('./mongoDB/mongo.js')

mongoose.connect('mongodb://localhost/homevalues', {useNewUrlParser: true, useUnifiedTopology: true});

// Helper functions to generate seeding data
const generateHomesData = (count) => {
  let homes = [];
  
  const s3URL = 'https://abodeproject.s3.us-east-2.amazonaws.com/address';

  for (var i = 1; i <= 1000; i++) {
    let streetAddress = faker.address.streetAddress();
    let city = faker.address.city();
    let state = faker.address.state();

    const address = `${streetAddress}, ${city}, ${state}`;
    const zipCode = faker.address.zipCode().slice(0, 5); 
    const onMarket = faker.random.boolean();
    const sqft = Math.floor(Math.random() * (8000 - 500) ) + 500;
    const bedCount = Math.floor(Math.random() * 10 ) + 1;
    const bathCount = Math.floor(Math.random() * 10 ) + 1;
    const listingValue = Math.floor(Math.random() * (3000000 - 200000) ) + 200000;
    const pictureUrl = `${s3URL}${i}.jpg`;
    const agentName = faker.name.findName();
    const agentEmail = faker.internet.email();
    
    let home = {
      id: i + (count - 1) * 1000,
      address: address,
      zipCode: zipCode,
      onMarket: onMarket,
      sqft: sqft,
      bedCount: bedCount,
      bathCount: bathCount,
      listingValue: listingValue,
      pictureUrl: pictureUrl,
      agentName: agentName,
      agentEmail: agentEmail
    };

    homes.push(home);
  }
  return homes;
}

let batchesCount = 0;
let seedHomes = () => {
  if (batchesCount < 10000) {
    batchesCount++;
    let records = generateHomesData(batchesCount);
    Home.insertMany(records, (err,res) => {
      if (err)  {
        return console.log(err);
      } else {
        console.log(`seeding the ${batchesCount} batch`);
        seedHomes();
      }
    });
  } else {
    console.timeEnd('mongo seedHomes')
    console.log('all documents seeded');
    mongoose.disconnect();
  }
}

console.time('mongo seedHomes');
seedHomes();
// console.log(save(photos), 'run seed was invoked');




