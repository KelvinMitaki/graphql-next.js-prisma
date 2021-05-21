import { Story } from "@storybook/react";
import React from "react";
import InputComponent, { InputProps } from "./Input";

export default {
  title: "Input",
  component: InputComponent
};

const Template = args => <InputComponent {...args} />;

export const Small: Story<InputProps> = Template.bind({});
Small.args = {
  inpSize: "small"
};
export const Medium: Story<InputProps> = Template.bind({});
Medium.args = {
  inpSize: "medium"
};
export const Large: Story<InputProps> = Template.bind({});
Large.args = {
  inpSize: "large"
};
