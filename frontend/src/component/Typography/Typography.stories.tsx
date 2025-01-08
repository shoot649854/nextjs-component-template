import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "p", "legend", "caption"],
      },
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  children: "This is an H1 heading",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
  children: "This is an H2 heading",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "h3",
  children: "This is an H3 heading",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "p",
  children: "This is a paragraph.",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  children: "This is a caption.",
};
