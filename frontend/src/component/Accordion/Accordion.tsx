import React, { createContext, useContext, useState } from "react";
import styles from "./Accordion.module.scss";

type AccordionContextType = {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string; //If you want a default open item
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, defaultValue, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string | null>(
      defaultValue || null,
    );

    const value: AccordionContextType = {
      activeItem,
      setActiveItem,
    };

    return (
      <AccordionContext.Provider value={value}>
        <div
          ref={ref}
          className={`${styles.accordion} ${className || ""}`}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ children, className, value, ...props }, ref) => {
  const { activeItem } = useContext(AccordionContext)!;
  const isOpen = activeItem === value;

  return (
    <div
      ref={ref}
      className={`${styles.accordionItem} ${isOpen ? styles.open : ""} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, value, ...props }, ref) => {
  const { activeItem, setActiveItem } = useContext(AccordionContext)!;
  const isOpen = activeItem === value;

  const handleToggle = () => {
    if (isOpen) {
      //Close if already open
      setActiveItem(null);
    } else {
      //Open the clicked item
      setActiveItem(value);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.accordionTrigger} ${className || ""}`}
      onClick={handleToggle}
      {...props}
    >
      {children}
      <span className={styles.indicator}>{isOpen ? "-" : "+"}</span>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, value, ...props }, ref) => {
  const { activeItem } = useContext(AccordionContext)!;
  const isOpen = activeItem === value;

  return isOpen ? (
    <div
      ref={ref}
      className={`${styles.accordionContent} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  ) : null;
});
AccordionContent.displayName = "AccordionContent";
