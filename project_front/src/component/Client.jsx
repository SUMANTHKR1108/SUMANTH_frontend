import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./reusableComponents/FooterPartUi";
import axios from "axios";

const Client = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/clientLogIn", {
        clientEmail: clientEmail,
        password: password,
      });
      console.log(response.data.data);
      window.sessionStorage.setItem("firstName", response.data.data.firstName);

      // if (response.data.data === 1) {
      console.log("Login successful");
      //   alert(response.data.message);
      //   setErrors({});

      navigate("/JobPostingPage");
      // } else {
      //   setErrors({ message: "Invalid email or password. Please try again" });
      //   alert("Invalid email or password. Please try again");
      // }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setErrors({ message: "Invalid email or password. Please try again." });
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "90vh",
          minWidth: "90vh",
          backgroundImage: `url('https://lemon.io/wp-content/uploads/2020/03/pic-landing-best-freelance-platf-hero@3x.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Container className="border mt-10 bg-white col-sm-15 col-lg-6 rounded p-10 shadow">
          <Row>
            <h2 className="text-center">CLIENT LOGIN</h2>{" "}
            <Col sm={40} md={38} lg={20}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-8" controlId="formGroupEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="xyz@gmail.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                  {errors.message && (
                    <span className="text-danger">{errors.message}</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>PASSWORD</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <Button variant="primary" size="lg" type="submit">
                    {" "}
                    Login
                  </Button>{" "}
                  <Link to={"/RegisterPage"}>
                    <Button variant="primary" size="lg">
                      {" "}
                      SignUp
                    </Button>{" "}
                  </Link>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Client;
