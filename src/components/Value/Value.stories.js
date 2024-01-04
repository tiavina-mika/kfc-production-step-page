import { Value } from ".";

export default {
  title: "Components/Value",
  component: Value,
  argTypes: {
    state: {
      options: ["icons", "empty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "icons",
    className: {},
    iconActionPrintClassName: {},
    iconActionPrint: "https://c.animaapp.com/qBYhTT9R/img/icon-action-print-24px.svg",
  },
};
