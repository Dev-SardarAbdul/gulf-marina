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
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

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
              Gulf Marina offers customized logistics solutions that simplify
              your business operations and fuel expansion. We ensure prompt
              delivery of your shipments, making us your ideal logistics
              partner. We offer customized logistics solutions that are tailored
              to meet your specific needs.
            </FooterText>
          </MainCol>
          <MainCol lg={3}>
            <FooterCompanyHeading>Company</FooterCompanyHeading>
            <FooterOl>
              <div className="olFlex">
                <a href="#home">
                  <BsDot className="footerIcon" />
                  Home
                </a>
              </div>

              <div className="olFlex">
                <a href="#about">
                  <BsDot className="footerIcon" />
                  About Us
                </a>
              </div>

              <div className="olFlex">
                <a href="#services">
                  <BsDot className="footerIcon" />
                  Services
                </a>
              </div>

              <div className="olFlex">
                <a href="#whyUs">
                  <BsDot className="footerIcon" />
                  Why Choose Us?
                </a>
              </div>
            </FooterOl>
          </MainCol>
          <MainCol lg={3}>
            <FooterIconWrapper>
              <a
                href="https://www.facebook.com/profile.php?id=100090710214826&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookF className="marginIcon" />
              </a>
              <a href="https://www.instagram.com/gulfmarina_/" target="_blank">
                {" "}
                <AiFillInstagram className="marginIcon" />
              </a>
              <a
                href="https://www.linkedin.com/in/marina-gulf-shipping-llc-jeddah-29a7ab234"
                target="_blank"
              >
                <FaLinkedinIn className="marginIcon" />
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
        © {currentYear} by Gulf Marina. All rights reserved!
      </FooterCopyWrite>
    </FooterWrapper>
  );
};

export default FooterSection;
