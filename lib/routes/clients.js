"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var router = require('express').Router();

router.get('/', function (req, res) {
  res.send('Get all');
});
router.route('/:id').get(function (req, res) {
  return res.send('Find by id');
}).patch(function (req, res) {
  return res.send('Update client info');
})["delete"](function (req, res) {
  return res.send('Delete');
});
router.route('/:id/cases').get(function (req, res) {
  return res.send('Get cases');
}).post(function (req, res) {
  return res.send('Add case');
}).patch(function (req, res) {
  return res.send('Update case');
})["delete"](function (req, res) {
  return res.send('Delete case');
});
var _default = router;
exports["default"] = _default;