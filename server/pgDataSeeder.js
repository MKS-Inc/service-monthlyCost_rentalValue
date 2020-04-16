const faker = require('faker');
// const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();


const generateHomesData = () => {
  let homes = [];
  let numberOfHomes = 1000000;
  
  const s3URL = 'https://mks-homes.s3-us-west-1.amazonaws.com/img';

  for (var i = 1; i <= numberOfHomes; i++) {
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
    const agent_id = Math.floor(Math.random() * 100000 ) + 1;
    
    let home = {
      // id: i,
      address: address,
      zipCode: zipCode,
      onMarket: onMarket,
      sqft: sqft,
      bedCount: bedCount,
      bathCount: bathCount,
      listingValue: listingValue,
      pictureUrl: pictureUrl,
      agent_id: agent_id
    };

    homes.push(home);
  }
  return homes;
}

const generateAgentsData = () => {
  
  let agents = [];
  let numberOfAgents = 100000;

  for (var i = 1; i <= numberOfAgents; i++) {
    const agentName = faker.name.findName();
    const agentEmail = faker.internet.email();
    
    let agent = {
      // id: i,
      agentName: agentName,
      agentEmail: agentEmail
    };

    agents.push(agent);
  }
  return agents;
}

const writefiles = () => {
  var myArgs = process.argv.slice(2);
  const csvWriterHomes = createCsvWriter({
    path: `./fakeData/postgres/homes${myArgs[0]}.csv`,
    header:[
      // {id:'id', title: 'id'},
      {id:'address', title: 'address'},
      {id:'zipCode', title: 'zipCode'},
      {id:'onMarket', title: 'onMarket'},
      {id:'sqft', title: 'sqft'},
      {id:'bedCount', title: 'bedCount'},
      {id:'bathCount', title: 'bathCount'},
      {id:'listingValue', title: 'listingValue'},
      {id:'pictureUrl', title: 'pictureUrl'},
      {id:'agent_id', title: 'agent_id'}
    ]
  });

  const csvWriterAgents = createCsvWriter({
    path: `./fakeData/postgres/agents${myArgs[0]}.csv`,
    header:[
      // {id:'id', title: 'id'},
      {id:'agentName', title: 'agentName'},
      {id:'agentEmail', title: 'agentEmail'},
    ]
  });

  // var startTime = new Date().getTime();
  console.log(`start writing homes ${myArgs[0]}...`)
  console.time(`writing homes file`);
  csvWriterHomes.writeRecords(generateHomesData())       // returns a promise
  .then(() => {
    // var endTime = new Date().getTime();
    // console.log("Took: " + (endTime - startTime) + "ms");
    console.log(`...Done writing homes${myArgs[0]}`);
  }).catch(() => {
    console.log('error writing homes');
  });
  console.timeEnd(`writing homes file`);

  console.log(`start writing agents ${myArgs[0]}...`)
  console.time(`writing agents file`);
  csvWriterAgents.writeRecords(generateAgentsData())       // returns a promise
  .then(() => {
    // var endTime = new Date().getTime();
    // console.log("Took: " + (endTime - startTime) + "ms");
    console.log(`...Done writing agents${myArgs[0]}`);
  }).catch(() => {
    console.log('error writing agents');
  });
  console.timeEnd(`writing agents file`);


}

writefiles();
 


