"use strict";

// TODO: this might be unnecessary
var mongoose = require('mongoose');

var compileModel = function compileModel(name, schema) {
  return mongoose.model(name, schema);
};

module.exports = {
  compileModel: compileModel
};