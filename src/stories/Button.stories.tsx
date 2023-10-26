import type { StoryObj, Meta } from "@storybook/react";

import Button from "../components/Button";

const meta = {
  title: "Component/Button",
  component: Button,
  argTypes: { handleClick: { action: "onClick" } }, // property handle click will be action with NAME: "onClick" (can be customize)
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Red: Story = {
  args: {
    label: "Press me",
    className: "bg-red-500 p-2 rounded-md text-white",
  },
};

export const Green: Story = {
  args: {
    label: "Press me",
    className: "bg-green-500 p-2 rounded-md text-white",
  },
};

export const Large: Story = {
  args: {
    label: "Press me",
    className: "bg-green-500 p-2 rounded-md text-white text-2xl",
  },
};
