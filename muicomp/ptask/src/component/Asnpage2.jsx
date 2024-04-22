import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
// import camera_img from "../assets/image/camera.jpg"
// import glass_img from "../assets/image/glass.jpg"
// import water_image from "../assets/image/water.jpeg"


const Asnpage2 = () => {
  
  return (
    
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      

        <Navbar.Brand href="#home">Bizland.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>            
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#"><a href='#'>Team</a></Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div>      
        <div className='mt-4'> <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '90px' }} size="sm">
       <b>Portfolio</b>
      </Button> </div>
      <Container className="my-5" >
        <h1>Check our  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Portfolio</a> </h1>
        <p>

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          tenetur quibusdam dolorum vel beatae facilis architecto quasi amet
          laborum saepe.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className=" text-center">
              <div className="card-body">
              <img src='https://vijayoptica.com/wp-content/uploads/2020/01/82795283_2633057296815606_4329926538788077568_o.jpg' width={"320px"} href='images' />
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" text-center">
              <div className="card-body">
                <img src='https://c4.wallpaperflare.com/wallpaper/795/368/874/background-camera-sony-nex-7-golden-brown-edition-wallpaper-preview.jpg' width={"320px"} href='images' />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" text-center">
              <div className="card-body">
              <img src='https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1300/public/drink-more-water-hub.jpg' width={"320px"} href='images' />
               
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>

      <footer className="bg-light py-3">
        <Container>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Bizland. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Asnpage2;