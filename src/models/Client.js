import mongoose from 'mongoose';
import AddressSchema from './Address';
import CaseSchema from './Case';
import isEmail from 'validator/lib/isEmail';

const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    organization: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
    },
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
      minLength: 1,
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

export default Client;
