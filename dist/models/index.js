"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _advertisements = _interopRequireDefault(require("./advertisements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var database = process.env.DB_HOST;

var connectDb = function connectDb() {
  console.log("mongodb+srv://".concat(user, ":").concat(password, "@").concat(database));
  return _mongoose["default"].connect("mongodb+srv://".concat(user, ":").concat(password, "@").concat(database), {
    useNewUrlParser: true
  });
};

exports.connectDb = connectDb;
var models = {
  Advertisements: _advertisements["default"]
};
var _default = models;
exports["default"] = _default;