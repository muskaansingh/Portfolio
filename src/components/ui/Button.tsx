import type { ButtonHTMLAttributes } from "react";
import { buttonClasses, type ButtonVariant } from "./buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, ...rest }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...rest} />;
}
