import { Title } from ".";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    state: {
      options: ["blue-BG", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: false,
    content: "Colonne",
    state: "blue-BG",
    className: {},
    divClassName: {},
  },
};
