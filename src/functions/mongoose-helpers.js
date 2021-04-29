// TODO: this might be unnecessary
const mongoose = require('mongoose');

const compileModel = (name, schema) => mongoose.model(name, schema);

module.exports = { compileModel };
