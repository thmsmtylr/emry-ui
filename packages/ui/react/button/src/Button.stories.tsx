import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../src";
import { Dot } from "../../dot/src";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import LockIcon from "../../../images/icons/svg/lock.svg";

const meta: Meta<typeof Button> = {
  title: "Buttons",
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "30vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button CTA",
  },
};

export const PrimaryWithIconTrailing: Story = {
  args: {
    children: (
      <>
        Button CTA <LockIcon className="h-5 w-5" />
      </>
    ),
    onClick: () => console.log("On click"),
    disabled: false,
  },
};

export const PrimaryWithIconLeading: Story = {
  args: {
    children: (
      <>
        <LockIcon className="h-5 w-5" />
        Button CTA
      </>
    ),
    onClick: () => console.log("On click"),
    disabled: false,
  },
};

export const PrimaryWithAccessibleIcon: Story = {
  args: {
    children: (
      <>
        Button CTA
        <AccessibleIcon label="Button CTA">
          <LockIcon className="h-5 w-5" />
        </AccessibleIcon>
      </>
    ),
    onClick: () => console.log("On click"),
    disabled: false,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Button CTA",
    onClick: () => console.log("On click"),
    disabled: true,
  },
};

export const PrimaryDisabledWithIcon: Story = {
  args: {
    children: (
      <>
        Button CTA <LockIcon className="h-5 w-5" />
      </>
    ),
    onClick: () => console.log("On click"),
    disabled: true,
  },
};

export const PrimaryWithRestProps: Story = {
  args: {
    children: "Edit CTA",
    "data-id": "123",
    "aria-label": "Edit shipping address",
  },
} as Partial<ButtonProps & { "data-id": string; "aria-label": string }>;

export const PrimaryWithDot: Story = {
  args: {
    children: (
      <>
        <Dot /> Button CTA
      </>
    ),
    onClick: () => console.log("On click"),
  },
};

export const YoutubeHeadless: Story = {
  args: {
    headless: true,
    children: "Button CTA",
    className:
      "relative text-white overflow-hidden bg-black text-sm py-2.5 px-4 rounded-lg font-medium border border-solid border-transparent transition-[background-image] bg-gradient-yt bg-clip-padding-border bg-origin-border-border before:content-[''] before:z-[1] before:bg-transparent before:absolute before:inset-0 before:transition-colors hover:before:bg-[#ffffff1a]",
  },
};

export const ShopifyHeadless: Story = {
  args: {
    headless: true,
    children: "Button CTA",
    className:
      "relative text-white border-none rounded-[0.5rem] min-h-[1.75rem] min-w-[1.75rem] px-3 py-1.5 text-xs font-medium bg-[#303030] before:bg-gradient-shopify before:rounded-[.5625rem] before:absolute before:inset-0 before:content-[''] before:mix-blend-luminosity before:shadow-shopify before:hover:shadow-shopify-hover before:hover:shadow-none",
  },
};

export const PrimaryWithIconOnly: Story = {
  args: {
    icon: true,
    children: (
      <AccessibleIcon label="Lock account">
        <LockIcon className="h-5 w-5" />
      </AccessibleIcon>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: "Button CTA",
    variant: "secondary",
  },
};

export const SecondaryColor: Story = {
  args: {
    children: "Button CTA",
    onClick: () => console.log("On click"),
    disabled: false,
    variant: "secondary color",
  },
};

export const TertiaryGray: Story = {
  args: {
    children: "Button CTA",
    onClick: () => console.log("On click"),
    disabled: true,
    variant: "tertiary",
  },
};

export const TertiaryColor: Story = {
  args: {
    children: "Button CTA",
    onClick: () => console.log("On click"),
    disabled: false,
    variant: "tertiary color",
  },
};

export const LinkGray: Story = {
  args: {
    children: "Button CTA",
    onClick: () => console.log("On click"),
    disabled: false,
    variant: "link",
  },
};

export const PrimaryDestructive = {
  args: {
    children: "Button CTA",
    disabled: false,
    destructive: true,
  },
};

export const SecondaryDestructive = {
  args: {
    children: "Button CTA",
    variant: "secondary",
    destructive: true,
  },
};

export const SecondaryColorDestructive = {
  args: {
    children: "Button CTA",
    variant: "secondary color",
    destructive: true,
  },
};

export const TertiaryColorDestructive: Story = {
  args: {
    children: "Button CTA",
    destructive: true,
    variant: "tertiary color",
  },
};

export const PrimaryWithAs = {
  args: {
    children: "Button CTA",
    as: "div",
  },
};
