import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Button, Source } from "@storybook/components";


export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

type Results = string;

interface PanelContentProps {
  code2: Results;
}

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({
  code2
}) => (
  <>
  <Source code={code2} language="html" format={true} />
</>
);
