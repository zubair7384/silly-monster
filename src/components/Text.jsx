import React from "react";
import { styled } from "styled-components";

const Text = (props) => {
  return (
    <StyledText {...props} type={props.type}>
      {props.children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p`
  color: ${(props) => (props.type === "dark" ? "#000" : "#fff")};
  font-size: 22px;
  line-height: 37px;
`;
