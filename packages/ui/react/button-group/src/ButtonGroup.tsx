import React, { forwardRef, ComponentPropsWithoutRef, ElementRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-toggle-group";
import { classNames } from "../../core/classnames";
import { useClassNames } from "../../core/hooks/useClassNames";

const BUTTON_GROUP_NAME = "Button Group";

type ButtonGroupProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> & {
  addClassNames?: string;
  removeClassNames?: string;
} & (
    | {
        headless: true;
        className: string;
      }
    | {
        headless?: false;
        className?: never;
      }
  );

// Button groups combine sets of buttons into toolbars or split buttons for more complex components.
// Button groups are also useful for acting as mini “tabs” in UI, for example, switching between date ranges.
const ButtonGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ButtonGroupProps
>((props, ref) => {
  const {
    addClassNames,
    removeClassNames,
    headless,
    className = "",
    ...rest
  } = props;

  const { classes, addClasses, removeClasses } = useClassNames(
    className,
    coreClassNames
  );

  let classList: string = !headless ? classes : className;

  if (addClassNames) {
    classList = addClasses(addClassNames);
  }

  if (removeClassNames) {
    classList = removeClasses(removeClassNames);
  }

  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={classNames(classList)}
      {...rest}
    />
  );
});

const coreClassNames: string =
  "inline-flex rounded-lg shadow-xs border border-solid border-gray-300 overflow-hidden divide-x divide-gray-300";

ButtonGroup.displayName = BUTTON_GROUP_NAME;

const BUTTON_GROUP_ITEM_NAME = "Button Group Item";

type ButtonGroupItemProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> & {
  addClassNames?: string;
  removeClassNames?: string;
} & (
    | {
        headless: true;
        className: string;
      }
    | {
        headless?: false;
        className?: never;
      }
  );

const ButtonGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ButtonGroupItemProps
>((props, ref) => {
  const {
    addClassNames,
    removeClassNames,
    headless,
    className = "",
    ...rest
  } = props;

  const { classes, addClasses, removeClasses } = useClassNames(
    className,
    coreItemClassNames
  );

  let classList: string = !headless ? classes : className;

  if (addClassNames) {
    classList = addClasses(addClassNames);
  }

  if (removeClassNames) {
    classList = removeClasses(removeClassNames);
  }

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={classNames(classList)}
      {...rest}
    />
  );
});

const coreItemClassNames: string =
  "flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50";

ButtonGroupItem.displayName = BUTTON_GROUP_ITEM_NAME;

export { ButtonGroup, ButtonGroupItem };
