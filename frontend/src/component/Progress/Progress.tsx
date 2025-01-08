"use client";

import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import styles from "./Progress.module.scss";

//Optional: clamp function if you also want to keep the clamping behavior.
function clampValue(value: number, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>((props, ref) => {
  const { value: rawValue, max = 100, ...rest } = props;

  //If user didn't provide value, default to 0
  //If they DID provide a value, clamp it between 0 and max.
  const computedValue =
    typeof rawValue === "number"
      ? clampValue(rawValue, 0, max) //clamp negative => 0, above 100 => 100
      : 0; //default to 0 if value is null/undefined

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={styles.progressRoot}
      value={computedValue} //determined, never null
      max={max}
      {...rest}
    >
      <ProgressPrimitive.Indicator
        className={styles.progressIndicator}
        style={{
          //e.g. 0 => translateX(-100%), 50 => translateX(-50%), etc.
          transform: `translateX(-${100 - computedValue}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
