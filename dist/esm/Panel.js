import React from "react";
import { AddonPanel } from "@storybook/components";
import { PARAM_KEY } from "./constants";
import { useParameter } from "@storybook/api";
import { PanelContent } from "./components/PanelContent";
export var Panel = function Panel(props) {
  var paramData = useParameter(PARAM_KEY, "");
  console.log('paramData: ', paramData);
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(PanelContent, {
    code2: paramData ? paramData : 'Nothing yet'
  }));
};