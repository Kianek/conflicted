"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initializeMongoose(connectionUri) {
  _mongoose["default"].connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var db = _mongoose["default"].connection;
  db.on('error', function (err) {
    return console.error("Connection error: ".concat(err));
  });
  db.once('open', function () {
    return console.log("MongoDB connected");
  });
}

var _default = initializeMongoose;
exports["default"] = _default;