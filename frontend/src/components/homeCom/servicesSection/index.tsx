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
            Gulf Marina is a trusted provider of reliable transportation
            solutions for local & international trade. We understand that timely
            and secure delivery of goods is essential for the success of any
            business, and we work tirelessly to ensure that our clients'
            shipments reach their destinations on time and in good condition.
            Whether it's by air, land or water, we have the capabilities to
            handle the most complex logistics challenges with ease, giving our
            clients peace of mind and the freedom to focus on their core
            business activities.
          </ServicesText>
        </AnimationOnScroll>
        <CardDiv>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <MainRow>
              {servicesCardData.map((item, index) => (
                <MainCol lg={6} xl={4}>
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
