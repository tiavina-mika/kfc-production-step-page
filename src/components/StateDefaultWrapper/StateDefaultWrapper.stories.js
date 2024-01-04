import { StateDefaultWrapper } from ".";

export default {
  title: "Components/StateDefaultWrapper",
  component: StateDefaultWrapper,
  argTypes: {
    state: {
      options: ["red-text", "disabled", "blue-text", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content: "Valeur",
    state: "red-text",
    className: {},
    divClassName: {},
  },
};
