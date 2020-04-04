const faker = require('faker');
// const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './fakeData/homes.csv',
  header:[
    {id:'id', title: 'id'},
    {id:'address', title: 'address'},
    {id:'zipCode', title: 'zipCode'},
    {id:'onMarket', title: 'onMarket'},
    {id:'sqft', title: 'sqft'},
    {id:'bedCount', title: 'bedCount'},
    {id:'bathCount', title: 'bathCount'},
    {id:'listingValue', title: 'listingValue'},
    {id:'pictureUrl', title: 'pictureUrl'}
  ]
});

const s3URL = 'https://abodeproject.s3.us-east-2.amazonaws.com/address';

let homes = [];
let numberOfHomes = 1000000;

const generateData = () => {
  for (var i = 1; i <= numberOfHomes; i++) {
    const address = faker.fake(`{{address.streetAddress}}, {{address.city}}, {{address.state}}`);
    const zipCode = faker.address.zipCode().slice(0, 5);
    const onMarket = faker.random.boolean();
    const sqft = faker.random.number({ min: 500, max: 8000 });
    const bedCount = faker.random.number({ min: 1, max: 10 });
    const bathCount = faker.random.number({ min: 1, max: 10 });
    const listingValue = faker.random.number({ min: 200000, max: 3000000 });
    const pictureUrl = `${s3URL}${i}.jpg`;
    
    let home = {
      id: i,
      address: address,
      zipCode: zipCode,
      onMarket: onMarket,
      sqft: sqft,
      bedCount: bedCount,
      bathCount: bathCount,
      listingValue: listingValue,
      pictureUrl: pictureUrl
    };

    homes.push(home);
  }
  return homes;
}

var startTime = new Date().getTime();
csvWriter.writeRecords(generateData())       // returns a promise
  .then(() => {
    var endTime = new Date().getTime();
    console.log("Took: " + (endTime - startTime) + "ms");
    console.log('...Done writing csv');
  }).catch(() => {
    console.log('error writing csv');
  });
 


// const homes = {
//   address: [],
//   zipCode: [],
//   onMarket: [],
//   sqft: [],
//   bedCount: [],
//   bathCount: [],
//   listingValue: [],
//   pictureUrl: [],
//   tableData: '',
// };


// const numberOfHouses = 1000000;

// for (let i = 1; i <= numberOfHouses; i++) {
//   const streetAddress = faker.address.streetAddress();
//   // const streetName = faker.address.streetName();
//   const city = faker.address.city();
//   const state = faker.address.state();
//   const zipCode = faker.address.zipCode();
//   homes.address.push(`${streetAddress}, ${city}, ${state}, ${zipCode}`);
//   homes.zipCode.push(zipCode.slice(0, 5));
//   homes.onMarket.push(faker.random.boolean());
//   homes.sqft.push(faker.random.number({ min: 200, max: 7000 }));
//   homes.bedCount.push(faker.random.number({ min: 1, max: 10 }));
//   homes.bathCount.push(faker.random.number({ min: 1, max: 8 }));
//   homes.pictureUrl.push(`${s3URL}${i}.jpg`);
  
// }

// for (let i = 1; i <= numberOfHouses; i++) {
//   homes.tableData += `"\\N"\t${homes.address[i]}\t${homes.zipCode[i]}\t${homes.onMarket[i]}\t${homes.sqft[i]}\t${homes.bedCount[i]}\t${homes.bathCount[i]}\t${homes.listingValue[i]}\t${homes.pictureUrl[i]}\n`;
// }

// var startTime = new Date().getTime();
// fs.writeFile('./fakeData/homesTableData.txt', homes.tableData, function (err) {
//   if (err) {
//     throw err
//   } else {
//     var endTime = new Date().getTime();
//     console.log("Took: " + (endTime - startTime) + "ms");
//     console.log('homesTableData Saved!');
//   }  
// });

