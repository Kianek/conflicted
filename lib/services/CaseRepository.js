"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Case = _interopRequireDefault(require("../models/Case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CaseRepository = /*#__PURE__*/function () {
  function CaseRepository() {
    _classCallCheck(this, CaseRepository);
  }

  _createClass(CaseRepository, [{
    key: "add",
    value: function add(caseType) {
      return null;
    }
  }, {
    key: "update",
    value: function update(caseType) {
      return null;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      return null;
    }
  }]);

  return CaseRepository;
}();

var _default = CaseRepository;
exports["default"] = _default;