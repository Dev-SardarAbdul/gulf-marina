import React from "react";
import {
  CardDiv,
  ServicesHeading,
  ServicesText,
  ServicesWrapper,
} from "./styles";
import {
  MainCol,
  MainContainer,
  MainRow,
  ServicesCard,
} from "components/common";
import { servicesCardData } from "components/data";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <ServicesHeading>Explore Our Services</ServicesHeading>
          <ServicesText>
            Globalink Logistics is a trusted provider of reliable land
            transportation solutions for international trade. We have the
            expertise and global network to support businesses of all sizes and
            industries with their logistics needs.
          </ServicesText>
        </AnimationOnScroll>
        <CardDiv>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <MainRow>
              {servicesCardData.map((item, index) => (
                <MainCol lg={4}>
                  <ServicesCard item={item} index={index} />
                </MainCol>
              ))}
            </MainRow>
          </AnimationOnScroll>
        </CardDiv>
      </MainContainer>
    </ServicesWrapper>
  );
};

export default Services;
