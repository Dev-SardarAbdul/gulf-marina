import { arrow } from "assets";
import styled from "styled-components";

export const FaqsWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const FaqsHeader = styled.h2`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
`;

export const AccordionDiv = styled.div`
  .accordion-button {
    background: #ee6700;
    font-family: "Teko" !important;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    text-transform: capitalize;
    color: #ffffff;
    border-radius: 32px !important;
    border: none !important;
  }

  .accordion-button:focus {
    box-shadow: none !important;
    border-radius: 32px !important;
    border: none !important;
  }

  .accordion-button:not(.collapsed) {
    box-shadow: none !important;
    border: none !important;
  }

  .accordion-flush .accordion-item .accordion-button {
    border-radius: 32px !important;
  }

  .accordion-body {
    color: #fff !important;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
  }

  .accordion-item {
    margin-top: 0.5rem;
    border: none !important;
    background: #ee6700;
    border-radius: 32px !important;
  }

  .accordion-button:not(.collapsed) {
    color: #fff !important;
  }

  .accordion-button::after {
    background-image: url(${arrow});
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: center;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
    justify-content: center;
  }

  .question {
    @media (max-width: 767.98px) {
      width: 200px;
      height: 250px;
    }
  }
`;
