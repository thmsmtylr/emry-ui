import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { classNames } from "../../core/classnames";
import { useClassNames } from "../../core/hooks/useClassNames";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondary color"
  | "tertiary"
  | "tertiary color"
  | "link"
  | "link color";

type ButtonTransitionSpeed = "fast" | "subtle" | "slow" | "none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variant?: ButtonVariant;
  addClassNames?: string;
  removeClassNames?: string;
  className?: string;
  transition?: ButtonTransitionSpeed;
  destructive?: boolean;
  dot?: boolean;
  // @TODO: Refactor to use Radix `slot`
  as?: keyof JSX.IntrinsicElements;
  headless?: boolean;
  icon?: boolean;
}

type ButtonRef = HTMLButtonElement;

const BUTTON_NAME = "Button";

/**
 * Buttons communicate actions that users can take.
 */
const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    children,
    size = "md",
    disabled = false,
    destructive = false,
    type = "button",
    variant = "primary",
    addClassNames,
    removeClassNames,
    className = "",
    transition = "subtle",
    dot = false,
    as = "button",
    headless = false,
    icon = false,
    ...rest
  } = props;

  const variantClasses: string = destructive
    ? buttonDestructiveVariantClassNames[variant]
    : buttonVariantClassNames[variant];

  const sizeClasses: string = icon
    ? buttonIconSizeClassNames[size]
    : buttonSizeClassNames[size];

  const { classes, addClasses, removeClasses } = useClassNames(
    className,
    buttonCoreClassNames,
    variantClasses,
    sizeClasses,
    buttonTransitionClassNames[transition]
  );

  let classList: string = !headless ? classes : className;

  if (addClassNames) {
    classList = addClasses(addClassNames);
  }

  if (removeClassNames) {
    classList = removeClasses(removeClassNames);
  }

  return React.createElement(
    as,
    {
      ref,
      disabled,
      role: as !== "button" ? "button" : undefined,
      "aria-label": as !== "button" ? "button" : undefined,
      ...(as !== "button" ? {} : { type }),
      className: classNames(classList),
      ...rest,
    },
    children
  );
});

export const buttonTransitionClassNames = {
  fast: "transition-all duration-75",
  subtle: "transition-all",
  slow: "transition-all duration-200",
  none: "",
} as Record<ButtonTransitionSpeed, string>;

export const buttonIconSizeClassNames = {
  sm: "p-2",
  // Default
  md: "p-2.5",
  lg: "p-3",
  xl: "p-3.5",
  "2xl": "p-4",
} as Record<ButtonSize, string>;

export const buttonSizeClassNames = {
  sm: "px-3.5 py-2 text-sm",
  // Default
  md: "px-4 py-2.5 text-sm",
  lg: "px-4.5 py-2.5 text-md",
  "2xl": "px-7 py-4 text-lg",
} as Record<ButtonSize, string>;

export const buttonCoreClassNames: string =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold";

export const buttonVariantClassNames = {
  // Default
  primary:
    "bg-primary-600 outline outline-1 outline-primary-600 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-200 disabled:outline-primary-200 shadow-xs",
  secondary:
    "bg-white text-gray-700 outline outline-gray-300 outline-1 -outline-offset-1 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 disabled:text-gray-300 disabled:hover:bg-white shadow-xs",
  "secondary color":
    "bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 outline outline-primary-200 outline-1 -outline-offset-1 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-50 shadow-xs",
  tertiary:
    "bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-white",
  "tertiary color":
    "bg-white text-primary-700 hover:text-primary-800 hover:bg-primary-50 disabled:text-gray-300 disabled:hover:bg-white",
  link: "bg-white text-gray-600 hover:text-gray-700 disabled:text-gray-300 !p-0",
  "link color":
    "text-primary-700 hover:text-primary-800 disabled:text-gray-300 !p-0",
} as Record<ButtonVariant, string>;

export const buttonDestructiveVariantClassNames = {
  // Default
  primary:
    "bg-error-600 disabled:bg-error-200 text-white hover:bg-error-700 focus:ring-4 focus:ring-error-100",
  secondary:
    "bg-white text-error-700 outline outline-error-300 outline-1 -outline-offset-1 hover:bg-error-50 focus:ring-4 focus:ring-error-100 disabled:text-error-300 disabled:hover:bg-white shadow-xs",
  "secondary color":
    "bg-error-50 hover:bg-error-100 text-error-700 hover:text-error-800 outline outline-primary-error outline-1 -outline-offset-1 focus:ring-4 focus:ring-error-100 disabled:bg-error-50 shadow-xs",
  tertiary:
    "bg-white text-error-600 hover:text-error-700 hover:bg-error-50 disabled:text-error-300 disabled:hover:bg-white",
  "tertiary color":
    "bg-white text-error-700 hover:text-error-800 hover:bg-error-50 disabled:text-error-300 disabled:hover:bg-white",
  link: "bg-white text-error-600 hover:text-error-700 disabled:text-error-300 !p-0",
  "link color":
    "text-error-700 hover:text-error-800 disabled:text-error-300 !p-0",
} as Record<ButtonVariant, string>;

Button.displayName = BUTTON_NAME;

export { Button };
export type {
  ButtonSize,
  ButtonVariant,
  ButtonTransitionSpeed,
  ButtonProps,
  ButtonRef,
};
