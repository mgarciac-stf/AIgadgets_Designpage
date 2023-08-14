import { MenuOption } from ".";

export default {
  title: "Components/MenuOption",
  component: MenuOption,
  argTypes: {
    state: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    className: {},
    text: "Gadget explorer",
  },
};
