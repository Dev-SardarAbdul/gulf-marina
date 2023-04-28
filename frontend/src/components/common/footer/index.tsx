import { MainCol, MainContainer, MainRow } from "components/common";
import {
  CopyrightText,
  FooterImageDiv,
  FooterWrapper,
  IconContainer,
  IconHolder,
  TermsText,
  TextContainer,
  BtnContainer,
  JoinNow,
} from "./element";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterWrapper>
      <MainContainer>
        <MainRow>
          <MainCol lg={3}>
            <FooterImageDiv>
              <img className="img-fluid logo" src="" />
              <p className="brandText">dalle inu</p>
            </FooterImageDiv>
          </MainCol>
          <MainCol lg={6}>
            <BtnContainer>
              <JoinNow>Buy $Dalle</JoinNow>
            </BtnContainer>
            <TextContainer>
              <CopyrightText>
                Copyright © [{new Date().getFullYear()}]All rights reserved.
              </CopyrightText>
              <TermsText>Contact: info@dalleinu.ai</TermsText>
            </TextContainer>
          </MainCol>
          <MainCol lg={3}>
            <IconContainer>
              {/* <IconHolder>
                <FaDiscord className="footerIcon" />
              </IconHolder> */}

              <IconHolder>
                <a href="https://t.me/Dalleainu" target="_blank">
                  <FaTelegramPlane className="footerIcon" />
                </a>
              </IconHolder>

              <IconHolder>
                <a href=" https://twitter.com/Dalle_Inu" target="_blank">
                  <FaTwitter className="footerIcon" />
                </a>
              </IconHolder>
              <IconHolder>
                <a href="https://www.youtube.com/@dalleinu" target="_blank">
                  <FaYoutube className="footerIcon" />
                </a>
              </IconHolder>
            </IconContainer>
          </MainCol>
        </MainRow>
      </MainContainer>
    </FooterWrapper>
  );
}

export default Footer;
