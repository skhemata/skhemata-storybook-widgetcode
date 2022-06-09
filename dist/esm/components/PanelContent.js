import React from "react";
import { styled } from "@storybook/theming";
import { Button, Source } from "@storybook/components";
export var RequestDataButton = styled(Button)({
  marginTop: "1rem"
});

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export var PanelContent = function PanelContent(_ref) {
  var code2 = _ref.code2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Source, {
    code: code2,
    language: "html",
    format: true
  }));
};