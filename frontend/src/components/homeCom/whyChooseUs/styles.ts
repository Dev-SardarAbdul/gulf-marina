import styled from "styled-components";

export const ChooseUsWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
    }
  }

  .marginRow {
    margin-top: 4rem;

    @media (max-width: 575.98px) {
      margin-top: 2rem;
    }
  }

  .chooseImg {
    margin-top: 4rem;
    @media (max-width: 991.98px) {
      display: block;
      margin: 4rem auto 0 auto;
    }
  }
`;

export const ChooseUsMiniHeading = styled.h1`
  font-size: 14px;
  margin-bottom: 5px;
  text-transform: capitalize;
  text-align: center;
  color: #000;
`;

export const ChooseUsiHeading = styled.h1`
  font-family: "Teko" !important;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: #ee6700;
  margin-top: 10px;
  font-size: 50px;
`;

export const ChooseUsiText = styled.p`
  text-align: justify;
  text-align-last: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
`;
export const ChooseUsFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &.marginDiv {
    margin-top: 2rem;
  }
`;
export const ChooseUsLogo = styled.div`
  font-size: 24px;
  background-color: #ee6700;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ChooseUsFlexText = styled.p`
  margin: 0px;
  margin-top: 10px;

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
  }

  &.boldText {
    margin-top: 0px !important;
    font-weight: 500;
    font-size: 20px;
    text-transform: capitalize;
  }
`;
