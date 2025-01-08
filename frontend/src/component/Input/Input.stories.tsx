import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "file"],
      description: "Specifies the type of input field.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field.",
    },
    placeholder: {
      control: { type: "text" },
      description: "Sets placeholder text for the input field.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password...",
  },
};

export const DisabledInput: Story = {
  args: {
    disabled: true,
    placeholder: "This input is disabled",
  },
};

export const FileInput: Story = {
  args: {
    type: "file",
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "custom-input",
    placeholder: "Input with a custom class applied",
  },
};
