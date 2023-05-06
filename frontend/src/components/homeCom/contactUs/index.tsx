import { useState } from "react";
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
  ContactText,
} from "./styles";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Card from "react-bootstrap/Card";
import { contact } from "assets";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function ContactUs() {
  // Define state for the phone number
  const [phoneNumber, setPhoneNumber] = useState("00966567532402");
  const [secondPhoneNumber, setSecondPhoneNumber] = useState("00966536968261");

  // Function to handle clicking on the phone number
  const handlePhoneNumberClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  const handleSecondPhoneNumberClick = () => {
    window.open(`https://wa.me/${secondPhoneNumber}`, "_blank");
  };

  return (
    <ContactUsWrapper id="contact">
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <ContactUsHeader>Help Center</ContactUsHeader>
          <ContactText>
            Consult with our Customer care representatives 24/7
          </ContactText>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn">
          <CardWrapper>
            <Card>
              <MainRow>
                <Card.Body>
                  <ContactInfoDiv>
                    <MainRow>
                      <MainCol>
                        <BsTelephone className="infoIcon" />
                        <ContactInfoText>
                          Call and WhatsApp:
                          <div className="numberWrapper">
                            <p
                              style={{ margin: 0, cursor: "pointer" }}
                              className="mt-2"
                              onClick={handlePhoneNumberClick}
                            >
                              <BsWhatsapp className="whatsappIcon" />
                              {phoneNumber},
                            </p>

                            <p
                              style={{ margin: 0, cursor: "pointer" }}
                              className="mt-2"
                              onClick={handleSecondPhoneNumberClick}
                            >
                              <BsWhatsapp className="whatsappIcon" />
                              {secondPhoneNumber}
                            </p>
                          </div>
                        </ContactInfoText>
                      </MainCol>
                    </MainRow>
                    <MainRow>
                      <MainCol>
                        <AiOutlineMail className="infoIcon marginIcon" />
                        <a href="mailto:info@gulfmarina1.com">
                          <ContactInfoText>
                            info@gulfmarina1.com
                          </ContactInfoText>
                        </a>
                      </MainCol>
                    </MainRow>
                    <MainRow>
                      <MainCol>
                        <IoLocationOutline className="infoIcon marginIcon " />
                        <ContactInfoText className="noBorder">
                          Office number 08 - Al-Mina Street, behind Al-Hajjaj
                          City - Al-Salah Commercial Center - Al-Hindawiya
                          District - Jeddah
                          <p style={{ margin: 0 }} className="mt-2">
                            جدة-حي الهنداوية-شارع المينا خلف مدينة
                            الحجاج-مركزالصلاح التجاري
                          </p>
                        </ContactInfoText>
                      </MainCol>
                    </MainRow>
                  </ContactInfoDiv>
                </Card.Body>
              </MainRow>
            </Card>
          </CardWrapper>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <BtnDiv>
            <a href="mailto:info@gulfmarina1.com">
              <Button readMore={true}>Contact Us</Button>
            </a>
          </BtnDiv>
        </AnimationOnScroll>
      </MainContainer>
    </ContactUsWrapper>
  );
}

export default ContactUs;
