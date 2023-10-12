import { Badge } from "./Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Badges",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Gray: Story = {
  args: {
    children: "Label",
  },
};

export const Primary: Story = {
  args: {
    children: "Label",
    variant: "primary",
  },
};

export const Error: Story = {
  args: {
    children: "Label",
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    children: "Label",
    variant: "warning",
  },
};

export const Success: Story = {
  args: {
    children: "Label",
    variant: "success",
  },
};

export const GrayPill: Story = {
  args: {
    children: "Label",
    type: "pill color",
  },
};

export const GrayPillOultine: Story = {
  args: {
    children: "Label",
    type: "pill oultine",
  },
};

export const GrayModern: Story = {
  args: {
    children: "Label",
    type: "badge modern",
  },
};
