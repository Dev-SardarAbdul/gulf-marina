import styled from "styled-components";

export const CardWrapper = styled.div`
  .card {
    width: 100%;
    min-height: 432px;
    background: #ffffff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    border-bottom: 5px solid #ee6700;
    padding: 2rem 1rem;

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
    margin-top: 3rem;
  }

  .airplane {
    width: 64.25px;
    height: 64.25px;
    display: block;
    margin: 1rem auto;
  }
`;
