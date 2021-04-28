const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddressSchema = require('./Address');
const CaseSchema = require('./Case');
const isEmail = require('validator/lib/isEmail');

const ClientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
    },
    middle: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },
    phone: {
      type: String,
      match: /\d{3}-\d{3}-\d{4}/,
    },
    email: {
      type: String,
      validate: {
        validator: (v) => isEmail(v),
        message: (props) => `${props} is not a valid email address`,
      },
    },
    addresses: [AddressSchema],
    cases: [CaseSchema],
  },
  { timestamps: true }
);

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
