import React from "react";
import styles from "./Input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  "aria-label"?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", "aria-label": ariaLabel, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`${styles.input} ${className || ""}`}
        aria-label={ariaLabel}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
