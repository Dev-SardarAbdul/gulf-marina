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

const GoalsSection = () => {
  return (
    <GoalsWrapper>
      <MainContainer>
        <GoalsHeading>Our Goals in Numbers</GoalsHeading>
        <GoalsText>
          Transmax is the world’s driving worldwide coordinations supplier — we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
        </GoalsText>
        <MainRow>
          {goalsData.map((item) => (
            <MainCol sm={6} lg={3}>
              <GoalsContentWrapper>
                {item.img}
                <GoalsContenttext>{item.numberText}</GoalsContenttext>
                <GoalsContentHeading>{item.title}</GoalsContentHeading>
                <GoalsContentDeatil>{item.text}</GoalsContentDeatil>
              </GoalsContentWrapper>
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </GoalsWrapper>
  );
};

export default GoalsSection;
