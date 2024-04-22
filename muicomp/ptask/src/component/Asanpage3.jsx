import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, } from 'react-bootstrap';

function Asanpage3() {
  return (
  <>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Team</b>
      </Button>
      <br/>
      
    </Container>

    <h1 className="d-flex justify-content-center align-items-center">Our hardWorking  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Team</a></h1>

    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium,</p>
    <p className="d-flex justify-content-center align-items-center">nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>
    
  

      
    
    
<>
    <Container>
      <Row>
        <Col xs={3} md={3}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.BUaTmm5c-Y8HjuAXmfY76gHaEo?w=244&h=180&c=7&r=0&o=5&pid=1.7" height={400} />
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          Chief Executive Officer
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://scholarsnetwork.org/assets/img/team/team-2.jpg" height={400} />
      <Card.Body>
        <Card.Title>Sara Jhonson</Card.Title>
        <Card.Text>
         Poduct manager
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/rhxs6ya0wmrcyc0e0gki" height={400} />
      <Card.Body>
        <Card.Title>william Andreson</Card.Title>
        <Card.Text>
         CTO
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.haddoxreid.com/wp-content/uploads/2017/09/Amanda-Queen.jpg" height={400} />
      <Card.Body>
        <Card.Title>Amada Japson</Card.Title>
        <Card.Text>
          Accoutant
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
</Row>
</Container>


    </></>
  );
}

export default Asanpage3;