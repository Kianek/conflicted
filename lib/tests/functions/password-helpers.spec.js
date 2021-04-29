"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var expect = require('chai').expect;

var pw = require('../../functions/password-helpers');

var EmptyPasswordException = require('../../exceptions/EmptyPasswordException');

describe('password-helpers', function () {
  var password = 'supersecret123!';
  describe('hashPassword', function () {
    it('returns a hashed password', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var hashedPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pw.hashPassword(password);

            case 2:
              hashedPassword = _context.sent;
              expect(hashedPassword.length).to.be.greaterThan(1);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('throws EmptyPasswordException', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var exception;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return pw.hashPassword('');

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              exception = _context2.t0.name;

            case 8:
              expect(exception).to.equal(EmptyPasswordException.name);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    })));
  });
  describe('passwordsMatch', function () {
    var passwordHash = '';
    before( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return pw.hashPassword(password);

            case 2:
              passwordHash = _context3.sent;

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('passwords match; returns true', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var result;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return pw.passwordsMatch(password, passwordHash);

            case 2:
              result = _context4.sent;
              expect(result).to.be["true"];

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    it('passwords do not match; returns false', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var wrongPassword, result;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              wrongPassword = 'totallydifferentpassword321!';
              _context5.next = 3;
              return pw.passwordsMatch(password, wrongPassword);

            case 3:
              result = _context5.sent;
              expect(result).to.be["false"];

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
});