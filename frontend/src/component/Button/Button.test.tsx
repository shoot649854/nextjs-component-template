//Button.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button component", () => {
  test("renders with default variant (primary) and not disabled", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("buttonBase"); //Match styles.buttonBase
    expect(buttonElement).toHaveClass("default"); //Match styles.button for default variant
    expect(buttonElement).toHaveClass("sizeDefault"); //Match sizeDefault class
    expect(buttonElement).not.toHaveClass("disabled");
    expect(buttonElement).not.toBeDisabled();
  });

  test("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Secondary Button/i,
    });
    //Check if it has the secondary class
    expect(buttonElement).toHaveClass("secondary");
  });

  test("renders with outline variant", () => {
    render(<Button variant="outline">Outline Button</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Outline Button/i,
    });
    //Check if it has the outline class
    expect(buttonElement).toHaveClass("outline");
  });

  test("applies disabled state when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Disabled Button/i,
    });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("buttonBase"); //Base class
    expect(buttonElement).toHaveClass("default"); //Default variant class
    expect(buttonElement).toHaveClass("sizeDefault"); //Default size class
    expect(buttonElement).toHaveClass("disabled"); //Disabled class
  });

  test("renders children correctly", () => {
    render(<Button>Some Text</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Some Text/i,
    });
    expect(buttonElement).toBeInTheDocument();
    //Confirm text
    expect(buttonElement).toHaveTextContent("Some Text");
  });

  test("calls onClick handler when clicked and not disabled", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Handler</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Click Handler/i,
    });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick handler when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Click
      </Button>,
    );

    const buttonElement = screen.getByRole("button", {
      name: /Disabled Click/i,
    });
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
