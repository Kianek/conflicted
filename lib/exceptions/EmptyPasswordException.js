"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function EmptyPasswordException(message) {
  this.message = message;
  this.name = 'EmptyPasswordException';
}

EmptyPasswordException.prototype.toString = function () {
  return "".concat(this.name, ": ").concat(this.message);
};

var _default = EmptyPasswordException;
exports["default"] = _default;