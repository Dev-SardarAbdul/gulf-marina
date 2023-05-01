import { Button, MainCol, MainContainer, MainRow } from "components/common";
import {
  BtnDiv,
  CardWrapper,
  ContactUsHeader,
  ContactUsWrapper,
  ImgHeading,
  ImgSubText,
  ImgTextWrapper,
  ImgWrapper,
  ContactInfoDiv,
  ContactInfoText,
} from "./styles";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Card from "react-bootstrap/Card";
import { contact } from "assets";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function ContactUs() {
  return (
    <ContactUsWrapper id="contact">
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <ContactUsHeader>
            The top provider of contract <br /> logistics in the world.
          </ContactUsHeader>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn">
          <CardWrapper>
            <Card>
              <MainRow>
                <MainCol sm={12} md={6}>
                  <ImgWrapper>
                    <img src={contact} className="img-fluid contactImg" />
                    <ImgTextWrapper>
                      <ImgHeading>
                        Help <span> Center </span>
                      </ImgHeading>
                      <ImgSubText>
                        Consult with our Customer care representative 24/7 .
                      </ImgSubText>
                    </ImgTextWrapper>
                  </ImgWrapper>
                </MainCol>
                <MainCol sm={12} md={6}>
                  <Card.Body>
                    <ContactInfoDiv>
                      <MainRow>
                        <MainCol>
                          <BsTelephone className="infoIcon" />
                          <ContactInfoText>+123 456 789 1011</ContactInfoText>
                        </MainCol>
                      </MainRow>
                      <MainRow>
                        <MainCol>
                          <AiOutlineMail className="infoIcon marginIcon" />
                          <ContactInfoText>
                            info@gulfmarina1.com
                          </ContactInfoText>
                        </MainCol>
                      </MainRow>
                      <MainRow>
                        <MainCol>
                          <IoLocationOutline className="infoIcon marginIcon " />
                          <ContactInfoText className="noBorder">
                            address123
                          </ContactInfoText>
                        </MainCol>
                      </MainRow>
                    </ContactInfoDiv>
                  </Card.Body>
                </MainCol>
              </MainRow>
            </Card>
          </CardWrapper>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <BtnDiv>
            <Button readMore={true}> Contact Us</Button>
          </BtnDiv>
        </AnimationOnScroll>
      </MainContainer>
    </ContactUsWrapper>
  );
}

export default ContactUs;
