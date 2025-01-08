import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The text or elements within the label",
      defaultValue: "Label text",
    },
    htmlFor: {
      control: "text",
      description: "Associates the label with a form element (input ID)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "I am a label",
  },
};

export const ForAnInput: Story = {
  args: {
    children: "Username",
    htmlFor: "username-input", //Example usage with an input
  },
};

export const CustomStyling: Story = {
  args: {
    children: "Label with custom class",
    className: "my-custom-label",
  },
};
