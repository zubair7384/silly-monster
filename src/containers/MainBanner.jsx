import React from "react";
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
          width={1920}
          height={1264}
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
  height: 120vh;
  background-color: #000;
  display: flex;
  align-items: end;
  justify-content: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  .banner-img {
    width: 100%;
    position: absolute;
    height: auto;
    top:0;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    }
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
