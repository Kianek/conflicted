"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ClientFactory = _interopRequireDefault(require("./ClientFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClientRepository = /*#__PURE__*/function () {
  function ClientRepository(userId) {
    _classCallCheck(this, ClientRepository);

    this.userId = userId;
    this.clientFactory = _ClientFactory["default"];
  }

  _createClass(ClientRepository, [{
    key: "findById",
    value: function findById(id) {
      return null;
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return null;
    }
  }, {
    key: "add",
    value: function add(newClient) {
      return null;
    }
  }, {
    key: "update",
    value: function update(id, updateInfo) {
      return null;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      return null;
    }
  }]);

  return ClientRepository;
}();

var _default = ClientRepository;
exports["default"] = _default;