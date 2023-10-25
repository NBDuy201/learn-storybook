import type { StoryObj, Meta } from "@storybook/react";

import Button from "../components/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Red: Story = {
  args: {
    label: "Press me",
    className: "bg-red-500 p-2 rounded-md text-white",
  },
};
