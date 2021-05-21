import React from "react";
import styled, { css, StyledComponent } from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const Button: StyledComponent<"button", any, {}, never> = styled.button<Props>`
  ${({ variant }) => {
    let backgroundColor;
    if (variant === "primary") {
      backgroundColor = "blue";
    }
    if (variant === "secondary") {
      backgroundColor = "white";
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

interface Props {
  variant: "primary" | "secondary" | "success" | "danger";
}

const ButtonComponent: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
};

export default ButtonComponent;
