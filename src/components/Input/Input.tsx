import React from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  inpSize: "small" | "medium" | "large";
}

const Input = styled.input<InputProps>`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
  ${props => {
    const { inpSize } = props;
    let width;
    if (inpSize === "small") {
      width = "30%";
    }
    if (inpSize === "medium") {
      width = "50%";
    }
    if (inpSize === "large") {
      width = "70%";
    }
    return css({ width });
  }}
`;

const InputComponent: React.FC<InputProps> = ({ inpSize }) => {
  return <Input inpSize={inpSize} />;
};

export default InputComponent;
