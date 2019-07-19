"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdvertisements = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAdvertisements = function getAdvertisements() {
  try {
    return _models["default"].Advertisements.find().sort({
      createdAt: -1
    });
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAdvertisements = getAdvertisements;