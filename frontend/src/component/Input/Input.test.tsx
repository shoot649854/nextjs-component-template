//Input.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input component", () => {
  test('renders an input with default type="text"', () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox"); //"textbox" role for type="text"
    expect(inputElement).toBeInTheDocument();

    //Check if the type attribute is indeed text by default
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("allows overriding the type prop", () => {
    render(<Input type="password" aria-label="Password Field" />);
    const inputElement = screen.getByLabelText("Password Field");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  test("applies the base input class and any custom className", () => {
    render(<Input className="custom-input-class" />);
    const inputElement = screen.getByRole("textbox");
    //The final className should contain both styles.input and "custom-input-class"
    expect(inputElement.className).toMatch(/input/);
    expect(inputElement.className).toMatch(/custom-input-class/);
  });

  test("can be disabled with the disabled prop", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");

    //Type something
    fireEvent.change(inputElement, { target: { value: "hello" } });
    //The event handler should have been called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("accepts additional props such as placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    expect(inputElement).toBeInTheDocument();
  });
});
