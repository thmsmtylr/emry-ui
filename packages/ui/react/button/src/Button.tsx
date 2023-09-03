import React, { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { classNames } from "../../core/classnames";
import { useRemoveClasses } from "../../core/hooks";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

type ButtonVariant =
  | "primary"
  | "secondary gray"
  | "secondary color"
  | "tertiary gray"
  | "tertiary color"
  | "link gray"
  | "link color";

type ButtonTransitionSpeed = "fast" | "subtle" | "slow" | "none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: any;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variant?: ButtonVariant;
  addClassNames?: string;
  removeClassNames?: string;
  className?: string;
  transition?: ButtonTransitionSpeed;
  destructive?: boolean;
  dot?: boolean;
  iconOnly?: boolean;
  as?: keyof JSX.IntrinsicElements;
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
    iconOnly = false,
    as = "button",
    ...rest
  } = props;

  const removeClasses = useRemoveClasses();

  // NOTE: The order of this matters. E.g. `addClassNames` needs
  // to remain at the last index of our array to ensure that
  // added classes have the highest priority when it comes
  // to applying styles
  let classList = !className
    ? [
        coreClassNames,
        iconOnly
          ? iconOnlySizeClassNames[size ? size : "sm"]
          : sizeClassNames[size],
        !destructive
          ? variantClassNames[variant]
          : destructiveVariantClassNames[variant],
        transitionClassNames[transition],
        addClassNames ?? "",
      ]
    : [className];

  if (removeClassNames) {
    classList = removeClasses(classList, removeClassNames);
  }

  if (variant === "link color" || variant === "link gray") {
    classList = removeClasses(classList, "px-4 py-2.5");
  }

  return React.createElement(
    as,
    {
      ref,
      disabled,
      role: as !== "button" ? "button" : undefined,
      "aria-label": as !== "button" ? "button" : undefined,
      ...(as !== "button" ? {} : { type }),
      className: classNames(...classList),
      ...rest,
    },
    children
  );
});

const transitionClassNames = {
  fast: "transition-all duration-75",
  subtle: "transition-all",
  slow: "transition-all duration-200",
  none: "",
} as Record<ButtonTransitionSpeed, string>;

const iconOnlySizeClassNames = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
  xl: "p-3.5",
  "2xl": "p-4",
} as Record<ButtonSize, string>;

const sizeClassNames = {
  sm: "px-3.5 py-2 text-sm",
  // Default
  md: "px-4 py-2.5 text-sm",
  lg: "px-4.5 py-2.5 text-md",
  "2xl": "px-7 py-4 text-lg",
} as Record<ButtonSize, string>;

const coreClassNames: string =
  "inline-flex items-center justify-center flex-grow-0 gap-2 rounded-lg font-semibold outline outline-1";

const variantClassNames = {
  // Default
  primary:
    "bg-primary-600 outline-primary-600 hover:outline-primary-700 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-200 disabled:outline-primary-200 shadow-xs",
  "secondary gray":
    "bg-white text-gray-700 outline outline-gray-300 outline-1 -outline-offset-1 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 disabled:text-gray-300 disabled:hover:bg-white shadow-xs",
  "secondary color":
    "bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 outline outline-primary-200 outline-1 -outline-offset-1 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-50 shadow-xs",
  "tertiary gray":
    "bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-white",
  "tertiary color":
    "bg-white text-primary-700 hover:text-primary-800 hover:bg-primary-50 disabled:text-gray-300 disabled:hover:bg-white",
  "link gray":
    "bg-white text-gray-600 hover:text-gray-700 disabled:text-gray-300",
  "link color":
    "text-primary-700 hover:text-primary-800 disabled:text-gray-300",
} as Record<ButtonVariant, string>;

const destructiveVariantClassNames = {
  // Default
  primary:
    "bg-error-600 disabled:bg-error-200 text-white hover:bg-error-700 focus:ring-4 focus:ring-error-100",
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
