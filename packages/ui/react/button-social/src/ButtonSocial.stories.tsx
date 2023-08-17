import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSocial } from "./ButtonSocial";

export default {
  title: "Social Buttons",
  component: ButtonSocial,
} as ComponentMeta<typeof ButtonSocial>;

const Template: ComponentStory<typeof ButtonSocial> = (args) => (
  <ButtonSocial {...args} />
);

const DEFAULT_LABEL: string = "Sign in with";

export const Google = Template.bind({});
Google.args = { variant: "google", children: `${DEFAULT_LABEL} Google` };

export const GoogleWithIconOnly = Template.bind({});
GoogleWithIconOnly.args = {
  variant: "google",
  iconLabel: `${DEFAULT_LABEL} Google`,
};

export const Facebook = Template.bind({});
Facebook.args = { variant: "facebook", children: `${DEFAULT_LABEL} Facebook` };

export const FacebookWithIconOnly = Template.bind({});
FacebookWithIconOnly.args = {
  variant: "facebook",
  iconLabel: `${DEFAULT_LABEL} Facebook`,
};

export const Apple = Template.bind({});
Apple.args = { variant: "apple", children: `${DEFAULT_LABEL} Apple` };

export const AppleWithIconOnly = Template.bind({});
AppleWithIconOnly.args = {
  variant: "apple",
  iconLabel: `${DEFAULT_LABEL} Apple`,
};

export const Twitter = Template.bind({});
Twitter.args = { variant: "twitter", children: `${DEFAULT_LABEL} Twitter` };

export const TwitterWithIconOnly = Template.bind({});
TwitterWithIconOnly.args = {
  variant: "twitter",
  iconLabel: `${DEFAULT_LABEL} Twitter`,
};

export const Figma = Template.bind({});
Figma.args = { variant: "figma", children: `${DEFAULT_LABEL} Figma` };

export const FigmaWithIconOnly = Template.bind({});
FigmaWithIconOnly.args = {
  variant: "figma",
  iconLabel: `${DEFAULT_LABEL} Figma`,
};

export const Dribbble = Template.bind({});
Dribbble.args = { variant: "dribbble", children: `${DEFAULT_LABEL} Dribbble` };
