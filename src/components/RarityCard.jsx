import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/Text";

function RarityCard(props) {
  return (
    <StyledRarituyCard>
      <Image
        className="card-img"
        src={props.src}
        alt="logo-1"
        width={67}
        height={70}
      />
      <Text>{props.title}</Text>
    </StyledRarituyCard>
  );
}

export default RarityCard;

const StyledRarituyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 388px;
  height: 172px;
  background: #1f2123;
  border-radius: 100px;
`;
