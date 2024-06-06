import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home2() {
  return (
    <>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Cont Info">Cont Info</Nav.Link>
      </Nav.Item>
    </Nav>
    
     <Container><br></br>
     <Row>
        <Col>
     <Card.ImgOverlay>
     <Card style={{ width: '20rem', margin:'30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Recruter Login</Card.Title>
        <Button variant="primary">On Click</Button>
      </Card.Body>
    </Card>
    </Card.ImgOverlay>
    </Col>
  
    </Row>

<Card className="bg-dark text-white">
      <Card.ImgOverlay>
        <Card.Title><h1>WEL-COME TO FREELEANCER JOBSPORTAL</h1></Card.Title>
        <Card.Text>
        <b>This is the best way to find the new job and nearest Job
          and you can find the best job for your education related with the 
          help of my job portal
           follow my job portal web page</b>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
      <Row>
        <Col>
      
        </Col>
      </Row>
     
    </Container>
   </>
  );
}

export default Home2;