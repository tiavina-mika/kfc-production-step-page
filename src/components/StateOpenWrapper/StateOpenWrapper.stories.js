import { StateOpenWrapper } from ".";

export default {
  title: "Components/StateOpenWrapper",
  component: StateOpenWrapper,
  argTypes: {
    state: {
      options: ["close", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "close",
    className: {},
    iconAction: "https://c.animaapp.com/qBYhTT9R/img/icon-action-assignment-24px-2.svg",
    iconActionClassName: {},
  },
};
