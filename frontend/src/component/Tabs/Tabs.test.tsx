import React from "react";
import { render, screen } from "@testing-library/react";
//userEvent is often better for simulating real user interactions
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
//Replace the old import with the new recommended one:
import { act } from "react";

//Your Radix Tabs wrapper
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

describe("Tabs component", () => {
  test("renders the tabs with default active tab", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    //Check the tab triggers are rendered
    expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab 2/i })).toBeInTheDocument();

    //"tab1" is the defaultValue, so only Content 1 is in the DOM
    expect(screen.getByText(/content 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();
  });

  test("switches active tab on trigger click", async () => {
    const user = userEvent.setup();

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    //Initially, only "Content 1" is rendered
    expect(screen.getByText(/content 1/i)).toBeVisible();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();

    //Wrap click in act
    await act(async () => {
      await user.click(screen.getByRole("tab", { name: /tab 2/i }));
    });

    //Now "Content 2" should be rendered, while "Content 1" is removed
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();
    expect(screen.getByText(/content 2/i)).toBeVisible();

    //Optionally, switch back to Tab 1
    await act(async () => {
      await user.click(screen.getByRole("tab", { name: /tab 1/i }));
    });
    expect(screen.getByText(/content 1/i)).toBeVisible();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();
  });

  test("uses controlled mode with value/onValueChange if provided", async () => {
    const user = userEvent.setup();
    const handleValueChange = jest.fn();

    render(
      <Tabs value="tab1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    //Because value="tab1", only Content 1 is mounted
    expect(screen.getByText(/content 1/i)).toBeVisible();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();

    //Wrap click in act
    await act(async () => {
      await user.click(screen.getByRole("tab", { name: /tab 2/i }));
    });

    //onValueChange should be called with "tab2"
    expect(handleValueChange).toHaveBeenCalledWith("tab2");

    //But since the parent is controlling "value" and hasn't updated it,
    //"Content 2" remains hidden
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();
    expect(screen.getByText(/content 1/i)).toBeVisible();
  });

  test("applies custom class names when provided", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList className="custom-list-class">
          <TabsTrigger value="tab1" className="custom-trigger-class">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="custom-content-class">
          Content 1
        </TabsContent>
      </Tabs>,
    );

    //Check if the custom class is applied to the TabsList
    const list = screen.getByRole("tablist");
    expect(list).toHaveClass("custom-list-class");

    //Check if the custom class is applied to the trigger
    const trigger = screen.getByRole("tab", { name: /tab 1/i });
    expect(trigger).toHaveClass("custom-trigger-class");

    //Check if the custom class is applied to the content
    const content = screen.getByText(/content 1/i);
    expect(content).toHaveClass("custom-content-class");
  });
});
