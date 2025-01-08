import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs, //Reference the Radix root component
  parameters: {
    layout: "centered",
  },
  //Optional tags to enhance Storybook docs
  tags: ["autodocs"],
  //Example argTypes if you plan to pass certain props to <Tabs> directly.
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "Specifies which tab is active by default.",
      defaultValue: "tab1",
    },
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Switch between horizontal or vertical tabs layout.",
      defaultValue: "horizontal",
    },
    //If you want to expose any other root props, you can list them here.
  },
};
export default meta;

//Declare a Story type which references the same type as meta
type Story = StoryObj<typeof Tabs>;

/**
 * The simplest example of a 3-tab set.
 */
export const Default: Story = {
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * A second example with more tabs and different initial active tab.
 */
export const FourTabsExample: Story = {
  args: {
    defaultValue: "tab2",
    orientation: "horizontal",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
        <TabsTrigger value="tab4">Reports</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <p>Here is the overview content.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Details and information go here.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Settings panel content.</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p>Reports and analytics live here.</p>
      </TabsContent>
    </Tabs>
  ),
};
