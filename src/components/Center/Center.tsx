import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const Center: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Center;
