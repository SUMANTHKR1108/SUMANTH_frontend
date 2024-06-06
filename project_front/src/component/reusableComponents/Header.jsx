import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const brandStyle = {
    fontFamily: "cursive",
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={brandStyle}>
          Freelance finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" style={{ width: "70%" }}>
            <Link to={"/"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={"/AboutInfo"}>
              <Nav.Link href="#about">About</Nav.Link>
            </Link>
          </Nav>
          <Nav className="justify-content-end">
            <Link to={"/"}>
              <Nav.Link href="#user">LogOut</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
