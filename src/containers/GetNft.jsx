import Button from "@/components/CustomButton";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import { content_width, primary_color, warning_color } from "@/constants";
import React from "react";
import styled, { keyframes } from "styled-components";
import Marquee from "react-fast-marquee";
import H1 from "@/components/H1";
import Image from "next/image";

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
        <StyledImage
          className="story-img"
          src="/footer-logo.svg"
          alt="silly-monster"
          width={287}
          height={287}
        />
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
  .marquee-container {
    position: relative;
    margin-top: 2rem;
    .nft-text {
      font-size: 300px;
      color: ${primary_color};
    }
    .join-text {
      margin-top: -5rem;
    }
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: 42%;
  z-index: 2;
  top: 32%;
  animation: ${rotate360} 10s linear infinite; /* Adjust the duration (10s) and timing function as needed */
`;
