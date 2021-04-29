"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var AddressSchema = new Schema({
  line1: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  },
  line2: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  },
  stateOrProvince: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  },
  postalCode: {
    type: String,
    trim: true,
    match: /\d{5}/
  }
});

var Address = _mongoose["default"].model('Address', AddressSchema);

var _default = Address;
exports["default"] = _default;