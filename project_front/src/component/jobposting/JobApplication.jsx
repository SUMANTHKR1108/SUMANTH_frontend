import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function JobApplication() {
  const [freelancerEmail, setFreelancerEmail] = useState(
    window.sessionStorage.getItem("freelancerEmail")
  );
  const [formData, setFormData] = useState({
    freelancerEmail: "",
    jobId: "",
    skills: [],
    skillExperience: "",
    skillRating: "",
    appliedAt: "",
    skillDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "skills") {
      let updatedSkills = [...formData.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      setFormData({ ...formData, [name]: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/application", {
        freelancerEmail: formData.freelancerEmail,
        jobId: formData.jobId,
        appliedAt: formData.appliedAt,
        skillDescription: formData.skillDescription,
        skillExperience: formData.skillExperience,
        skills: formData.skills.join(),
        skillRating: formData.skillRating,
      });

      if (!res.data.isError) {
        alert(res.data.message);
      } else {
        alert("Error occurred: " + res.data.message);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again later.");
    }
  };

  function handleLogout() {
    window.sessionStorage.clear();
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary text-black"
        variant="dark"
      >
        <Container
          className="border mt-10 col-sm-19 col-lg-35 rounded p-10 shadow"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.BwQSGG2kkG2Uqg3ZbLbOPgHaEK?rs=1&pid=ImgDetMain')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar.Brand href="#home" className="text-black">
            Freelancer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"}>
                <Nav.Link href="#home" className="text-black">
                  Home
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Link to={"/"}>
                <Button
                  className="btn btn-outline-success me-2"
                  style={{ color: "black", borderColor: "black" }}
                  onClick={handleLogout}
                >
                  LogOut
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
        JOB APPLICATION DETAILS
      </p>

      <Container
        className="border mt-5 col-sm-11 col-lg-6 rounded p-4 shadow"
        style={{
          backgroundImage:
            "url('https://images.designtrends.com/wp-content/uploads/2016/03/29095040/White-Geometric-Pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="freelancerEmail"
                  placeholder="xyz@gmail.com"
                  value={freelancerEmail}
                  disabled
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>JobId</Form.Label>
                <Form.Control
                  type="text"
                  name="jobId"
                  placeholder="Enter jobId "
                  value={formData.jobId}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Label>Skills</Form.Label>
              <FormGroup>
                <Row>
                  <Col sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="skills"
                          value="Java"
                          checked={formData.skills.includes("Java")}
                          onChange={handleChange}
                        />
                      }
                      label="Java"
                    />
                  </Col>
                  <Col sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="skills"
                          value="Python"
                          checked={formData.skills.includes("Python")}
                          onChange={handleChange}
                        />
                      }
                      label="Python"
                    />
                  </Col>
                  <Col sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="skills"
                          value="React"
                          checked={formData.skills.includes("React")}
                          onChange={handleChange}
                        />
                      }
                      label="React"
                    />
                  </Col>
                  <Col sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="skills"
                          value=".Net"
                          checked={formData.skills.includes(".Net")}
                          onChange={handleChange}
                        />
                      }
                      label=".Net"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <br />
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Enter Your Skill Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="skillExperience"
                  placeholder="Enter your experience "
                  value={formData.skillExperience}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formGroupEmail">
                <Form.Label>Skill Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="skillRating"
                  placeholder="Your Rating"
                  value={formData.skillRating}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formGroupPassword">
                <Form.Label>Applied At</Form.Label>
                <Form.Control
                  type="date"
                  name="appliedAt"
                  value={formData.appliedAt}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formGroupEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="skillDescription"
                  placeholder="Write description"
                  value={formData.skillDescription}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="col-8" variant="success" type="submit">
                Submit
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobApplication;
