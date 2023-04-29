import styled from "styled-components";
import { heroTruck, heroContainer, heroship } from "assets";

export const HeroSectionWrapper = styled.div``;

export const SwipperWrapper = styled.div`
  position: relative;

  .navDiv {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 100;
  }

  .btnsDiv {
    position: absolute;
    top: 40%;
    right: 40px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 991.98px) {
      position: static;
      flex-direction: row;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  .swiperBtn {
    border: none;
    width: 38px;
    height: 38px;
    background: #ee6700;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
  }

  .firstSlide {
    background-image: url(${heroTruck});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    /* @media (max-width: 991.98px) {
      min-height: auto;
    } */
  }
  .secondSlide {
    background-image: url(${heroContainer});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    /* @media (max-width: 991.98px) {
      min-height: auto;
    } */
  }
  .thirdSlide {
    background-image: url(${heroship});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    /* @media (max-width: 991.98px) {
      min-height: auto;
    } */
  }
`;

export const TextWrapper = styled.div`
  margin-top: 13rem;

  @media (max-width: 991.98px) {
    margin-top: 8rem;
  }

  .readMoreBtnDiv {
    @media (max-width: 991.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const HeroMainText = styled.h2`
  font-family: "Teko" !important;

  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ffffff;

  span {
    color: #ee6700;
    font-family: "Teko" !important;
  }

  @media (max-width: 991.98px) {
    text-align: center;
    br {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    font-size: 32px;
  }
`;

export const HeroSubText = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;

  @media (max-width: 991.98px) {
    text-align: center;
    br {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
  }
`;
