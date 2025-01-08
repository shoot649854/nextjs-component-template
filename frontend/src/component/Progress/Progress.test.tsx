//Progress.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Progress } from "./Progress";

describe("Progress component", () => {
  test("renders with default value (0)", () => {
    render(<Progress />);
    const progressRoot = screen.getByRole("progressbar");
    expect(progressRoot).toBeInTheDocument();

    //For value=0 => translateX(-100%)
    const indicator = progressRoot.firstChild as HTMLElement;
    expect(indicator).toHaveStyle("transform: translateX(-100%)");

    //ARIA "aria-valuenow" => "0"
    expect(progressRoot).toHaveAttribute("aria-valuenow", "0");
  });

  test("applies correct transform style for a given value", () => {
    render(<Progress value={50} />);
    const progressRoot = screen.getByRole("progressbar");

    const indicator = progressRoot.firstChild as HTMLElement;
    //50 => translateX(-50%)
    expect(indicator).toHaveStyle("transform: translateX(-50%)");

    expect(progressRoot).toHaveAttribute("aria-valuenow", "50");
  });

  test("sets transform to 0% when value=100", () => {
    render(<Progress value={100} />);
    const progressRoot = screen.getByRole("progressbar");
    const indicator = progressRoot.firstChild as HTMLElement;

    //100 => translateX(-0%)
    expect(indicator).toHaveStyle("transform: translateX(-0%)");
    expect(progressRoot).toHaveAttribute("aria-valuenow", "100");
  });

  test("does not exceed -100% translation if value < 0", () => {
    //Now it clamps to 0 => translateX(-100%)
    render(<Progress value={-10} />);
    const progressRoot = screen.getByRole("progressbar");
    const indicator = progressRoot.firstChild as HTMLElement;

    //Expect a clamped transform
    expect(indicator).toHaveStyle("transform: translateX(-100%)");
    //aria-valuenow should be "0" if negative is clamped
    expect(progressRoot).toHaveAttribute("aria-valuenow", "0");
  });

  test("accepts additional props", () => {
    render(<Progress data-testid="custom-progress" value={30} />);
    const progressRoot = screen.getByTestId("custom-progress");
    expect(progressRoot).toBeInTheDocument();

    expect(progressRoot).toHaveAttribute("aria-valuenow", "30");
  });
});
