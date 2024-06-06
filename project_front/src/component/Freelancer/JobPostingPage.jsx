import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Row, Form, Button } from "react-bootstrap";
import axios from "axios";

function JobPostingPage() {
  const navigate = useNavigate();
  const name = window.sessionStorage.getItem("firstName");
  const [formData, setFormData] = useState({
    email: "",
    titel: "",
    description: "",
    skill: "",
    budget: "",
    created_at: "",
    jobId: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.jobId) {
      newErrors.jobId = "JobId is required";
    }
    if (!formData.titel) {
      newErrors.titel = "Title is required";
    }
    if (!formData.description) {
      newErrors.description = "Description is required";
    }
    if (formData.skill === "select your skills") {
      newErrors.skill = "Please select a skill";
    }
    if (!formData.budget) {
      newErrors.budget = "Budget is required";
    }
    if (!formData.created_at) {
      newErrors.created_at = "Created at date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:8080/posting", {
          clientEmail: formData.email,
          jobPosting: [
            {
              jobId: formData.jobId,
              titel: formData.titel, // Corrected typo here
              description: formData.description,
              skillsRequired: formData.skill,
              budget: formData.budget,
              postingAt: formData.created_at,
            },
          ],
        });

        if (!res.data.isError) {
          alert(res.data.message);

          navigate("/Freelancer");
        } else {
          alert("Error occurred: " + res.data.message);
        }
      } catch (error) {
        console.error("Error to post job:", error);
        alert("Failed to post job. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary text-black"
        variant="dark"
      >
        <Container
          className="border mt-15 col-sm-25 col-lg-40 rounded p-15 shadow"
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

              <Link to={"/ApplicationDetails"}>
                <Nav.Link href="#home" className="text-black">
                  Applications_Details
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Link to={"/LogOut"}>
                <Button
                  className="btn btn-outline-success me-2"
                  style={{ color: "black", borderColor: "black" }}
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
        <h4>Welcome {name}</h4>
        JOB POSTING DETAILS
      </p>

      <Container
        className="border mt-4 col-sm-11 col-lg-8 rounded p-4 shadow"
        style={{
          backgroundImage:
            "url('https://images.designtrends.com/wp-content/uploads/2016/03/29095040/White-Geometric-Pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="titel"
                placeholder="Enter your title "
                value={formData.titel}
                onChange={handleChange}
              />
              {errors.titel && (
                <span className="text-danger">{errors.titel}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter your description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <span className="text-danger">{errors.description}</span>
              )}
            </Form.Group>
            <Form.Label>Select your skills</Form.Label>
            <select
              className="form-select"
              aria-label="skill required"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
            >
              <option value="select your skills">Select your skills</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="React">React</option>
              <option value=".Net">.Net</option>
            </select>
            {errors.skill && (
              <span className="text-danger">{errors.skill}</span>
            )}
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>JobId</Form.Label>
                <Form.Control
                  type="text"
                  name="jobId"
                  placeholder="Enter your Id"
                  value={formData.jobId}
                  onChange={handleChange}
                />
                {errors.jobId && (
                  <span className="text-danger">{errors.jobId}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Budget</Form.Label>
                <Form.Control
                  type="text"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
                {errors.budget && (
                  <span className="text-danger">{errors.budget}</span>
                )}
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Created_at</Form.Label>
                <Form.Control
                  type="date"
                  name="created_at"
                  value={formData.created_at}
                  onChange={handleChange}
                />
                {errors.created_at && (
                  <span className="text-danger">{errors.created_at}</span>
                )}
              </Form.Group>
            </Form>
            <Button className="col-8" variant="success" type="submit">
              Submit
            </Button>{" "}
          </Form>
        </Row>
      </Container>
    </>
  );
}

export default JobPostingPage;
