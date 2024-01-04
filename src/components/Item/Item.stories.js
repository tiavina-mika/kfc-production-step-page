import { Item } from ".";

export default {
  title: "Components/Item",
  component: Item,
  argTypes: {
    state: {
      options: ["close-small", "close", "open", "open-small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "close-small",
    className: {},
    divClassName: {},
    visible: true,
    text: "Catalogue",
  },
};
