import styled from "styled-components";

export const GalleryWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
    }
  }

  .marginTop {
    margin-top: 4rem;

    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }
`;

export const GalleryHeading = styled.h1`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
  margin-bottom: 2rem;
`;
