import React from "react";
import type { Meta } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Card>;

export default meta;

export const Default = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>This is a description of the card.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Here is some content inside the card.</p>
    </CardContent>
    <CardFooter>
      <button>Action</button>
    </CardFooter>
  </Card>
);

export const WithoutFooter = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Without Footer</CardTitle>
      <CardDescription>A simple card example.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This card does not have a footer.</p>
    </CardContent>
  </Card>
);

export const CustomStyles = () => (
  <Card className="custom-class">
    <CardHeader>
      <CardTitle>Custom Styled Card</CardTitle>
      <CardDescription>
        Add custom styles using the `className` prop.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p>Apply any additional styles using CSS or SCSS.</p>
    </CardContent>
    <CardFooter>
      <button>Custom Button</button>
    </CardFooter>
  </Card>
);
