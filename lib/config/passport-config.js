"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JwtStrategy = _passportJwt["default"].Strategy;
var ExtractJwt = _passportJwt["default"].ExtractJwt;

var extractor = function extractor() {};

var genOptions = function genOptions() {
  return {
    jwt: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER // TODO: specify audience after creating/deploying client app
    // audience:

  };
};

var verify = function verify(payload, done) {// TODO: implement after completing DB services
};

var genJwtStrategy = function genJwtStrategy(options, verify) {
  return new JwtStrategy(options, verify);
};

_passport["default"].use(genJwtStrategy(genOptions(), verify));