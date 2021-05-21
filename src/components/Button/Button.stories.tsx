import React from "react";
import Center from "../Center/Center";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
  decorators: [story => <Center>{story()}</Center>]
};

export const Primary = () => <ButtonComponent variant="primary">Primary Button</ButtonComponent>;
export const Secondary = () => (
  <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
);
export const Success = () => <ButtonComponent variant="success">Success Button</ButtonComponent>;
export const Danger = () => <ButtonComponent variant="danger">Danger Button</ButtonComponent>;
