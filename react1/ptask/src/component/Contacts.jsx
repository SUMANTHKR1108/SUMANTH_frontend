import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacts() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={6}>
            <div>
          <Image src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_538,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg" rounded/>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <h1 style={{margin:'20px'}}>GET IN TOUCH</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me.I’m a great place for you to tell a story and let your users know a little more about you. </p>
          <p>Tel: 123-456-7890  |  Email: mailto:info@mysite.com</p>
          <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>First Name*</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name*</Form.Label>
        <Form.Control type="alphabets"/>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Subject*</Form.Label>
        <Form.Control type="Text"/>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Message*</Form.Label>
        <Form.Control type="Text"/>
      </Form.Group>

      <Button className="primary mt-2" type="submit">
        Submit
      </Button>

      <p style={{margin:'20px'}}>Stay Up-To-Date with New Posts</p>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"/>

        <Button className="primary mt-2">
        Subscribe Now
      </Button>
      </Form.Group>

    </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;