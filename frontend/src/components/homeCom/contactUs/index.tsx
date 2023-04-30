import { Button, MainContainer } from "components/common";
import { BtnDiv, ContactUsHeader, ContactUsWrapper } from "./styles";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
          <BtnDiv>
            <Button readMore={true}> Contact Us</Button>
          </BtnDiv>
        </AnimationOnScroll>
      </MainContainer>
    </ContactUsWrapper>
  );
}

export default ContactUs;
