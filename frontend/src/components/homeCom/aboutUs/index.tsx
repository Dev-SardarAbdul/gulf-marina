import { Button, MainContainer } from "components/common";
import {
  AboutUsHeader,
  AboutUsSubText,
  AboutUsWrapper,
  BtnDiv,
} from "./styles";

function AboutUS() {
  return (
    <AboutUsWrapper>
      <MainContainer>
        <AboutUsHeader>About Us</AboutUsHeader>
        <AboutUsSubText>
          At Globalink Logistics, we are passionate about logistics. Our team of
          experienced professionals is dedicated to providing personalized
          solutions that meet the unique needs of our clients. We pride
          ourselves on our commitment to quality, efficiency, and customer
          satisfaction.
        </AboutUsSubText>
        <BtnDiv>
          <Button readMore={true}>More About Us</Button>
        </BtnDiv>
      </MainContainer>
    </AboutUsWrapper>
  );
}

export default AboutUS;
