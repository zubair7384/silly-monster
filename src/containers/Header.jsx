import React from "react";
import styled from "styled-components";
import Button from "../components/CustomButton";
import Image from "next/image";
import { primary_color, content_width } from "../constants";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-wrapper">
        <Image
          src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/SM_Logo_Animated_Transparent.gif"
          alt="monster-icon"
          width={137}
          height={137}
        />
      </div>
      <div className="nav-links">
        {[
          {
            name: "About",
            id: 1,
          },
          {
            name: "Roadmap",
            id: 2,
          },
          {
            name: "Rarity",
            id: 3,
          },
        ].map((item) => (
          <a key={item.id}>{item.name}</a>
        ))}
      </div>
      <div className="nav-buttons">
        <Button type="dark">
          <Image src="/discord.svg" alt="discord-icon" width={20} height={20} />
          DISCORD
        </Button>
        <Button color={primary_color}>View on OpenSea</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${content_width};
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: transparent;
  .logo-wrapper {
    color: #fff;
  }
  .nav-links {
    display: flex;
    gap: 3rem;
    color: #fff;
    a {
      cursor: pointer;
      font-size: 20px;
    }
  }
  .nav-buttons {
    display: flex;
    gap: 1.5rem;
  }
`;
