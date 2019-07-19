"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var advertisementSchema = new _mongoose["default"].Schema({
  userId: {
    type: String,
    "default": 'legacy'
  },
  identifier: {
    type: String,
    unique: true
  },
  mediaType: Number,
  //0 = image, 1 = video
  mediaUrl: String,
  adLink: String,
  createdAt: {
    type: Date,
    "default": Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
});

var Advertisements = _mongoose["default"].model('Advertisements', advertisementSchema);

var _default = Advertisements;
exports["default"] = _default;