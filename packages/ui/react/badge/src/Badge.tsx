import React, { forwardRef } from "react";
import { classNames } from "../../core/classnames";
import { useClassNames } from "../../core/hooks/useClassNames";

const BADGE_NAME = "Badge";

type BadgeRef = HTMLSpanElement | keyof JSX.IntrinsicElements;

type BadgeSize = "sm" | "md" | "lg";

type BadgeRadius = "sm" | "md" | "lg" | "full";

type BadgeType =
  | "badge color"
  | "badge modern"
  | "badge outline"
  | "pill color"
  | "pill oultine"
  | "pill modern";

type BadgeVariant =
  | "gray"
  | "primary"
  | "error"
  | "warning"
  | "success"
  | "gray blue"
  | "blue light"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange"
  | "blue gray";

interface BadgeProps {
  size?: BadgeSize;
  type?: BadgeType;
  variant?: BadgeVariant;
  addClassNames?: string;
  removeClassNames?: string;
  headless?: boolean;
  className?: string;
  children: any;
  as?: keyof JSX.IntrinsicElements; // @TODO: Refactor to use Radix `slot`
}

/**
 * Badges help highlight important information, such as notifications or new and unread messages.
 * They’re primarily used for communicating secondary or additional information to text.
 */
const Badge = forwardRef<BadgeRef, BadgeProps>((props, ref) => {
  const {
    size = "sm",
    type = "badge color",
    variant = "gray",
    as = "span",
    headless = false,
    addClassNames,
    removeClassNames,
    className = "",
    children,
    ...rest
  } = props;

  const badgeClassNames = [
    coreClassNames,
    badgeSizeClassNames[size],
    typeClassNames[type],
  ];

  if (type === "badge color") {
    badgeClassNames.push(
      `${colorVariantClassNames[variant]} ${badgeRadiusClassNames[size]}`
    );
  } else if (type === "badge outline") {
    badgeClassNames.push(
      `${outlineVariantClassNames[variant]} ${badgeRadiusClassNames[size]}`
    );
  } else if (type === "badge modern") {
    badgeClassNames.push(
      `${modernVariantClassNames[variant]} ${badgeRadiusClassNames[size]}`
    );
  } else if (type === "pill color") {
    badgeClassNames.push(
      `${colorVariantClassNames[variant]} ${badgeRadiusClassNames.full}`
    );
  } else if (type === "pill oultine") {
    badgeClassNames.push(
      `${outlineVariantClassNames[variant]} ${badgeRadiusClassNames.full}`
    );
  } else if (type === "pill modern") {
    badgeClassNames.push(
      `${modernVariantClassNames[variant]} ${outlineVariantClassNames[variant]} ${badgeRadiusClassNames.full}`
    );
  }

  const { classes, addClasses, removeClasses } = useClassNames(
    className,
    ...badgeClassNames
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
      className: classNames(classList),
      ...rest,
    },
    children
  );
});

const coreClassNames: string =
  "inline-flex items-center justify-center font-medium";

const typeClassNames = {
  "badge color": "ring-1 ring-inset",
  "badge outline": "ring-1.5 ring-inset",
  "badge modern": "ring-1 ring-inset",
  "pill color": "ring-1 ring-inset",
  "pill oultine": "ring-1.5 ring-inset",
  "pill modern": "ring-1 ring-inset",
} as Record<BadgeType, string>;

const colorVariantClassNames = {
  // Default
  gray: "bg-gray-50 ring-gray-200 text-gray-700",
  primary: "bg-primary-50 ring-primary-200 text-primary-700",
  error: "bg-error-50 ring-error-200 text-error-700",
  warning: "bg-warning-50 ring-warning-200 text-warning-700",
  success: "bg-success-50 ring-success-200 text-success-700",
  "gray blue": "bg-gray-blue-50 ring-gray-blue-200 text-gray-blue-700",
  "blue light": "bg-blue-light-50 ring-blue-light-200 text-blue-light-700",
  blue: "bg-blue-50 ring-blue-200 text-blue-700",
  indigo: "bg-indigo-50 ring-indigo-200 text-indigo-700",
  purple: "bg-purple-50 ring-purple-200 text-purple-700",
  pink: "bg-pink-50 ring-pink-200 text-pink-700",
  orange: "bg-orange-50 ring-orange-200 text-orange-700",
} as Record<BadgeVariant, string>;

const outlineVariantClassNames = {
  // Default
  gray: "ring-gray-600 text-gray-700",
  primary: "ring-primary-600 text-primary-700",
  error: "ring-error-600 text-error-700",
  warning: "ring-warning-600 text-warning-700",
  success: "ring-success-600 text-success-700",
  "gray blue": "ring-gray-blue-600 text-gray-blue-700",
  "blue light": "ring-blue-light-600 text-blue-light-700",
  blue: "ring-blue-600 text-blue-700",
  indigo: "ring-indigo-600 text-indigo-700",
  purple: "ring-purple-600 text-purple-700",
  pink: "ring-pink-600 text-pink-700",
  orange: "ring-orange-600 text-orange-700",
} as Record<BadgeVariant, string>;

const modernVariantClassNames = {
  gray: "bg-white ring-gray-300 text-gray-700 shadow-xs",
  primary: "bg-white ring-primary-300 text-primary-700 shadow-xs",
  error: "bg-white ring-error-300 text-error-700 shadow-xs",
  warning: "bg-white ring-warning-300 text-warning-700 shadow-xs",
  success: "bg-white ring-success-300 text-success-700 shadow-xs",
  "gray blue": "bg-white ring-gray-blue-300 text-gray-blue-700 shadow-xs",
  "blue light": "bg-white ring-blue-light-300 text-blue-light-700 shadow-xs",
  blue: "bg-white ring-blue-300 text-blue-700 shadow-xs",
  indigo: "bg-white ring-indigo-300 text-indigo-700 shadow-xs",
  purple: "bg-white ring-purple-300 text-purple-700 shadow-xs",
  pink: "bg-white ring-pink-300 text-pink-700 shadow-xs",
  orange: "bg-white ring-orange-300 text-orange-700 shadow-xs",
} as Record<BadgeVariant, string>;

const badgeSizeClassNames = {
  // Default
  sm: "px-1.5 py-0.5 gap-1 text-xs",
  md: "px-2 py-0.5 gap-1.5 text-sm",
  lg: "px-2.5 py-1 gap-1.5 text-sm",
} as Record<BadgeSize, string>;

const badgeRadiusClassNames = {
  // Default
  sm: "rounded-md",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as Record<BadgeRadius, string>;

Badge.displayName = BADGE_NAME;

export { Badge };
export type {
  BadgeRef,
  BadgeSize,
  BadgeType,
  BadgeVariant,
  BadgeRadius,
  BadgeProps,
};
