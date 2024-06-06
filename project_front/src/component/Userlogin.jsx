import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [freelancerEmail, setFreelancerEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!freelancerEmail.trim()) {
      errors.freelancerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(freelancerEmail)) {
      errors.freelancerEmail = "Email is invalid";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!birthDate) {
      errors.birthDate = "Birth Date is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:8080/freelancer", {
          firstName, lastName, phone, freelancerEmail, gender, dateOfBirth: birthDate, password
        });
        if (res.data.error) {
          setErrors({ common: res.data.message });
        } else {
          setErrors({});
          if (res.data.message === "Client Record Inserted") {
            alert(res.data.message);
            navigate('/Freelancer');
          } else {
            alert('freelancer registration Successfull');
            navigate('/Freelancer');
            setErrors({ common: 'Username is not unique. Please choose another.' });
          }
        }
      } catch (error) {
        console.error("Error to register:", error);
        setErrors({ common: 'Failed to register. Please try again later.' });
      }
    }
  };

  return (
    <>
      <p className='text-center' id="reg1" style={{ fontFamily: 'Arial', fontSize: '25px',
       fontWeight: 'bold', marginTop: '5px', marginBottom: '5px' }}>
        FREELANCER REGISTER PAGE</p>
      <Container className="border mt-5 col-sm-11 col-lg-8 rounded p-4 shadow"
       style={{ backgroundImage: "url('https://images.designtrends.com/wp-content/uploads/2016/03/29095040/White-Geometric-Pattern.jpg')",
       backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Row>
          <Col sm={12} md={8} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <Form.Text className="text-danger">{errors.firstName}</Form.Text>}
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <Form.Text className="text-danger">{errors.phone}</Form.Text>}
              </Form.Group>
              
              <Form.Group className="mb-1" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
                {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
              </Form.Group>
            </Form>
          </Col>

          <Col sm={15} md={10} lg={15}>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="xyz@gmail.com" value={freelancerEmail} onChange={(e) => setFreelancerEmail(e.target.value)} />
                {errors.freelancerEmail && <Form.Text className="text-danger">{errors.freelancerEmail}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="birthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="date" placeholder="Enter your birth date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                {errors.birthDate && <Form.Text className="text-danger">{errors.birthDate}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword}</Form.Text>}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        
        {errors.common && <p className="text-danger">{errors.common}</p>}
        <Button className='col-6' variant="success" onClick={handleSubmit}>Register</Button>
      </Container>
    </>
  )
}

export default RegistrePage;
