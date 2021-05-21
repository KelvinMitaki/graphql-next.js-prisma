import React from "react";
import InputComponent from "./Input";

export default {
  title: "Input",
  component: InputComponent
};

export const Small = () => <InputComponent inpSize="small" />;
export const Medium = () => <InputComponent inpSize="medium" />;
export const Large = () => <InputComponent inpSize="large" />;
