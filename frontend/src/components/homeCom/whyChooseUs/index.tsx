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
import { IoIosContacts } from "react-icons/io";
import { MainCol, MainContainer, MainRow } from "components/common";
import { chooseUsData } from "components/data";
import { chooseImg } from "assets";

const WhyChooseUs = () => {
  return (
    <ChooseUsWrapper>
      <MainContainer>
        <ChooseUsMiniHeading> Why Choose Us ?</ChooseUsMiniHeading>
        <ChooseUsiHeading>The Main Features</ChooseUsiHeading>
        <ChooseUsiText>
          We are committed to providing exceptional service that meets the needs
          of our customers. Our top features include 100% customer satisfaction,
          quality service at an affordable price, worldwide locations, and a
          modern fleet of vehicles. These features are designed to ensure that
          our customers receive the best possible experience with us. We take
          pride in delivering outstanding service that exceeds expectations and
          leaves our customers satisfied.
        </ChooseUsiText>
        <MainRow className="marginRow">
          <MainCol lg={6}>
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
          </MainCol>
          <MainCol lg={6}>
            <img src={chooseImg} className="img-fluid chooseImg" />
          </MainCol>
        </MainRow>
      </MainContainer>
    </ChooseUsWrapper>
  );
};

export default WhyChooseUs;
