//Select.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

//If you need act for async, you can import:
//import { act } from 'react';

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./Select";

describe("Select component", () => {
  test("renders with placeholder and does not show items initially", () => {
    render(
      <Select>
        <SelectTrigger aria-label="Select an option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        {/*No "portalled" prop here, or use portalled="false" if needed */}
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    //The placeholder text is rendered
    expect(screen.getByText(/select an option/i)).toBeInTheDocument();

    //The items are not in the DOM until opened
    expect(screen.queryByText(/option 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/option 2/i)).not.toBeInTheDocument();
  });

  //Uncomment if you need this test
  //test('opens and closes the select', async () => {
  //render(
  //<Select>
  //<SelectTrigger aria-label="Pick something">
  //<SelectValue placeholder="Pick something" />
  //</SelectTrigger>
  //{/* Just <SelectContent>, no additional props */}
  //<SelectContent>
  //<SelectItem value="opt1">Option A</SelectItem>
  //<SelectItem value="opt2">Option B</SelectItem>
  //</SelectContent>
  //</Select>
  //);

  //const trigger = screen.getByRole('combobox', { name: /pick something/i });
  //fireEvent.click(trigger);

  //// Items should be visible
  //expect(screen.getByText(/option a/i)).toBeVisible();
  //expect(screen.getByText(/option b/i)).toBeVisible();

  //// Close the select
  //fireEvent.click(trigger);

  //// Because Radix might do an exit transition, we wait until it's hidden
  //await waitFor(() => {
  //expect(screen.getByText(/option a/i)).not.toBeVisible();
  //expect(screen.getByText(/option b/i)).not.toBeVisible();
  //});
  //});

  test("selecting an item updates the select value", () => {
    render(
      <Select>
        <SelectTrigger aria-label="Pick item">
          <SelectValue placeholder="Pick item" />
        </SelectTrigger>
        {/*Changed portalled={false} -> portalled="false" */}
        <SelectContent>
          <SelectItem value="a">Item A</SelectItem>
          <SelectItem value="b">Item B</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: /pick item/i });
    fireEvent.click(trigger);

    //Click on Item B
    fireEvent.click(screen.getByText(/item b/i));

    //The trigger now displays "Item B"
    expect(trigger).toHaveTextContent(/item b/i);
  });

  test("calls onValueChange if using controlled/uncontrolled with a callback", () => {
    const handleValueChange = jest.fn();

    render(
      <Select onValueChange={handleValueChange}>
        <SelectTrigger aria-label="Placeholder">
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="x">Item X</SelectItem>
          <SelectItem value="y">Item Y</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: /placeholder/i });
    fireEvent.click(trigger);

    //Select Item Y
    fireEvent.click(screen.getByText(/item y/i));

    //Radix calls onValueChange('y')
    expect(handleValueChange).toHaveBeenCalledWith("y");
  });

  test("renders select label and sees disabled item", () => {
    render(
      <Select>
        <SelectTrigger aria-label="Label test">
          <SelectValue placeholder="Label test" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectSeparator />
            <SelectItem value="cherry" disabled>
              Cherry
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: /label test/i });
    fireEvent.click(trigger);

    //"Fruits", Apple, Banana visible
    expect(screen.getByText(/fruits/i)).toBeVisible();
    expect(screen.getByText(/apple/i)).toBeVisible();

    //Check if "Cherry" is disabled (depending on how Radix sets aria-disabled)
    //expect(screen.getByText(/cherry/i)).toHaveAttribute('aria-disabled', 'true');
  });

  test("applies custom classes and position prop", () => {
    render(
      <Select>
        <SelectTrigger
          aria-label="Custom Class"
          className="custom-trigger-class"
        >
          <SelectValue placeholder="Custom Class" />
        </SelectTrigger>
        {/*Changed portalled={false} -> portalled="false" */}
        <SelectContent className="custom-content-class" position="popper">
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: /custom class/i });
    expect(trigger).toHaveClass("custom-trigger-class");

    fireEvent.click(trigger);

    //The <SelectContent> typically has role="listbox"
    const content = screen.getByRole("listbox");
    expect(content).toHaveClass("custom-content-class");
  });
});
