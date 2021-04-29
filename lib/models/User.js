"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 8
  },
  roles: [{
    type: String,
    "default": 'user'
  }],
  organization: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  accountActive: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].model('User', UserSchema);

var _default = User;
exports["default"] = _default;