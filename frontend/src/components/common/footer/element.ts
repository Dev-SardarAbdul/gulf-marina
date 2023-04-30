import styled from "styled-components";
import { footerBg } from "assets";

export const FooterWrapper = styled.div`
  background-image: url(${footerBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  overflow: hidden;

  .container {
    margin-top: 2rem;
  }

  img.footerImg {
    margin-top: 6rem;
    margin-left: 8rem;
    cursor: pointer;

    @media (max-width: 991.98px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
    }
  }

  .footerLogo {
    min-height: 56px;
    width: 56px;
    border-radius: 221px;
    margin-top: 1rem;

    @media (max-width: 991.98px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .margin {
    margin-left: 50px;
  }

  .marginIcon {
    height: 24px;
    width: 24px;
    border-radius: 0px;

    @media (max-width: 991.98px) {
      text-align: center !important;
      margin-top: 2rem;
    }
  }
`;

export const FooterText = styled.p`
  margin-top: 1rem;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
  width: 80%;

  @media (max-width: 991.98px) {
    width: 100%;
    text-align: justify;
    text-align-last: center;
  }
`;

export const FooterCompanyHeading = styled.h1`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
  margin-left: 30px;

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const FooterOl = styled.li`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-transform: capitalize;
  color: #fff !important;
  text-decoration: none !important;
  text-decoration: none !important;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #ee6700 !important;
  }

  a {
    color: #fff !important;
    text-decoration: none !important;
    transition: 0.3s all ease-in-out;

    &:hover {
      color: #ee6700 !important;
    }
  }

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;

  @media (max-width: 991.98px) {
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  a {
    color: #fff !important;
    text-decoration: none !important;
    transition: 0.3s all ease-in-out;

    &:hover {
      color: #ee6700 !important;
    }
  }
`;

export const FooterBorderBottom = styled.div`
  border: 1px solid #828282;
  margin-top: 4rem;
`;

export const FooterCopyWrite = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
  margin-top: 1rem;
  text-align: center;
`;
