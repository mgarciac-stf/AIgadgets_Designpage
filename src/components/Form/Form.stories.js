import { Form } from ".";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {
    style: {
      options: ["dropdown", "date-picker", "input"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "dropdown",
    active: true,
    input: true,
    icon: true,
    supportingMessage: true,
    className: {},
    text: "Input",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla commodo.",
    text2: "Label",
    text3: "Value",
  },
};
