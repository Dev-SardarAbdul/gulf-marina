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
            <FooterOl>About Us</FooterOl>
            <FooterOl>Company </FooterOl>
            <FooterOl>Press & Blog</FooterOl>
            <FooterOl>Privacy Policy</FooterOl>
          </MainCol>
          <MainCol lg={3}>
            <FooterIconWrapper>
              <FaFacebookF className="marginIcon" />
              <AiFillInstagram className="marginIcon" />
              <AiOutlineTwitter className="marginIcon" />
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
