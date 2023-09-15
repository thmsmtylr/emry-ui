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

export const Success: Story = {
  args: {
    children: "Label",
    variant: "success",
  },
};
