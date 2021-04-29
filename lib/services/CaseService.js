"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CaseRepository = _interopRequireDefault(require("./CaseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CaseService = /*#__PURE__*/function () {
  function CaseService() {
    _classCallCheck(this, CaseService);

    this.repo = _CaseRepository["default"];
  }

  _createClass(CaseService, [{
    key: "addCase",
    value: function addCase(caseType) {
      return null;
    }
  }, {
    key: "updateCase",
    value: function updateCase(caseType) {
      return null;
    }
  }, {
    key: "removeCase",
    value: function removeCase(caseType) {
      return null;
    }
  }]);

  return CaseService;
}();

var _default = CaseService;
exports["default"] = _default;