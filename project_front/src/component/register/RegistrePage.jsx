import "bootstrap/dist/css/bootstrap.min.css";
import FooterPartUi from "../reusableComponents/FooterPartUi";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!phone.trim()) {
      errors.phone = "Phone is required";
      isValid = false;
    }

    if (!clientEmail.trim()) {
      errors.clientEmail = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
      errors.clientEmail = "Email is invalid";
      isValid = false;
    }

    if (!gender) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/client", {
        firstName,
        lastName,
        phone,
        clientEmail,
        gender,
        dateOfBirth,
        password,
      });

      if (!res.data.isError) {
        setError("");
        alert(res.data.message);
        navigate("/Client");
      } else {
        setError(res.data.message);
        alert(res.data.message);
        navigate("/RegisterPage");
      }
    } catch (error) {
      console.error("Error to register:", error);
      setError("Failed to register. Please try again later.");
    }
  };

  return (
    <>
      <p
        className="text-center"
        id="reg1"
        style={{
          fontFamily: "Arial",
          fontSize: "25px",
          fontWeight: "bold",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        USER REGISTER PAGE
      </p>
      <Container className="border mt-5 bg-white col-sm-11 col-lg-6 rounded p-4 shadow">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={8} lg={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && (
                  <Form.Text className="text-danger">
                    {error.firstName}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && (
                  <Form.Text className="text-danger">
                    {error.lastName}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {error.phone && (
                  <Form.Text className="text-danger">{error.phone}</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-1" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
                {error.gender && (
                  <Form.Text className="text-danger">{error.gender}</Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col sm={15} md={10} lg={15}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="xyz@gmail.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
                {error.clientEmail && (
                  <Form.Text className="text-danger">
                    {error.clientEmail}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="birthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter your birth date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
                {error.dateOfBirth && (
                  <Form.Text className="text-danger">
                    {error.dateOfBirth}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && (
                  <Form.Text className="text-danger">
                    {error.password}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error.confirmPassword && (
                  <Form.Text className="text-danger">
                    {error.confirmPassword}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>

          {error.common && (
            <div className="mb-3 text-danger">{error.common}</div>
          )}

          <Button className="col-6" variant="success" type="submit">
            Register
          </Button>
        </Form>
      </Container>

      <FooterPartUi />
    </>
  );
};

export default RegisterPage;
