import styled, { css } from "styled-components";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  buttonCenter?: boolean;
  buttonEnd?: boolean;
  connectWallet?: boolean;
  readMore?: boolean;
}
export const MainButton = styled.button<Props>`
  :disabled {
    cursor: not-allowed;
    background: gray !important;
  }

  position: relative;
  overflow: hidden;

  background: ${(p) =>
    p.theme.button.primaryBtn && p.primary && p.theme.button.primaryBtn};
  ${(p) =>
    p.primary &&
    css`
      padding: 0.5rem 2rem;
      border: none;
      font-weight: bold;
      border-radius: 0px;
    `}

  ${(p) =>
    p.buttonCenter &&
    css`
      display: flex;
      margin-left: auto;
      margin-right: auto;
    `} 


    ${(p) =>
    p.connectWallet &&
    css`
      padding: 0.5rem 2rem;
      color: ${(p) => p.theme.button.connectBtnText};
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-weight: bold;
      border: 3px solid #ffee00;
      background: transparent;
    `}
    ${(p) =>
    p.readMore &&
    css`
      width: 121px;
      height: 35px;
      background: #ee6700;
      border-radius: 32px;
      font-family: "Barlow";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-transform: capitalize;
      color: #ffffff;
      border: none;
    `}
`;

export const ButtonIcon = styled.img<Props>`
  margin-top: -0.3rem;
  margin-right: 0.3rem;
`;
