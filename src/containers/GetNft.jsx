import Button from "@/components/CustomButton";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import { content_width, primary_color, warning_color } from "@/constants";
import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import H1 from "@/components/H1";

const GetNft = () => {
  return (
    <StyledNft>
      <div className="nft-wrapper">
        <H2>Get Your Silly Monster Now</H2>
        <Text>
          Be a part of the exciting Silly Monster club, own your Silly Monster
          now. Get it on OpenSea.
        </Text>
        <Button className="nft-button" color={warning_color}>
          Get Silly Now
        </Button>
      </div>
      <div className="marquee-container">
        <Marquee>
          <H1 className="nft-text">NFT world of the Silly Monster.</H1>
        </Marquee>
        <Marquee direction="right">
          <H1 className="nft-text join-text">Join the fascinating NFT</H1>
        </Marquee>
      </div>
    </StyledNft>
  );
};

export default GetNft;

const StyledNft = styled.div`
  background: #000;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 6rem 0;
  .nft-wrapper {
    width: ${content_width};
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    .nft-button {
      width: 16%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .nft-text {
    font-size: 300px;
    color: ${primary_color};
  }
  .join-text {
    margin-top: -5rem;
  }
`;
