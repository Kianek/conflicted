"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CaseSchema = new Schema({
  caseType: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  dateOfIntake: {
    type: Date,
    required: true
  },
  dateClosed: {
    type: Date
  }
});
var _default = CaseSchema;
exports["default"] = _default;