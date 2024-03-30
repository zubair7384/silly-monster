import React from "react";
import Header from "./Header";
import styled from "styled-components";
import H1 from "@/components/H1";
import Button from "@/components/CustomButton";
import { primary_color } from "@/constants";

const MainBanner = () => {
  return (
    <React.Fragment>
      <Header />
      <StyledMainBanner>
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
  background-image: url("https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/tr:w-1920,h-1264/sm_banner.png");
  // background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: -14rem;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  margin-bottom: 8rem;
  text-align: center;
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
