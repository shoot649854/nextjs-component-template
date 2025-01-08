import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

//Default Progress example
export const Default: Story = {
  args: {
    value: 50, //50% progress by default
  },
};

//Fully completed progress
export const Completed: Story = {
  args: {
    value: 100,
  },
};

//Partially completed
export const PartiallyCompleted: Story = {
  args: {
    value: 25,
  },
};
