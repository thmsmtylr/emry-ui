import React, { forwardRef } from "react";
import { classNames } from "../../core/classnames";

const BADGE_NAME = "Badge";

type BadgeRef = HTMLSpanElement | keyof JSX.IntrinsicElements;

type BadgeSize = "sm" | "md" | "lg";

type BadgeType = "default" | "pill";

type BadgeVariant =
  | "gray"
  | "primary"
  | "error"
  | "success"
  | "blue light"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange"
  | "blue gray"
  | "gray blue";

interface BadgeProps {
  size?: BadgeSize;
  type?: BadgeType;
  variant?: BadgeVariant;
  addClassNames?: string;
  removeClassNames?: string;
  className?: string;
  children: any;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Badges help highlight important information, such as notifications or new and unread messages.
 * They’re primarily used for communicating secondary or additional information to text.
 */
const Badge = forwardRef<BadgeRef, BadgeProps>((props, ref) => {
  const {
    size = "sm",
    type = "default",
    variant = "gray",
    children,
    as = "span",
    ...rest
  } = props;
  return React.createElement(
    as,
    {
      ref,
      className: classNames(
        coreClassNames,
        type === "default"
          ? defaultSizeClassNames[size]
          : pillSizeClassNames[size],
        variantClassNames[variant],
        typeClassNames[type]
      ),
      ...rest,
    },
    children
  );
});

const coreClassNames: string =
  "inline-flex items-center justify-center ring-1 ring-inset";

const variantClassNames = {
  // Default
  gray: "bg-gray-50 ring-gray-200 text-gray-700",
  primary: "bg-primary-50 ring-primary-200 text-primary-700",
  error: "bg-error-50 ring-error-200 text-error-700",
  success: "bg-success-50 ring-success-200 text-success-700",
} as Record<BadgeVariant, string>;

const defaultSizeClassNames = {
  sm: "px-1.5 py-0.5 text-xs font-medium",
  md: "px-2 py-0.5 text-sm font-medium",
  lg: "px-2.5 py-1 text-sm font-medium",
} as Record<BadgeSize, string>;

const pillSizeClassNames = {
  sm: "",
  md: "",
  lg: "",
} as Record<BadgeSize, string>;

const typeClassNames = {
  default: "rounded-md",
  pill: "",
} as Record<BadgeType, string>;

Badge.displayName = BADGE_NAME;

export { Badge };
export type { BadgeRef, BadgeSize, BadgeType, BadgeVariant, BadgeProps };
