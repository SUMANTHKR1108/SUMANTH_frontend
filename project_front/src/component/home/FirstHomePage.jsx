import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Link } from "react-router-dom";

const FirstHomePage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?cs=srgb&dl=pexels-caio-56759.jpg&fm=jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Navbar
        expand="lg"
        className="bg-dark"
        variant="dark"
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
            <img
              src="https://w7.pngwing.com/pngs/828/711/png-transparent-freelancer-com-logo-graphic-designer-design-blue-web-design-text.png"
              alt="Freelancer.com"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/AboutInfo" style={{ color: "white" }}>
                About
              </Nav.Link>
            </Nav>
            <form className="d-flex">
              <Link to="/Client" className="me-2">
                <button className="btn btn-outline-success" type="button">
                  User Login
                </button>
              </Link>
              <Link to="/Freelancer">
                <button className="btn btn-outline-success" type="button">
                  Freelancer Login
                </button>
              </Link>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="text-center" style={{ paddingTop: "100px" }}>
        <p
          id="reg"
          style={{
            color: "black",
            fontSize: "55px",
            fontFamily: "serif",
          }}
        >
          WELCOME TO FREELANCER FINDER
        </p>
      </Container>
    </div>
  );
};

export default FirstHomePage;
