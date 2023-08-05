import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { Dot } from "../../dot/src";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import Lock from "../../../images/icons/lock-01.svg";

export default {
  title: "Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
};

export const PrimaryWithIconTrailing = Template.bind({});
PrimaryWithIconTrailing.args = {
  children: (
    <>
      Button CTA <Lock className="h-5 w-5" />
    </>
  ),
  onClick: () => console.log("On click"),
  disabled: false,
};

export const PrimaryWithIconLeading = Template.bind({});
PrimaryWithIconLeading.args = {
  children: (
    <>
      <Lock className="h-5 w-5" /> Button CTA
    </>
  ),
  onClick: () => console.log("On click"),
  disabled: false,
};

export const PrimaryWithAccessibleIcon = Template.bind({});
PrimaryWithAccessibleIcon.args = {
  children: (
    <>
      Button CTA{" "}
      <AccessibleIcon label="Button CTA">
        <Lock className="h-5 w-5" />
      </AccessibleIcon>
    </>
  ),
  onClick: () => console.log("On click"),
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: true,
};

export const PrimaryDisabledWithIcon = Template.bind({});
PrimaryDisabledWithIcon.args = {
  children: (
    <>
      Button CTA <Lock className="h-5 w-5" />
    </>
  ),
  onClick: () => console.log("On click"),
  disabled: true,
};

export const PrimaryWithRestProps = Template.bind({});
PrimaryWithRestProps.args = {
  children: "Edit CTA",
  "data-id": "123",
  "aria-label": "Edit shipping address",
} as Partial<ButtonProps & { "data-id": string }>;

export const PrimaryWithDot = Template.bind({});
PrimaryWithDot.args = {
  children: (
    <>
      <Dot /> Button CTA
    </>
  ),
  onClick: () => console.log("On click"),
};

export const YoutubeHeadless = Template.bind({});
YoutubeHeadless.args = {
  children: "Button CTA",
  headless: true,
  className:
    "relative text-white overflow-hidden bg-black text-sm py-2.5 px-4 rounded-lg font-medium border border-solid border-transparent transition-[background-image] bg-gradient-yt bg-clip-padding-border bg-origin-border-border before:content-[''] before:z-[1] before:bg-transparent before:absolute before:inset-0 before:transition-colors hover:before:bg-[#ffffff1a]",
};

export const ShopifyHeadless = Template.bind({});
ShopifyHeadless.args = {
  children: "Button CTA",
  headless: true,
  className:
    "relative text-white border-none rounded-[0.5rem] min-h-[1.75rem] min-w-[1.75rem] px-3 py-1.5 text-xs font-medium bg-[#303030] before:bg-gradient-shopify before:rounded-[.5625rem] before:absolute before:inset-0 before:content-[''] before:mix-blend-luminosity before:shadow-shopify before:hover:shadow-shopify-hover before:hover:shadow-none",
};

export const PrimaryWithIconOnly = Template.bind({});
PrimaryWithIconOnly.args = {
  children: (
    <AccessibleIcon label="Lock account">
      <Lock className="h-5 w-5" />
    </AccessibleIcon>
  ),
  size: "sm",
  iconOnly: true,
};

export const SecondaryGray = Template.bind({});
SecondaryGray.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
  variant: "secondary gray",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
  variant: "secondary color",
};

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: true,
  variant: "tertiary gray",
};

export const TertiaryColor = Template.bind({});
TertiaryColor.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
  variant: "tertiary color",
};

export const LinkGray = Template.bind({});
LinkGray.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
  variant: "link gray",
};

export const PrimaryDestructive = Template.bind({});
PrimaryDestructive.args = {
  children: "Button CTA",
  onClick: () => console.log("On click"),
  disabled: false,
  destructive: true,
};
