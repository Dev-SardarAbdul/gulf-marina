import styled from "styled-components";
import { contactUs } from "assets";

export const ContactUsWrapper = styled.div`
  background-image: url(${contactUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 991.98px) {
    min-height: auto;
  }

  a {
    text-decoration: none;
  }

  .whatsappIcon {
    margin-right: 10px;
    margin-bottom: 3px;
    color: green;
  }
  .callIcon {
    margin-right: 10px;
    margin-bottom: 3px;
  }

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ContactUsHeader = styled.h2`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  text-align: center;
  text-transform: capitalize;
  color: #ee6700;
  margin: 0px;

  @media (max-width: 991.98px) {
    margin-top: 4rem;

    br {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    font-size: 32px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  .contactImg {
    transform: scale(1.01);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 767.98px) {
      width: 100%;
      height: 400px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 10px;
    }
  }
  .card {
    width: 800px;
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    border-bottom: 5px solid #ee6700;
    padding: 0px;
    border-radius: 10px;

    @media (max-width: 767.98px) {
      width: 100%;
    }

    &:hover {
      animation-name: headShake;
      animation-duration: 1s;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ImgTextWrapper = styled.div`
  position: absolute;
  top: 30%;

  @media (max-width: 767.98px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 575.98px) {
    top: 60%;
  }
`;

export const ImgHeading = styled.h1`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  margin: 0;
  margin-top: 6rem;

  @media (max-width: 575.98px) {
    width: max-content;
  }
`;

export const ImgSubText = styled.p`
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  margin: 0;
  margin-top: 0.5rem;
`;

export const ContactInfoDiv = styled.div`
  .infoIcon {
    font-size: 32px;
    color: #ee6700;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .marginIcon {
    margin-top: 1rem;
  }
`;
export const ContactInfoText = styled.p`
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: 1rem;
  border-bottom: 2px solid rgb(97, 97, 95, 0.2);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1rem;
  color: rgb(0, 0, 0, 0.65);
  font-weight: 500;

  &.noBorder {
    border-bottom: none;
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }

  .numberWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 575.98px) {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const ContactText = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: #fff;
`;
