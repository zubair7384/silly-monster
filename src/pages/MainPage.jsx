import MainBanner from "@/containers/MainBanner";
import StoryBanner from "@/containers/StoryBanner";
import ReadmapBanner from "@/containers/ReadmapBanner";
import RarityBanner from "@/containers/RarityBanner";
import Faqs from "@/containers/Faqs";
import GetNft from "@/containers/GetNft";
import React from "react";

const MainPage = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <StoryBanner />
      <ReadmapBanner />
      <RarityBanner />
      <Faqs />
      <GetNft />
    </React.Fragment>
  );
};

export default MainPage;
