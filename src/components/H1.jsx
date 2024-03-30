import React from "react";
import styled from "styled-components";

const H1 = (props) => {
  return <StyledH1 type={props.type}>{props.children}</StyledH1>;
};

export default H1;

const StyledH1 = styled.h1`
  font-size: 136px;
  font-weight: bold;
  color: ${(props) => (props.type === "dark" ? "#000" : "#fff")};
`;
