import React from "react";
import styled from "styled-components";
import Button from "../components/CustomButton";
import Image from "next/image";
import { primary_color, content_width } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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
            className="logo-icon"
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
        <div className="menu-wrapper" onClick={() => setIsOpen(!isOpen)}>
          <Image
            className="menu-icon"
            src="/menu-icon.svg"
            alt="monster-icon"
            width={50}
            height={50}
          />
        </div>
      </div>
      {isOpen && (
        <StyledMobileMenuWrapper>
          <div className="mobile-navbar">
            <div className="mob-nav-links">
              {[
                {
                  name: "Home",
                  id: "home-section",
                },
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
                {
                  name: "Faqs",
                  id: "faqs-section",
                },
              ].map((item) => (
                <a
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    if (item.name === "Home") {
                      setIsOpen(!isOpen);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              {isOpen && (
                <Image
                  className="close-icon"
                  src="/close-icon.svg"
                  alt="monster-icon"
                  width={50}
                  height={50}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
              )}
            </div>

            <div className="mob-nav-buttons">
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
        </StyledMobileMenuWrapper>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
    @media screen and (max-width: 1600px) {
      padding: 0 20px;
  }
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
      img {
    @media screen and (max-width: 1600px) {
      width: 85px;
      height: 85px;
        }
      }
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
      @media screen and (max-width: 1000px) {
        display: none;
        }
    }
    .nav-buttons {
      display: flex;
      gap: 1.5rem;
      @media screen and (max-width: 1000px) {
      display: none;
      }
    }
  }
  .menu-wrapper {
    display: none;
    // .close-icon {
    //   position: abosolute;

    // }
    @media screen and (max-width: 1000px) {
        display: flex;
        z-index: 2;
        padding: 0;
  }
`;

const StyledMobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: #000;

  .mobile-navbar {
    .mob-nav-links {
      display: flex;
      flex-direction: column;
      align-items: self-start;
      height: 100vh;
      gap: 3rem;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      margin: 0 auto;
      width: 36%;
      margin-top: 32%;
  
      a {
        border-bottom: 6px solid ${primary_color};
      }
      .close-icon{
        position: absolute;
        top: 3%;
        right: 6%;
      }
    }
  }
  .mob-nav-buttons {
    position: absolute;
    bottom: 15%;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;
}

  }
`;
