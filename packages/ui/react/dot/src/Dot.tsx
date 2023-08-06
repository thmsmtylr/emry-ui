import React from "react";
// import { classNames } from "react/core/classnames/src/classNames";
// import { useRemoveClasses } from "react/core/hooks";

export type DotSize = "sm" | "md" | "lg";

export type DotVariant = "white" | "success";

export interface DotProps {
  size?: DotSize;
  outline?: boolean;
  headless?: boolean;
  variant?: string;
  className?: string;
  addClassNames?: string;
  removeClassNames?: string;
}

export const Dot = () => <></>;

// export const Dot = (props: DotProps) => {
//   const {
//     size = "md",
//     // outline = true,
//     headless = false,
//     variant = "white",
//     className = "",
//     addClassNames,
//     removeClassNames,
//   } = props;

//   const removeClasses = useRemoveClasses();

//   let classList = !headless
//     ? [
//         coreClassNames,
//         sizeClassNames[size],
//         variantClassNames[variant],
//         addClassNames ?? "",
//       ]
//     : [className];

//   if (removeClassNames) {
//     classList = removeClasses(classList, removeClassNames);
//   }

//   return <span className={classNames(...classList)} />;
// };

const coreClassNames: string = "rounded-full";

const variantClassNames = {
  success: "bg-success-500",
  white: "bg-white",
} as Record<any, string>;

const sizeClassNames = {
  sm: "w-1.5 h-1.5 oultine-2 outline-transparnet",
  md: "w-2 h-2 outline-2 outline-transparent",
  lg: "w-2.5 h-2.5 outline-2 outline-transparent",
} as Record<DotSize, string>;
