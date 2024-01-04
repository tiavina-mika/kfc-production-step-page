import { TertiaryButton } from ".";

export default {
  title: "Components/TertiaryButton",
  component: TertiaryButton,
  argTypes: {
    state: {
      options: ["default", "error-hover", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Tertiary CTA 40px",
    state: "default",
    className: {},
  },
};
