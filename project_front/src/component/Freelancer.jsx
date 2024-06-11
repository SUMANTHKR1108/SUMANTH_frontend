import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Client.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Freelancer = () => {
  const gridstyle = {
    minHeight: "90vh",
    minWidth: "130vh",
    backgroundImage: `url('https://cdn.shopify.com/s/files/1/0694/7143/7104/files/mr05_b_3.jpg?v=1671764718')`,
    backgroundSize: "cover",
    backgroundPosition: "Container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [freelancerEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const errors = {};

    if (!freelancerEmail) {
      formIsValid = false;
      errors.email = "Email is required";
    }

    if (!password) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);

    if (!formIsValid) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/freelancerLogIn",
        {
          freelancerEmail,
          password,
        }
      );
      console.log(response.data.data);
      window.sessionStorage.setItem("firstName", response.data.data.firstName);

      // if (response.data.data === 1) {
      alert("Login Successful");
      window.sessionStorage.setItem(
        "freelancerEmail",
        response.data.data.freelancerEmail
      );
      navigate("/Home1");
      // } else {
      //   setErrors({ message: "Invalid email or password. Please try again" });
      //   alert("Login Failed");
      // }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed. Please try again.");
      setErrors({ message: "Invalid email or password. Please try again." });
    }
  };

  return (
    <>
      <Container
        className="border mt-4 bg-white col-sm-20 col-lg-5 rounded p-6 shadow"
        id="MainLoginContainer"
        style={gridstyle}
      >
        <Row>
          <h2 className="text-center">FREELANCER LOGIN </h2>
          <Col sm={40} md={38} lg={25}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-8" controlId="formGroupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="xyz@gmail.com"
                  value={freelancerEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
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
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
                <br />
                <Link to={"/Home1"}>
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Login{" "}
                  </Button>{" "}
                </Link>
                <Link to={"/Userlogin"}>
                  <Button variant="primary" size="lg" active>
                    SignUp
                  </Button>{" "}
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Freelancer;
