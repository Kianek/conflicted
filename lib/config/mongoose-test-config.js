"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongodbMemoryServerCore = _interopRequireDefault(require("mongodb-memory-server-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MongoTestDb = /*#__PURE__*/function () {
  function MongoTestDb() {
    _classCallCheck(this, MongoTestDb);

    this.connection = _mongoose["default"].connection;
    this.mongoServer = new _mongodbMemoryServerCore["default"]();
  }

  _createClass(MongoTestDb, [{
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var mongoUri, opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.mongoServer.getUri();

              case 2:
                mongoUri = _context.sent;
                opts = {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                };
                _context.next = 6;
                return _mongoose["default"].connect(mongoUri, opts, function (err) {
                  if (err) console.error(err);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function openConnection() {
        return _openConnection.apply(this, arguments);
      }

      return openConnection;
    }()
  }, {
    key: "closeConnection",
    value: function () {
      var _closeConnection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.disconnect();

              case 2:
                _context2.next = 4;
                return this.mongoServer.stop();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function closeConnection() {
        return _closeConnection.apply(this, arguments);
      }

      return closeConnection;
    }()
  }]);

  return MongoTestDb;
}();

var _default = MongoTestDb;
exports["default"] = _default;