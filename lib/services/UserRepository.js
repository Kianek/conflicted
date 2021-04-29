"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserFactory = _interopRequireDefault(require("./UserFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserRepository = /*#__PURE__*/function () {
  function UserRepository(userFactory) {
    _classCallCheck(this, UserRepository);

    this.userFactory = userFactory;
  }

  _createClass(UserRepository, [{
    key: "findById",
    value: function findById(id) {
      return null;
    }
  }, {
    key: "add",
    value: function add(user) {
      return null;
    }
  }, {
    key: "update",
    value: function update(user) {
      return null;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      return null;
    }
  }]);

  return UserRepository;
}();

var _default = UserRepository;
exports["default"] = _default;