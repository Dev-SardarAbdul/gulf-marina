import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .bg-light {
    min-height: 80px;
    background: rgba(67, 67, 67, 0.1) !important;
    backdrop-filter: blur(135px) !important;

    .nav-link {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 17px;
      text-transform: capitalize;
      color: #ffffff;
      position: relative;
      margin-right: 15px;

      &:hover {
        color: #ee6700;
      }

      &.nav-link.active {
        color: #fff !important;
      }

      &::after {
        content: "";
        position: absolute;
        width: 85%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 5px;
        background-color: #ee6700;
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
      }
    }
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(238, 103, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    box-shadow: none !important;
    outline: none !important;
  }

  .navbar-toggler {
    border-color: rgb(255, 102, 203);
  }
`;

export const NavButton = styled.button`
  width: 121px;
  height: 35px;
  background: #ee6700;
  border-radius: 32px;
  border: none;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;

  &:hover {
    color: #ee6700;
    background: white;
  }
`;
