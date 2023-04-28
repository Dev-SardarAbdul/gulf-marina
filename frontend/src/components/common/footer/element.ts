import styled from "styled-components";

export const FooterWrapper = styled.div`
  overflow: hidden;
  background: #2b2b2b;
  backdrop-filter: blur(126.5px);

  .logo {
    width: 40px;
  }
  .container {
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media (max-width: 991.98px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .topIcon {
    font-size: 2rem;
    margin-top: 10px;
    cursor: pointer;
    color: rgb(255, 212, 82);

    &:hover {
      animation-name: heartBeat;
      animation-duration: 1s;
    }
  }
`;

export const FooterImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  .brandText {
    font-style: normal;
    font-weight: 700;
    font-size: 19.9783px;
    line-height: 30px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 !important;
    cursor: pointer;
  }

  .img-fluid {
    cursor: pointer;
  }

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
`;

export const TermsText = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
`;

export const CopyrightText = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 991.98px) {
    justify-content: center;
    margin-top: 1rem;
  }

  .footerIcon {
    color: #2b2b2b;
    font-size: 22px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
      scale: 1.2;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const IconHolder = styled.div`
  height: 35px;
  width: 35px;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JoinNow = styled.button`
  background: #ffd452;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: #2e4756;
  padding: 15px 20px;
  transition: 0.3s all ease-in-out;
  border-radius: 20px;

  @media (max-width: 575.98px) {
    padding: 0;
    height: 40px;
    width: 150px;
  }

  &:hover {
    scale: 1.05;
    transition: 0.3s all ease-in-out;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199.98px) {
    margin-top: 1rem;
  }
`;
