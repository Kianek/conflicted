"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Address = _interopRequireDefault(require("./Address"));

var _Case = _interopRequireDefault(require("./Case"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ClientSchema = new Schema({
  organization: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  middle: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120
  },
  phone: {
    type: String,
    match: /\d{3}-\d{3}-\d{4}/
  },
  email: {
    type: String,
    validate: {
      validator: function validator(v) {
        return (0, _isEmail["default"])(v);
      },
      message: function message(props) {
        return "".concat(props, " is not a valid email address");
      }
    }
  },
  addresses: [_Address["default"]],
  cases: [_Case["default"]]
}, {
  timestamps: true
});

var Client = _mongoose["default"].model('Client', ClientSchema);

var _default = Client;
exports["default"] = _default;