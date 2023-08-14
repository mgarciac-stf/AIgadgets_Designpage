import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["tertiary", "secondary-icon", "tertiary-icon", "secondary", "primary", "primary-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "tertiary",
    leadingIcon: true,
    trailIcon: true,
    className: {},
    text: "Primary",
  },
};
