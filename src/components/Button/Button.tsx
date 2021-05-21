import React from "react";
import styled, { css } from "styled-components";

interface Props {
  variant: "primary" | "secondary" | "success" | "danger";
}
const Button = styled.button<Props>`
  border: none;
  border-radius: 5px;
  padding: 20px;
  :hover {
    cursor: pointer;
  }
  ${({ variant }) => {
    let backgroundColor;
    if (variant === "primary") {
      backgroundColor = "blue";
    }
    if (variant === "secondary") {
      backgroundColor = "grey";
    }
    if (variant === "success") {
      backgroundColor = "green";
    }
    if (variant === "danger") {
      backgroundColor = "red";
    }
    return css({ backgroundColor });
  }}
`;

const ButtonComponent: React.FC<Props> = ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default ButtonComponent;
