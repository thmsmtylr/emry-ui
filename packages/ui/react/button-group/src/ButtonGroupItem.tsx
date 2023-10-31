import React, { forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-toggle-group";
import { classNames } from "../../core/classnames";
import { useClassNames } from "../../core/hooks/useClassNames";

const BUTTON_GROUP_ITEM_NAME = "Button Group Item";

type ButtonGroupItemProps = React.ComponentPropsWithoutRef<
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
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
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
    <RadioGroupPrimitive.Item
      ref={ref}
      className={classNames(classList)}
      {...rest}
    />
  );
});

const coreClassNames: string =
  "flex items-center justify-center px-4 py-2.5 bg-white text-sm font-semibold text-gray-700";

ButtonGroupItem.displayName = BUTTON_GROUP_ITEM_NAME;

export { ButtonGroupItem };
