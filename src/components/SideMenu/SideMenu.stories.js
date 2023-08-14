import { SideMenu } from ".";

export default {
  title: "Components/SideMenu",
  component: SideMenu,
  argTypes: {
    state: {
      options: ["default", "gadget-explore", "assemble", "gadget-designer", "gadgets-library", "API-keys"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "default",
    className: {},
  },
};
