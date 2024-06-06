import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'


 const Freelancerlogin= () => {
  return (
    <>
   
    <h3 className='text-center'  ><b>FREELANCE JOB PORTAL</b></h3>
    <Container className="border mt-5 bg-white col-sm-20 col-lg-8 rounded p-4 shadow ">
    <div>
        <Row>
        <h2 className='text-center'>USER REGISTER </h2><br></br>
          <Col sm={10} md={8} lg={6}>
          <Form>
        <Form.Group className="mb-8" controlId="formGroupEmail">
          <Form.Label> Employ Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-8" controlId="formGroupEmail">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Company name" />
        </Form.Group>

        <Form.Group className="mb-8" controlId="formGroupEmail">
          <Form.Label>Job designation </Form.Label>
          <Form.Control type="text" placeholder="Enter your job role" />
        </Form.Group>
        <Form.Group className="mb-8" controlId="formGroupEmail">
          <Form.Label>Your Expe</Form.Label>
          <Form.Control type="text" placeholder="Enter your Expe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Company Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your Company Address" /><br></br>

          <Button variant="primary" size="lg" active> Login</Button>{' '}
     
         </Form.Group>
          </Form>
          </Col>
          </Row>
          </div>
         
      </Container>
    </>
  )
}
export default Freelancerlogin;