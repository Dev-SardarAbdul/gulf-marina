import { MainContainer, Navbar } from "components/common";
import { HeroSectionWrapper } from "./styled";

function HeroSection() {
  return (
    <HeroSectionWrapper>
      <Navbar />

      <MainContainer>hello</MainContainer>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
