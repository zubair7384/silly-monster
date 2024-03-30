import Button from "@/components/CustomButton";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import { content_width, primary_color } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StoryBanner = () => {
  return (
    <StyledStoryBanner>
      <div className="content-wrapper">
        <H2 type="dark">Silly Monster Story</H2>
        <Text type="dark">
          Silly Monster is an NFT drop of adorable monster characters created by
          BullLabs. This unique NFT drop on Opensea celebrates the power of
          imagination, and the joy of owning an NFT collection.
        </Text>
        <Text type="dark">
          The Silly Monster project is poised to grow into a global community of
          like-minded people who share a passion for creativity and fully
          embrace the possibilities of web3 technology.
        </Text>
        <Button className="story-btn" color={primary_color}>
          Get Yours Now
        </Button>
      </div>
      <div className="gif-wrapper">
        <Image
          className="story-img"
          src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/SM_Logo_Animated_Square_Only%20Monsters.gif"
          alt="silly-monster"
          width={736}
          height={736}
        />
      </div>
    </StyledStoryBanner>
  );
};

export default StoryBanner;

const StyledStoryBanner = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${content_width};
  margin: 0 auto;
  padding: 8rem 0;
  .content-wrapper {
    width: 46%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .story-btn {
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .story-img {
    border-radius: 50px;
  }
`;
