import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    widgetCode: `<skhemata-portfolio config-src="https://cdn.jsdelivr.net/npm/@skhemata/skhemata-portfolio@latest/demo/projects.json"></skhemata-portfolio>

    <script type="module" src="https://cdn.jsdelivr.net/npm/@skhemata/skhemata-portfolio@latest/build/index.js"></script>
`,
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
