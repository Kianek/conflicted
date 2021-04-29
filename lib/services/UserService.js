"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserRepository = _interopRequireDefault(require("./UserRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = /*#__PURE__*/function () {
  function UserService() {
    _classCallCheck(this, UserService);

    this.userRepo = _UserRepository["default"];
  }

  _createClass(UserService, [{
    key: "register",
    value: function register(newUser) {
      return null;
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(id, updateInfo) {
      return null;
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount(id) {
      return null;
    }
  }]);

  return UserService;
}();

var _default = UserService;
exports["default"] = _default;