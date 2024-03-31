import React from "react";
import styled from "styled-components";
import Button from "../components/CustomButton";
import Image from "next/image";
import { primary_color, content_width } from "../constants";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHeader id="home-section">
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <Image
            className="social-icon"
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
              id: "about-section",
            },
            {
              name: "Roadmap",
              id: "roadmap-section",
            },
            {
              name: "Rarity",
              id: "rarity-section",
            },
          ].map((item) => (
            <a key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="nav-buttons">
          <Button type="dark">
            <Image
              src="/discord.svg"
              alt="discord-icon"
              width={20}
              height={20}
            />
            DISCORD
          </Button>
          <Button color={primary_color}>View on OpenSea</Button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  .nav-wrapper {
    position: relative;
    z-index: 1;
    width: ${content_width};
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    .logo-wrapper { 
      color: #fff;
    };
  };
  
    .nav-links {
      display: flex;
      gap: 3rem;
      color: #fff;
      a {
        cursor: pointer;
        font-size: 20px;
        &:hover {
          color: ${primary_color};
        }
      }
    }
    .nav-buttons {
      display: flex;
      gap: 1.5rem;
    }
  }
`;
