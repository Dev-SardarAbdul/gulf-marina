import { NavButtonDiv, NavbarWrapper } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, MainContainer } from "components/common";
import { navLogo } from "assets";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <NavbarWrapper>
      <Navbar bg="light" expand="lg">
        <MainContainer>
          <Link to="/">
            <Navbar.Brand>
              <img src={navLogo} className="navImg" />
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
            <NavButtonDiv>
              <a href="#contact">
                <Button readMore={true}>Contact Us</Button>
              </a>
            </NavButtonDiv>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default Topbar;
