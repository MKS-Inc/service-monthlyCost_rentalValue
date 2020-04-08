const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/homevalues');

let homeValueSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  address: String,
  zipCode: Number,
  onMarket: Boolean,
  sqft: Number,
  bedCount: Number,
  bathCount: Number,
  listingValue: Number,
  pictureUrl: String,
  agentName: String,
  agentEmail: String
});


let Home = mongoose.model('Home', homeValueSchema);

module.exports = Home;
