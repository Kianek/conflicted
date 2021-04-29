"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var router = require('express').Router();

router.post('/', function (req, res) {
  res.send('Register');
});
router.route('/:id').patch(function (req, res) {
  return res.send('Update account info works');
})["delete"](function (req, res) {
  return res.send('Delete');
});
router.patch('/:id/activate', function (req, res) {
  res.send('Activate');
});
router.patch('/:id/deactivate', function (req, res) {
  res.send('Deactivate');
});
var _default = router;
exports["default"] = _default;