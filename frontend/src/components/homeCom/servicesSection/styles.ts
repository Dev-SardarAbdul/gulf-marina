import styled from "styled-components";

export const ServicesWrapper = styled.div`
  background: #f5f5f5;
  overflow: hidden;

  .container {
    margin-top: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
    }
  }
`;

export const ServicesHeading = styled.h1`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
`;

export const ServicesText = styled.p`
  text-align: center;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #484848;
`;

export const CardDiv = styled.div`
  margin-top: 4rem;
`;
