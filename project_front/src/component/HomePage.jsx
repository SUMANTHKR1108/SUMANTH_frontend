import React from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const HomePage = () => {
  return (
    <>
       <h1 className="text-center my-5" id="port">
        WELCOME TO FREELANCE FINDER
      </h1>
      
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_640.jpg" />
            <Card.Body>
          
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default HomePage
