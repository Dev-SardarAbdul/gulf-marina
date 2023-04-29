import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const AboutUsHeader = styled.h2`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
`;

export const AboutUsSubText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #484848;
  text-align: center;

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    filter: blur(4px);
  }

  .swiper-slide-active {
    filter: blur(0px);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 350px;
    border: none;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }

  .swiper-button-next {
    /* background-image: url(); */
    margin-right: 10rem;
    background-repeat: no-repeat !important;
    width: 4rem;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-right: -2px;
    }

    @media (max-width: 1480px) {
      margin-right: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-button-prev {
    color: black;
    /* background-image: url(); */
    margin-left: 10rem;
    background-repeat: no-repeat !important;
    width: 100% !important;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-left: -2px;
    }

    @media (max-width: 1480px) {
      margin-left: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
  }
`;
