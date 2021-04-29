"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var router = require('express').Router();

router.post('/token', function (req, res) {
  res.send('JWT token');
});
router.post('/refresh-token', function (req, res) {
  res.send('Refresh token');
});
router.get('/invalidate-token', function (req, res) {
  res.send('Token invalidated');
});
var _default = router;
exports["default"] = _default;