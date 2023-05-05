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

  .cardsWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 2rem;

    @media (max-width: 767.98px) {
      gap: 3rem;
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

export const ImgWrapper = styled.div`
  background: #fff;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 2rem 0;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
  border-bottom: 5px solid #ee6700;
  border-radius: 10px;

  .img {
    height: 130px;
    border-radius: 10px;
  }
`;
