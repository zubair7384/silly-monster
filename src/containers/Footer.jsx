import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/Text";
import { content_width, primary_color } from "@/constants";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <Text className="footer-text">Silly Monster</Text>
        <div className="social-icons-wrapper">
          {[
            {
              image: "/footer-1.svg",
              src: "/",
            },
            {
              image: "/footer-2.svg",
              src: "/",
            },
            {
              image: "/footer-3.svg",
              src: "/",
            },
          ].map((item, index) => (
            <StyledImage
              key={index}
              src={item.image}
              alt="social-logo"
              width={52}
              height={52}
            />
          ))}
        </div>
        <div className="nav-links">
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
          ].map((item) => (
            <a key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-copy-text">
        © 2024 Silly Monster. All rights reserved &nbsp;&nbsp;|&nbsp;&nbsp;
        Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and
        Responsible Disclosure
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  align-items: center;
  flex-direction: column;
  .footer-wrapper {
    width: ${content_width};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding: 3rem;
    .footer-text {
      font-size: 52px;
    }
    .social-icons-wrapper {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }
    }
    .nav-links {
        display: flex;
        align-items: center;
        gap: 1.2rem;
      a {
        cursor: pointer;
        font-size: 20px;
        color: #fff;
        &:hover {
            color: ${primary_color}
        }
      }
    }
  }
  .footer-copy-text {
    color: #fff;
    font-size: 20px;
    padding: 3rem;
  }
  
`;

const StyledImage = styled(Image)`
  &:hover {
    // filter: invert(1);
    cursor: pointer;
  }
`;
