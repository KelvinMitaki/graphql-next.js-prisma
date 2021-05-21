import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent
};

export const Primary = () => <ButtonComponent variant="primary">Primary Button</ButtonComponent>;
export const Secondary = () => (
  <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
);
export const Success = () => <ButtonComponent variant="success">Success Button</ButtonComponent>;
export const Danger = () => <ButtonComponent variant="danger">Danger Button</ButtonComponent>;
