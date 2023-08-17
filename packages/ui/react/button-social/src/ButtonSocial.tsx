"use strict";
import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { classNames } from "../../core/classnames";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import GoogleIcon from "../../../images/icons/svg/google.svg";
import FacebookIcon from "../../../images/icons/svg/facebook.svg";
import AppleIcon from "../../../images/icons/svg/apple.svg";
import TwitterIcon from "../../../images/icons/svg/twitter.svg";
import FigmaIcon from "../../../images/icons/svg/figma.svg";
import DribbbleIcon from "../../../images/icons/svg/dribbble.svg";
import DribbbleColorIcon from "../../../images/icons/svg/dribbble-color.svg";

export type ButtonSocialVariant =
  | "google"
  | "facebook"
  | "apple"
  | "twitter"
  | "figma"
  | "dribbble";

export type ButtonSocialTransitionSpeed = "fast" | "subtle" | "slow" | "none";

export type ButtonSocialTheme = "brand" | "secondary gray";

export interface ButtonSocialProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  type?: "submit" | "reset" | "button";
  variant: ButtonSocialVariant;
  transition?: ButtonSocialTransitionSpeed;
  disabled?: boolean;
  iconLabel?: string;
  theme?: ButtonSocialTheme;
}

export type ButtonSocialRef = HTMLButtonElement;

/**
 * Social buttons communicate actions that users can take.
 */
export const ButtonSocial = forwardRef<ButtonSocialRef, ButtonSocialProps>(
  (props, ref) => {
    const {
      type = "button",
      disabled = false,
      children,
      variant,
      transition = "subtle",
      iconLabel,
      theme = "brand",
      ...rest
    } = props;

    const iconOnly: boolean = typeof children === "undefined";

    let classList = [
      coreClassNames,
      iconOnly ? iconOnlySizeClassNames : sizeClassNames,
      theme === "brand" ? variantClassNames[variant] : themeClassNames,
      transitionClassNames[transition],
    ];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classNames(...classList)}
        {...rest}
      >
        {iconLabel ? (
          <AccessibleIcon label={iconLabel}>
            {renderIcon[variant]}
          </AccessibleIcon>
        ) : (
          renderIcon[variant]
        )}
        {children}
      </button>
    );
  }
);

const renderIcon: any = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  apple: <AppleIcon />,
  twitter: <TwitterIcon />,
  figma: <FigmaIcon />,
  dribbble: <DribbbleIcon />,
  dribbbleColor: <DribbbleColorIcon />,
} as Record<ButtonSocialVariant, any>;

const sizeClassNames: string = "px-4 py-2.5";

const iconOnlySizeClassNames: string = "p-2.5";

const transitionClassNames = {
  fast: "transition-all duration-75",
  subtle: "transition-all",
  slow: "transition-all duration-200",
  none: "",
} as Record<ButtonSocialTransitionSpeed, string>;

const coreClassNames: string =
  "inline-flex items-center justify-center flex-grow-0 gap-3 rounded-lg font-semibold shadow-xs focus:ring-4 focus:ring-gray-100";

const variantClassNames = {
  google:
    "bg-white hover:bg-gray-50 text-gray-700 outline outline-1 outline-gray-300",
  facebook: "bg-social-facebook hover:bg-social-facebook-700 text-white",
  apple: "bg-black text-white",
  twitter: "bg-social-twitter-600 hover:bg-social-facebook-700 text-white",
  figma: "bg-black text-white",
  dribbble: "bg-social-dribbble hover:bg-social-dribbble-700 text-white",
} as Record<ButtonSocialVariant, string>;

const themeClassNames =
  "bg-white outline outline-1 outline-gray-300 text-gray-700";

ButtonSocial.displayName = "Button Social";
