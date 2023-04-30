import React from "react";
import {
  GoalsContentDeatil,
  GoalsContentHeading,
  GoalsContenttext,
  GoalsContentWrapper,
  GoalsHeading,
  GoalsText,
  GoalsWrapper,
} from "./styles";
import { MainCol, MainContainer, MainRow } from "components/common";
import { goalsData } from "components/data";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const GoalsSection = () => {
  return (
    <GoalsWrapper>
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <GoalsHeading>Our Achievements in Numbers</GoalsHeading>
          <GoalsText>
            Transmax is the world’s driving worldwide coordinations supplier —
            we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </GoalsText>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <MainRow>
            {goalsData.map((item) => (
              <MainCol sm={6} lg={3}>
                <GoalsContentWrapper>
                  {item.img}

                  <GoalsContenttext>
                    <CountUp end={item.numberText} redraw={true} delay={0.2}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                  </GoalsContenttext>

                  <GoalsContentHeading>{item.title}</GoalsContentHeading>
                  <GoalsContentDeatil>{item.text}</GoalsContentDeatil>
                </GoalsContentWrapper>
              </MainCol>
            ))}
          </MainRow>
        </AnimationOnScroll>
      </MainContainer>
    </GoalsWrapper>
  );
};

export default GoalsSection;
