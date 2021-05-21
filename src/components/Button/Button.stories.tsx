import { Story } from "@storybook/react";
import React from "react";
import ButtonComponent, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: ButtonComponent
};

const Template = args => <ButtonComponent {...args} />;
export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button"
};
export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button"
};
export const Success: Story<ButtonProps> = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success Button"
};
export const Danger: Story<ButtonProps> = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger Button"
};
