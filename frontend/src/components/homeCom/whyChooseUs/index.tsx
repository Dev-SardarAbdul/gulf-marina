import React from "react";
import {
  ChooseUsFlex,
  ChooseUsFlexText,
  ChooseUsMiniHeading,
  ChooseUsWrapper,
  ChooseUsiHeading,
  ChooseUsLogo,
  ChooseUsiText,
} from "./styles";
import { MainCol, MainContainer, MainRow } from "components/common";
import { chooseUsData } from "components/data";
import { chooseImg } from "assets";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WhyChooseUs = () => {
  return (
    <ChooseUsWrapper id="whyUs">
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <ChooseUsMiniHeading> Why Choose Us ?</ChooseUsMiniHeading>
          <ChooseUsiHeading>The Main Features</ChooseUsiHeading>
          <ChooseUsiText>
            We are committed to providing exceptional service that meets the
            needs of our customers. Our top features include 100% customer
            satisfaction, quality service at an affordable price, worldwide
            locations, and a modern fleet of vehicles. These features are
            designed to ensure that our customers receive the best possible
            experience with us. We take pride in delivering outstanding service
            that exceeds expectations and leaves our customers satisfied.
          </ChooseUsiText>
        </AnimationOnScroll>

        <MainRow className="marginRow">
          <MainCol lg={6}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              {chooseUsData.map((item, index) => (
                <ChooseUsFlex className={`${index > 0 && "marginDiv"}`}>
                  <ChooseUsLogo>{item.icon}</ChooseUsLogo>
                  <div>
                    <ChooseUsFlexText className="boldText">
                      {item.heading}
                    </ChooseUsFlexText>
                    <ChooseUsFlexText>{item.text}</ChooseUsFlexText>
                  </div>
                </ChooseUsFlex>
              ))}
            </AnimationOnScroll>
          </MainCol>
          <MainCol lg={6}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <img src={chooseImg} className="img-fluid chooseImg" />
            </AnimationOnScroll>
          </MainCol>
        </MainRow>
      </MainContainer>
    </ChooseUsWrapper>
  );
};

export default WhyChooseUs;
