const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  line1: {
    type: String,
    trim: true,
    required: true,
  },
  line2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  stateOrProvince: {
    type: String,
    trim: true,
  },
  postalCode: {
    type: String,
    trim: true,
    match: /\d{5}/,
  },
});

module.exports = Address;
