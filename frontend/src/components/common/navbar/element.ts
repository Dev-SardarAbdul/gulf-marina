import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .bg-light {
    min-height: 80px;
    background: rgba(67, 67, 67, 0.1) !important;
    backdrop-filter: blur(135px) !important;

    @media (max-width: 991.98px) {
      background: rgb(0, 19, 26, 0.9) !important ;
    }

    .navImg {
      height: 51px;
      width: 51px;
      border-radius: 50%;
    }

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

      @media (max-width: 991.98px) {
        text-align: center;
      }

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
        @media (max-width: 991.98px) {
          display: none;
        }
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
        @media (max-width: 991.98px) {
          display: none;
        }
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

export const NavButtonDiv = styled.div`
  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }
`;
