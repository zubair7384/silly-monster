import MainBanner from "@/containers/MainBanner";
import StoryBanner from "@/containers/StoryBanner";
import ReadmapBanner from "@/containers/ReadmapBanner";
import React from "react";

const MainPage = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <StoryBanner />
      <ReadmapBanner />
    </React.Fragment>
  );
};

export default MainPage;
