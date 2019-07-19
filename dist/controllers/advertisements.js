"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.post('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var ad, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            ad = new _models["default"].Advertisements({
              mediaType: req.body.mediaType,
              mediaUrl: req.body.mediaUrl,
              adLink: req.body.adLink,
              identifier: req.body.identifier
            });
            _context.next = 4;
            return ad.save();

          case 4:
            result = _context.sent;
            res.status(200).send({
              _id: result._id
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              error_code: 'interal_server_error',
              error_message: 'An error has occured, please check your network',
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(req.query && req.query.hasOwnProperty('id'))) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return _models["default"].Advertisements.findOne({
              _id: req.query.id
            });

          case 4:
            result = _context2.sent;
            _context2.next = 22;
            break;

          case 7:
            if (!(req.query && req.query.hasOwnProperty('identifier'))) {
              _context2.next = 19;
              break;
            }

            if (!Array.isArray(req.query.identifier)) {
              _context2.next = 14;
              break;
            }

            _context2.next = 11;
            return _models["default"].Advertisements.find({
              identifier: req.query.identifier
            });

          case 11:
            result = _context2.sent;
            _context2.next = 17;
            break;

          case 14:
            _context2.next = 16;
            return _models["default"].Advertisements.findOne({
              identifier: req.query.identifier
            });

          case 16:
            result = _context2.sent;

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.next = 21;
            return _models["default"].Advertisements.find().sort({
              createdAt: -1
            });

          case 21:
            result = _context2.sent;

          case 22:
            if (result) res.status(200).send(result);else res.status(400).send({
              error_code: 'resource_not_found',
              error_message: 'We did not find the resource you are looking for'
            });
            _context2.next = 28;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              error_code: 'interal_server_error',
              error_message: 'An error has occured, please check your network',
              error: _context2.t0
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 25]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
router.put('/',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models["default"].Advertisements.updateOne({
              _id: req.body.id
            }, req.body);

          case 3:
            res.status(200).send("Updated!");
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              error_code: 'interal_server_error',
              error_message: 'An error has occured, please check your network',
              error: _context3.t0
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
router["delete"]('/',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models["default"].Advertisements.deleteOne({
              _id: req.body.id
            });

          case 3:
            res.status(200).send("Deleted!");
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              error_code: 'interal_server_error',
              error_message: 'An error has occured, please check your network',
              error: _context4.t0
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function (_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;