import React from "react";
import { AddonPanel } from "@storybook/components";
import { PARAM_KEY } from "./constants";
import { useParameter } from "@storybook/api";
import { PanelContent } from "./components/PanelContent";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const paramData = useParameter<string>(PARAM_KEY, "");
  console.log('paramData: ', paramData);

  return (
    <AddonPanel {...props}>

    <PanelContent
      code2={paramData ? paramData : 'Nothing yet'}
    />
    
  </AddonPanel>
  );
};
