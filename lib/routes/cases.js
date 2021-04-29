"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var router = require('express').Router();

router.get('/', function (req, res) {
  res.send('Cases works');
});
router.route('/:id').patch(function (req, res) {
  res.send('Update case type');
})["delete"](function (req, res) {
  res.send('Delete case type');
});
var _default = router;
exports["default"] = _default;