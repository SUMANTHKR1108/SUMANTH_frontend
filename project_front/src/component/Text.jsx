import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from './reusableComponents/FooterPartUi';

function Text() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Freelancer</Navbar.Brand>
        
        <Link to={'/'} >
          <Navbar.Brand href="#">Home</Navbar.Brand>
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to={'/AboutInfo'}>
              <Nav.Link href="#">About</Nav.Link>
              </Link>
              <Link to={'/Contact'}>
              <Nav.Link href="#">Contact Info</Nav.Link>
              </Link>
            </Nav>
            <Nav>
            <Link to={'/'}>
              <Nav.Link href="#">Logout</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br><br></br><br></br><br></br>
      <Container>
        <Row>
          <Col>
            <Card border="primary" color="pink" style={{ width: '18rem' }}>
              <Card.Header>Java devlp</Card.Header>
              <Card.Title>Company : Excel Soft</Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : 2yr.<br />
                  Sal : 2.4lpa.<br />
                  Quali : B.E.
                  Company   : Excel Soft,
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Header>.NET devlp</Card.Header>
              <Card.Title>Company : DELL</Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : Fresher.<br />
                  Sal : 3.4lpa.<br />
                  Quali : B.E, M.C.A.
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Header>SQL devlp</Card.Header>
              <Card.Title>Company : HGS</Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : 2yr.<br />
                  Sal : 4.4lpa.<br />
                  Quali : B.E. B.Sc, MCA.
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Header>Test Eng</Card.Header>
              <Card.Title>Company : HP</Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : 2yr.<br />
                  Sal : 2.4lpa.<br />
                  Quali : B.E.
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Header>Full Stack</Card.Header>
              <Card.Title>Company : Excel Soft</Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : Fresher.<br />
                  Sal : 5.4lpa.<br />
                  Quali : B.E.MCA.MBA
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Header>Python Devlp</Card.Header>
              <Card.Title>Company : Wipro </Card.Title>
              <Card.Body>
                <Card.Text>
                  Job Role : Software Eng <br />
                  Exp : Fresher.<br />
                  Sal : 2.4lpa.<br />
                  Quali : B.E.MCA.MBA,Msc.
                </Card.Text>
                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
    </>
  );
}

export default Text;
