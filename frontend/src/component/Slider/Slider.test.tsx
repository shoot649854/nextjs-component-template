//src/component/Slider/Slider.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

//--- Mock ResizeObserver if it's not available in Jest's environment ---
if (typeof window.ResizeObserver === "undefined") {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

//--- Import your Slider component ---
import { Slider } from "./Slider";

describe("Slider component", () => {
  test("renders the slider", () => {
    render(<Slider />);
    //Radix sets role="slider" on the <SliderPrimitive.Root />
    const sliderRoot = screen.getByRole("slider");
    expect(sliderRoot).toBeInTheDocument();
  });

  test("renders with a default value", () => {
    render(<Slider defaultValue={[50]} />);
    const sliderRoot = screen.getByRole("slider");
    //Radix automatically updates aria-valuenow to the slider’s value
    expect(sliderRoot).toHaveAttribute("aria-valuenow", "50");
  });

  test("calls onValueChange when the slider value changes", () => {
    const handleValueChange = jest.fn();
    render(<Slider defaultValue={[25]} onValueChange={handleValueChange} />);
    const sliderRoot = screen.getByRole("slider");

    //Simulate pressing ArrowRight, which normally increments the slider’s value
    fireEvent.keyDown(sliderRoot, { key: "ArrowRight" });

    //The exact new value depends on your slider config,
    //but we can at least verify the callback fired
    expect(handleValueChange).toHaveBeenCalled();
  });
});
