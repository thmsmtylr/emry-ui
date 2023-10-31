import React from "react";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Button Group",
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  name: "Default",
  render: () => (
    <ButtonGroup type="single">
      <ButtonGroupItem value="any">Item 1</ButtonGroupItem>
      <ButtonGroupItem value="any">Item 2</ButtonGroupItem>
      <ButtonGroupItem value="any">Item 3</ButtonGroupItem>
    </ButtonGroup>
  ),
};
