import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "number" },
      description: "defaultValue",
    },
    min: { control: { type: "number" }, description: "min" },
    max: { control: { type: "number" }, description: "max" },
    step: { control: { type: "number" }, description: "step" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const RangeSlider: Story = {
  args: {
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    step: 5,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [30],
    disabled: true,
  },
};
