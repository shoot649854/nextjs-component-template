import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Accordion Component", () => {
  test("renders the Accordion with children", () => {
    render(
      <Accordion>
        <AccordionItem value="item1">
          <AccordionTrigger value="item1">Trigger 1</AccordionTrigger>
          <AccordionContent value="item1">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: /trigger 1/i });
    expect(trigger).toBeInTheDocument();
  });

  test("toggles content visibility when trigger is clicked", () => {
    render(
      <Accordion>
        <AccordionItem value="item1">
          <AccordionTrigger value="item1">Trigger 1</AccordionTrigger>
          <AccordionContent value="item1">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: /trigger 1/i });
    const content = screen.queryByText(/content 1/i);

    expect(content).not.toBeInTheDocument(); //Initially hidden

    fireEvent.click(trigger);
    expect(screen.getByText(/content 1/i)).toBeInTheDocument(); //Visible after click

    fireEvent.click(trigger);
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument(); //Hidden after second click
  });

  test("renders multiple AccordionItems and only toggles the clicked one", () => {
    render(
      <Accordion>
        <AccordionItem value="item1">
          <AccordionTrigger value="item1">Trigger 1</AccordionTrigger>
          <AccordionContent value="item1">Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger value="item2">Trigger 2</AccordionTrigger>
          <AccordionContent value="item2">Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger1 = screen.getByRole("button", { name: /trigger 1/i });
    const trigger2 = screen.getByRole("button", { name: /trigger 2/i });

    //Initially, no content is visible
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();

    //Toggle first item
    fireEvent.click(trigger1);
    expect(screen.getByText(/content 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();

    //Toggle second item
    fireEvent.click(trigger2);
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();
    expect(screen.getByText(/content 2/i)).toBeInTheDocument();
  });

  test("renders with a default open item", () => {
    render(
      <Accordion defaultValue="item1">
        <AccordionItem value="item1">
          <AccordionTrigger value="item1">Trigger 1</AccordionTrigger>
          <AccordionContent value="item1">Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger value="item2">Trigger 2</AccordionTrigger>
          <AccordionContent value="item2">Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText(/content 1/i)).toBeInTheDocument(); //Default open item
    expect(screen.queryByText(/content 2/i)).not.toBeInTheDocument();
  });

  test("closes the default open item when its trigger is clicked", () => {
    render(
      <Accordion defaultValue="item1">
        <AccordionItem value="item1">
          <AccordionTrigger value="item1">Trigger 1</AccordionTrigger>
          <AccordionContent value="item1">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: /trigger 1/i });

    expect(screen.getByText(/content 1/i)).toBeInTheDocument(); //Default open

    fireEvent.click(trigger);
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument(); //Closed after click
  });

  test("applies appropriate classes for open and closed states", () => {
    render(
      <Accordion>
        <AccordionItem value="item1">
          <AccordionTrigger value="item1" className="custom-trigger">
            Trigger 1
          </AccordionTrigger>
          <AccordionContent value="item1" className="custom-content">
            Content 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: /trigger 1/i });
    expect(trigger).toHaveClass("custom-trigger");
    expect(trigger).toHaveTextContent("+"); //Closed indicator

    fireEvent.click(trigger);
    expect(trigger).toHaveTextContent("-"); //Open indicator
    expect(screen.getByText(/content 1/i)).toHaveClass("custom-content");
  });
});
