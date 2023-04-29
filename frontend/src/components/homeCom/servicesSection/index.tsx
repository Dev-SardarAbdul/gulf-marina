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

const Services = () => {
  return (
    <ServicesWrapper>
      <MainContainer>
        <ServicesHeading>Explore Our Services</ServicesHeading>
        <ServicesText>
          Globalink Logistics is a trusted provider of reliable land
          transportation solutions for international trade. We have the
          expertise and global network to support businesses of all sizes and
          industries with their logistics needs.
        </ServicesText>
        <CardDiv>
          <MainRow>
            {servicesCardData.map((item) => (
              <MainCol lg={4}>
                <ServicesCard item={item} />
              </MainCol>
            ))}
          </MainRow>
        </CardDiv>
      </MainContainer>
    </ServicesWrapper>
  );
};

export default Services;
