import clsx from "clsx";
import { match } from "ts-pattern";
import styles from "./Typography.module.scss";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "legend" | "caption";

type TypographyProps = {
  component?: React.ElementType;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
};

function Typography({
  component,
  variant,
  children,
  className,
  ...props
}: TypographyProps) {
  const Component = component || variant;

  const fontStyle = match(variant)
    .with("h1", () => clsx(styles.h1))
    .with("h2", () => clsx(styles.h2))
    .with("h3", () => clsx(styles.h3))
    .with("h4", () => clsx(styles.h4))
    .with("p", () => clsx(styles.p))
    .with("legend", () => clsx(styles.legend))
    .with("caption", () => clsx(styles.caption))
    .exhaustive();

  return (
    <Component className={clsx(fontStyle, className)} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
