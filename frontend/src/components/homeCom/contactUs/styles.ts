import styled from "styled-components";
import { contactUs } from "assets";

export const ContactUsWrapper = styled.div`
  background-image: url(${contactUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  overflow: hidden;

  @media (max-width: 991.98px) {
    min-height: auto;
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
  color: #ffffff;
  margin-top: 7rem;

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
  margin-top: 2rem;
`;
