"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContent = exports.RequestDataButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RequestDataButton = (0, _theming.styled)(_components.Button)({
  marginTop: "1rem"
});
exports.RequestDataButton = RequestDataButton;

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
var PanelContent = function PanelContent(_ref) {
  var code2 = _ref.code2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_components.Source, {
    code: code2,
    language: "html",
    format: true
  }));
};

exports.PanelContent = PanelContent;