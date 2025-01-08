import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./Slider.module.scss";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className = "", ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={`${styles.sliderRoot} ${className}`}
      {...props}
    >
      <SliderPrimitive.Track className={styles.sliderTrack}>
        <SliderPrimitive.Range className={styles.sliderRange} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.sliderThumb} />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
