"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _constants = require("./constants");

var _api = require("@storybook/api");

var _PanelContent = require("./components/PanelContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Panel = function Panel(props) {
  var paramData = (0, _api.useParameter)(_constants.PARAM_KEY, "");
  console.log('paramData: ', paramData);
  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_PanelContent.PanelContent, {
    code2: paramData ? paramData : 'Nothing yet'
  }));
};

exports.Panel = Panel;