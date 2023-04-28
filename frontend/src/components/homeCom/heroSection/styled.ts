import styled from "styled-components";

export const HeroSectionWrapper = styled.div``;

export const SwipperWrapper = styled.div`
  position: relative;

  .navDiv {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 100;
  }

  .heroImgs {
    width: 100%;
    height: 100vh;
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
`;
