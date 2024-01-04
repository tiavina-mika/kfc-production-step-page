import { PrimaryButtonPx } from ".";

export default {
  title: "Components/PrimaryButtonPx",
  component: PrimaryButtonPx,
  argTypes: {
    state: {
      options: ["default", "error-hover", "hover", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Primary CTA 40px",
    state: "default",
    className: {},
  },
};
