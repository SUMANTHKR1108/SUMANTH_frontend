import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container className='row-g-12'>
        <Navbar.Brand className='col-6 fw-bold'  href="#home" style={{marginRight:'40px',fontSize:'40px'}}>WIX.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <p style={{marginLeft:'-20px',marginTop:'15px'}}>Click edit and create your own amazing website</p>
            <Nav.Link href="#home" id="opt" style={{textDecoration:'underline', marginTop:'7px'}}>read me</Nav.Link>
            <Button variant="primary" style={{borderRadius:'30px',marginLeft:'16px'}}>Edit this site</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="nav-container d-flex mt-4" style={{ marginLeft:'-15px' }}>
        <h2 style={{color:'grey', marginLeft:'60px'}}>J. ALISSA</h2>
        <div style={{marginLeftleft:'85px'}}>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
        <Nav.Link eventKey="link-1" style={{ color: 'black' ,marginLeft:'400px'}} >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>
      </div>


      <br></br>
    <div className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'90%',marginLeft:'4%'}}>
   
        <Image src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_552,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" alt="" style={{ width: '60%', height:'80vh',filter: 'brightness(60%)'}}/>
          <div style={{ position: 'absolute',fontFamily:'initial',fontStretch:'extra-expanded', 
          fontStyle:'normal',fontWeight:'lighter', top: '50%', left: '75%',width:'50%',height:'185%', 
          transform: 'translate(-50%, -50%)',
           color: 'white', textAlign: 'center' }}>  
            </div>
            <br></br>
            <div class="text" style={{margin:'5%',marginTop:'10%'}}>
      <h2>ABOUT JADE</h2>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
        Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        Feel free to drag and drop me anywhere you like on your page. </p><br></br>
        <p>This is a great space to write long text about your company and your services.<br></br>
           You can use this space to go into a little more detail about your company.</p>
        <br></br>
        <p><h4>Education:</h4></p>
        <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
         It’s easy. Just click “Edit Text” or double click me to <br/>add 
         your own content and make changes to the font.</p>
         <br></br>
         <p><h4>Awards & Nominations:</h4></p>
         <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
             Let your users get to know you.</p>
    </div> 
</div>
    
      

      <div className='IconContainer' style={{marginLeft:'600px'}} >
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '10px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />
    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    </>
  );
}

export default About;