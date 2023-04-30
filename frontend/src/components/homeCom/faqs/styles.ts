import { orangeIcon } from "assets";
import styled from "styled-components";

export const FaqsWrapper = styled.div`
  overflow: hidden;

  background-color: #f5f5f5;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .marginFaqs {
    margin-top: 6rem;
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
  margin-top: 2rem;

  @media (max-width: 991.98px) {
    margin-top: 0;
  }

  .accordion-button {
    background: #fff;
    font-family: "Teko" !important;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    text-transform: capitalize;
    color: #ee6700;
    border-radius: 32px !important;
    border: none !important;
    background: transparent !important;
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
    color: #ee6700 !important;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
  }

  .accordion-item {
    margin-top: 0.5rem;
    border: none !important;
    border-radius: none;
    position: relative;
    background: transparent !important;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 5px;
      background-color: #ee6700;
      transform-origin: bottom center;
      transition: transform 0.25s ease-out;
      z-index: 100;
    }

    &::after {
      transform: scaleX(1);
      transform-origin: bottom center;
    }
  }

  .accordion-button:not(.collapsed) {
    color: #ee6700 !important;
  }

  .accordion-button::after {
    background-image: url(${orangeIcon});
  }
`;

export const FaqsWrapperTwo = styled.div``;

export const ImgDiv = styled.div`
  .centered {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }
`;
