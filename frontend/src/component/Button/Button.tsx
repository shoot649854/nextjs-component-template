import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**One of the supported variants: default, secondary, outline, destructive, ghost, link */
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "ghost"
    | "link";
  /**One of the supported sizes: default, sm, lg, icon */
  size?: "default" | "sm" | "lg" | "icon";
  /**Disable the button */
  disabled?: boolean;
  /**Render the button as a child element (useful for e.g. Next.js <Link>) */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      disabled = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    //Map the variant prop to the correct SCSS class
    const variantClass =
      variant === "default"
        ? styles.default //expects .default in Button.module.scss
        : variant === "secondary"
          ? styles.secondary //expects .secondary
          : variant === "outline"
            ? styles.outline //expects .outline
            : variant === "destructive"
              ? styles.destructive //expects .destructiveVariant
              : variant === "ghost"
                ? styles.ghost //expects .ghostVariant
                : variant === "link"
                  ? styles.link //expects .linkVariant
                  : undefined;

    //Map the size prop to the correct SCSS class
    const sizeClass =
      size === "default"
        ? styles.sizeDefault //expects .sizeDefault
        : size === "sm"
          ? styles.sizeSm //expects .sizeSm
          : size === "lg"
            ? styles.sizeLg //expects .sizeLg
            : size === "icon"
              ? styles.sizeIcon //expects .sizeIcon
              : undefined;

    //Construct the final className string
    const buttonClassName = [
      styles.buttonBase, //expects .buttonBase
      variantClass, //e.g., .default, .secondary, etc.
      sizeClass, //e.g., .sizeDefault, .sizeSm, etc.
      disabled && styles.disabled, //expects .disabled if disabled=true
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Comp
        ref={ref}
        className={buttonClassName}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
