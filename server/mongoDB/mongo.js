const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homeValue');

let homeValueSchema = mongoose.Schema({
  id: Number,
  address: String,
  zipCode: Number,
  onMarket: Boolean,
  sqft: Number,
  bedCount: Number,
  bathCount: Number,
  listingValue: Number,
  pictureUrl: String
});

let HomeValue = mongoose.model('HomeValue', homeValueSchema);
