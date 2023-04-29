import { Button, MainContainer } from "components/common";
import { BtnDiv, ContactUsHeader, ContactUsWrapper } from "./styles";

function ContactUs() {
  return (
    <ContactUsWrapper id="contact">
      <MainContainer>
        <ContactUsHeader>
          The top provider of contract <br /> logistics in the world.
        </ContactUsHeader>
        <BtnDiv>
          <Button readMore={true}> Contact Us</Button>
        </BtnDiv>
      </MainContainer>
    </ContactUsWrapper>
  );
}

export default ContactUs;
