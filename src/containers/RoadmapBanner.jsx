import React from "react";
import H2 from "@/components/H2";
import Text from "@/components/Text";
import { content_width } from "@/constants";
import CustomCard from "@/components/CustomCard";
import styled from "styled-components";

const RoadmapBanner = () => {
  return (
    <StyledRoadmapBanner id="roadmap-section">
      <div className="title-wrapper">
        <H2 type="dark">Roadmap</H2>
        <Text type="dark">
          The below roadmap guides Silly Monster project in becoming the most
          adorable NFT club. We are currently working on some amazing ideas.
        </Text>
      </div>
      <div className="cards-wrapper">
        {[
          {
            title: "Launch",
            details:
              "The Silly Monster has been successfully launched on Opensea, get your NFT now and be an early memeber of the Silly Monster club.",
          },
          {
            title: "Website",
            details:
              "We are currently working on an amazing redesign for the website that is in-line with out vision for the Silly Monster project.",
          },
          {
            title: "Marketing",
            details:
              "We plan to bring the Silly Monster to as many NFT enthusiasts as possible. To spread the word, we have created an elaborate marketing strategy that will boost our NFTs.",
          },
          {
            title: "Merch",
            details:
              "Plans are already in motion for the creation and easy availability of the Silly Monster merchandise drop. Selected characters based on the popularity will be translated into physical merch.",
          },
          {
            title: "Drops",
            details:
              "Unique and exclusive drops will be a consistent feature of our club with a keen focus on community giveaways.",
          },
          {
            title: "Events",
            details:
              "To celebrate our global community we plan to organize official Silly Monster events in key locations around the globe.",
          },
        ].map((item, index) => (
          <CustomCard
            title={item.title}
            number={index + 1}
            details={item.details}
          />
        ))}
      </div>
    </StyledRoadmapBanner>
  );
};

export default RoadmapBanner;

const StyledRoadmapBanner = styled.div`
  .title-wrapper {
    width: 41%;
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    text-align: center;
  }
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: ${content_width};
    margin: 0 auto;
    gap: 1.6rem;
    padding: 5rem 0;
  }
`;
