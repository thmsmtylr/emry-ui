import React from "react";
import { forwardRef } from "react";
import { classNames } from "../../core/classnames";
import { useRemoveClasses } from "../../core/hooks";
// import { classNames } from "react/core/classnames/src/classNames";
// import { classNames } from "react/core/classnames";
// import { useRemoveClasses } from "react/core/hooks/index";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonVariant =
  | "primary"
  | "secondary gray"
  | "secondary color"
  | "tertiary gray"
  | "tertiary color"
  | "link gray"
  | "link color";

export type ButtonTransitionSpeed = "fast" | "subtle" | "slow" | "none";

export interface ButtonProps {
  size?: ButtonSize;
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variant?: ButtonVariant;
  addClassNames?: string;
  removeClassNames?: string;
  className?: string;
  transition?: ButtonTransitionSpeed;
  headless?: boolean;
  destructive?: boolean;
  dot?: boolean;
  iconOnly?: boolean;
}

export type ButtonRef = HTMLButtonElement;

/**
 * Buttons communicate actions that users can take.
 */
export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    children,
    size = "md",
    disabled = false,
    headless = false,
    destructive = false,
    onClick,
    type = "button",
    variant = "primary",
    addClassNames,
    removeClassNames,
    className = "",
    transition = "subtle",
    dot = false,
    iconOnly = false,
    ...rest
  } = props;

  const removeClasses = useRemoveClasses();

  // NOTE: The order of this matters. E.g. `addClassNames` needs
  // to remain at the last index of our array to ensure that
  // added classes have the highest priority when it comes
  // to applying styles
  let classList = !headless
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

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(...classList)}
    >
      {children}
    </button>
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
  "gap-2 rounded-lg font-medium flex items-center justify-center";

const variantClassNames = {
  // Default
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-200 shadow-xs",
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

Button.displayName = "Button";
