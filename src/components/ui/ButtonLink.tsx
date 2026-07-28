import type { AnchorHTMLAttributes } from "react";
import { buttonClasses, type ButtonVariant } from "./buttonStyles";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function ButtonLink({ variant = "primary", className, ...rest }: ButtonLinkProps) {
  return <a className={buttonClasses(variant, className)} {...rest} />;
}
