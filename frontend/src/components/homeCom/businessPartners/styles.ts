import styled from "styled-components";
import { motion } from "framer-motion";

export const BusinessPartnersWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
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

export const PartnersHeader = styled.h2`
  font-family: "Teko" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ee6700;
  text-align: center;
`;

export const PartnersSubText = styled(motion.h4)`
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
    height: 100px;
  }
`;
