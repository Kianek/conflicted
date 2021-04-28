const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
  caseType: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  dateOfIntake: {
    type: Date,
    required: true,
  },
  dateClosed: {
    type: Date,
  },
});

module.exports = CaseSchema;
