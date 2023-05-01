import styled from "styled-components";
import {
  customImg,
  ddpImg,
  hoverAirplane,
  hoverShip,
  hoverTruck,
  warehouseImg,
} from "assets";

export const CardWrapper = styled.div`
  .card {
    width: 100%;
    min-height: 432px;
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    border-bottom: 5px solid #ee6700;
    padding: 2rem 1rem;
    position: relative;
    margin-bottom: 2rem;

    &:hover {
      animation-name: headShake;
      animation-duration: 1s;
    }

    .overLay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: 0.3s all ease-in-out;

      &.darkBG {
        background: rgba(43, 43, 43, 0.89);
        box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
        transition: 0.3s all ease-in-out;
      }
    }

    &.firstBG {
      background-image: url(${hoverAirplane});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.secondBG {
      background-image: url(${hoverShip});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.thirdBG {
      background-image: url(${hoverTruck});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.fourBG {
      background-image: url(${customImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.fiveBG {
      background-image: url(${warehouseImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.sixBG {
      background-image: url(${ddpImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media (max-width: 991.98px) {
      width: 375px;
      display: block;
      margin: 0 auto 2rem auto;
    }

    @media (max-width: 575.98px) {
      width: 100%;
    }
  }

  .card-title {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 24px;
    text-transform: capitalize;
    color: #2b2b2b;
    text-align: center;
    margin-top: 1rem;

    &.whiteText {
      color: #fff;
    }
  }

  .card-text {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    text-align-last: center;
    text-transform: capitalize;
    color: #484848;
    margin-top: 1.5rem;

    &.whiteText {
      color: #fff;
      font-weight: 500;
    }
  }

  .airplane {
    width: 64.25px;
    height: 64.25px;
    display: block;
    margin: 3rem auto 1rem auto;
  }
`;
