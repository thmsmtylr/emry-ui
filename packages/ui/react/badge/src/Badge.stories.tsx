import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Badges",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Gray = Template.bind({});
Gray.args = { children: "Label" };
