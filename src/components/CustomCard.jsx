import React from "react";
import { gray_color, primary_color } from "@/constants";
import styled from "styled-components";
import H2 from "./H2";
import Text from "./Text";

const CustomCard = (props) => {
  return (
    <StyledCustomCard>
      <div className="number-wrapper">{props.number}</div>
      <div className="card-wrapper">
        <H2 className="custom-title" type="dark">
          {props.title}
        </H2>
        <br />
        <br />
        <br />
        <Text className="custom-text" type="dark">
          {props.details}
        </Text>
      </div>
    </StyledCustomCard>
  );
};

export default CustomCard;

const StyledCustomCard = styled.div`
  width: 542px;
  height: 698px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  background: ${gray_color};
  border-radius: 50px;
  .number-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: ${primary_color};
    font-size: 40px;
    border-radius: 50%;
  }
  .card-wrapper {
    .custom-title {
      font-weight: 400;
      font-size: 72px;
    }
    .custom-text {
      line-height: 34px;
    }
  }
`;
