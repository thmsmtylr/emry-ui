import React, {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { classNames } from "../../core/classnames";
import { useClassNames } from "../../core/hooks/useClassNames";

const calculateClassList = (
  className: string,
  coreClassNames: string,
  headless: boolean,
  addClassNames?: string,
  removeClassNames?: string
): string => {
  const { classes, addClasses, removeClasses } = useClassNames(
    className,
    coreClassNames // join the array of coreClassNames into a string
  );

  let classList: string = !headless ? classes : className;

  if (addClassNames) {
    classList = addClasses(addClassNames);
  }

  if (removeClassNames) {
    classList = removeClasses(removeClassNames);
  }

  return classList;
};

const DropdownMenu = (
  props: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>
) => {
  return <DropdownMenuPrimitive.Root {...props} />;
};

const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>((props, ref) => {
  return <DropdownMenuPrimitive.Trigger ref={ref} {...props} />;
});

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={contentCoreClassNames}
      {...props}
    />
  );
});

const contentCoreClassNames: string =
  "flex flex-col bg-white border border-solid border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200";

const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={itemCoreClassNames}
      {...props}
    />
  );
});

const itemCoreClassNames: string =
  "flex items-center mx-1.5 my-0.5 px-2.5 py-[9px] gap-2 text-sm font-medium text-gray-700 outline-none min-w-[240px] bg-white hover:bg-gray-50 rounded-md cursor-pointer";

const DropdownMenuItemHeader = forwardRef<any, any>((props, ref) => {
  return <div ref={ref} className={itemHeaderCoreClassNames} {...props} />;
});

const itemHeaderCoreClassNames: string =
  "flex items-center text-sm font-semibold text-gray-700";

const DropdownMenuItemShortcut = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  return (
    <span
      ref={ref}
      className="inline-flex items-center ml-auto text-xs text-gray-500 font-normal"
      {...props}
    />
  );
});

const DropdownMenuGroup = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Group>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.Group
      ref={ref}
      className={groupCoreClassNames}
      {...props}
    />
  );
});

const groupCoreClassNames: string = "flex flex-col py-1";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemShortcut,
  DropdownMenuItemHeader,
  DropdownMenuGroup,
};
