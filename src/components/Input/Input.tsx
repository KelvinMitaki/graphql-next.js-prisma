import React from "react";
import styled, { css } from "styled-components";

interface Props {
  inpSize: "small" | "medium" | "large";
}

const Input = styled.input<Props>`
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

const InputComponent: React.FC<Props> = ({ inpSize, children }) => {
  return <Input inpSize={inpSize}>{children}</Input>;
};

export default InputComponent;
