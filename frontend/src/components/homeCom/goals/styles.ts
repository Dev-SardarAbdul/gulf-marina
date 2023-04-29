import styled from "styled-components";
import { goalsImg } from "assets";

export const GoalsWrapper = styled.div`
  background-image: url(${goalsImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  .container {
    margin-top: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
    }
  }
`;

export const GoalsHeading = styled.h1`
  font-family: "Teko";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
`;

export const GoalsText = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #484848;
  text-align: justify;
  text-align-last: center;
`;

export const GoalsContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .goalsIcon {
    font-size: 40px;
    color: #ee6700;
    margin-right: 20px;
  }
`;

export const GoalsContenttext = styled.p`
  font-size: 40px;
  line-height: 1;
  font-weight: 400;
  color: #034b5b;
  margin-bottom: 0px;
  margin-top: 1rem;
`;

export const GoalsContentHeading = styled.h1`
  font-size: 20px;
  margin-top: 1rem;
`;

export const GoalsContentDeatil = styled.p`
  text-align: center;
`;
