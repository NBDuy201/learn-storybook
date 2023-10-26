import type { StoryObj, Meta } from "@storybook/react";

import Stack from "../components/Stack";

type StackPropsAndCustomArgs = React.ComponentProps<typeof Stack> & {
  numberOfChildren?: number;
};

const meta = {
  title: "Component/Stack",
  component: Stack,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    numberOfChildren: {
      defaultValue: 4,
      type: "number",
    },
  },
  render: ({ numberOfChildren, ...args }: StackPropsAndCustomArgs) => (
    <Stack {...args}>
      {Array(numberOfChildren)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border p-2 rounded-md text-white bg-red-500"
          >
            {index + 1}
          </div>
        ))}
    </Stack>
  ),
} satisfies Meta<StackPropsAndCustomArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: "row",
    spacing: 1,
    wrap: false,
    numberOfChildren: 4,
  },
};

export const Vertical: Story = {
  args: {
    direction: "column",
    spacing: 1,
    wrap: false,
    numberOfChildren: 4,
  },
};
