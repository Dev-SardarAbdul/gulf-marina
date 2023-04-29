import { NavButton, NavbarWrapper } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainContainer } from "components/common";
import { navLogo } from "assets";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <NavbarWrapper>
      <Navbar bg="light" expand="lg">
        <MainContainer>
          <Link to="/">
            <Navbar.Brand>
              <img src={navLogo} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <NavButton>Contact Us</NavButton>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default Topbar;
