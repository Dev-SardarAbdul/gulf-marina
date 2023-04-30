import React from "react";
import {
  FooterWrapper,
  FooterText,
  FooterCompanyHeading,
  FooterOl,
  FooterBorderBottom,
  FooterCopyWrite,
  FooterIconWrapper,
} from "./element";
import { MainCol, MainContainer, MainRow } from "components/common";
import { navLogo, footerArrow } from "assets";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const FooterSection = () => {
  return (
    <FooterWrapper>
      <MainContainer>
        <img src={navLogo} className="footerLogo" />
        <MainRow>
          <MainCol lg={6}>
            <FooterText>
              Globalink Logistics offers customized logistics solutions that
              simplify your business operations and fuel expansion. We ensure
              prompt delivery of your shipments, making us your ideal logistics
              partner.
            </FooterText>
          </MainCol>
          <MainCol lg={3}>
            <FooterCompanyHeading>Company</FooterCompanyHeading>
            <FooterOl>
              <a href="#home">Home</a>
            </FooterOl>
            <FooterOl>
              {" "}
              <a href="#about">About Us</a>{" "}
            </FooterOl>
            <FooterOl>
              {" "}
              <a href="#services">Services</a>
            </FooterOl>
            <FooterOl>
              {" "}
              <a href="#contact">Contact Us</a>
            </FooterOl>
          </MainCol>
          <MainCol lg={3}>
            <FooterIconWrapper>
              <a href="https://facebook.com/">
                <FaFacebookF className="marginIcon" />
              </a>
              <a href="https://instagram.com/">
                {" "}
                <AiFillInstagram className="marginIcon" />
              </a>
              <a href="https://twitter.com/">
                <AiOutlineTwitter className="marginIcon" />
              </a>
              <br />
            </FooterIconWrapper>
            <img
              src={footerArrow}
              onClick={scrollToTop}
              className="footerImg"
            />
          </MainCol>
        </MainRow>
        <FooterBorderBottom></FooterBorderBottom>
      </MainContainer>
      <FooterCopyWrite>
        Copyright © {currentYear} All rights reserved
      </FooterCopyWrite>
    </FooterWrapper>
  );
};

export default FooterSection;
