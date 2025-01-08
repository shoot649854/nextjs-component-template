"use client";

import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Label.module.scss";

//Minimal CVA configuration (no variants in this example).
const labelVariants = cva(styles.labelBase, {
  variants: {},
  defaultVariants: {},
});

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className = "", ...props }, ref) => {
  //Combine the label-base class from SCSS with any additional className
  const combinedClassName = [labelVariants(), className].join(" ").trim();

  return (
    <LabelPrimitive.Root ref={ref} className={combinedClassName} {...props} />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
