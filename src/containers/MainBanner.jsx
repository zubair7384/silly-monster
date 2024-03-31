import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import H1 from "@/components/H1";
import Image from "next/image";
import Button from "@/components/CustomButton";
import { primary_color } from "@/constants";

const MainBanner = () => {
  return (
    <React.Fragment>
      <Header />
      <StyledMainBanner>
        <Image
          className="banner-img"
          src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/tr:w-1920,h-1264/sm_banner.png"
          alt="silly-monster"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <StyledWrapper>
          <H1>Silly Monster</H1>
          <p className="main-para">
            Rare NFT collection of 1010 piece distinctively adorable 3D rendered
            creatures.
          </p>
          <Button className="banner-btn" color={primary_color}>
            Mint on OpenSea
          </Button>
        </StyledWrapper>
      </StyledMainBanner>
    </React.Fragment>
  );
};

export default MainBanner;

const StyledMainBanner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: center;
  .banner-img {
    width: 100%;
    position: absolute;
    height: auto;
    top: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
  text-align: center;
  margin-bottom: 5rem;
  .main-para {
    font-size: 40px;
    color: #fff;
  }
  .banner-btn {
    width: 30%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
