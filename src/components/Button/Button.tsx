import React from "react";
import styled, { css } from "styled-components";
import { color, space, typography, layout } from "styled-system";

export interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "danger";
  children: React.ReactNode;
}
const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  padding: 20px;
  :hover {
    cursor: pointer;
  }
  ${color}/* ${({ variant, ...props }) => {
    // @ts-ignore
    console.log(props.bg);
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
  }} */
`;

const ButtonComponent: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
