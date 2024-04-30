import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Books() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="#home" style={{ fontSize: '30px', fontFamily:'Quicksand' }} >THE WILD KITCHEN</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

     
        <Nav className="me-auto" style={{ marginLeft: '7%' }}>
          <Nav.Link href="#home" style={{ marginLeft: '7%' }}>Home</Nav.Link>
          <Nav.Link href="#portfolio"style={{ marginLeft: '7%' }}>Portfolio</Nav.Link>
          <Nav.Link href="#about"style={{ marginLeft: '7%' }}>About</Nav.Link>
          <Nav.Link href="#books"style={{ marginLeft: '7%' }}>Books</Nav.Link>
          <Nav.Link href="#blogs"style={{ marginLeft: '7%' }}>Blogs</Nav.Link>
          <Nav.Link href="#albums"style={{ marginLeft: '7%' }}>ClientAlbums</Nav.Link>
          <Nav.Link href="#contact"style={{ marginLeft: '7%' }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
    <Container>
   
      <Row>
      <h1>BOOKS</h1>
        <Col xs={6} md={6}><br></br><br></br>
        <h1>BOOKS</h1>
          <h5 style={{margin:'90px',fontStyle:'italic'}}>BREAKFASTS</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

        <Col xs={6} md={6}>
          <h5 style={{margin:'90px',fontStyle:'italic'}}>SUGAR & SPICE</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

        <Col xs={6} md={6}>
          <h5 style={{margin:'90px',fontStyle:'italic'}}>HOLIDAY SEASON SPECIALS</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

      </Row>
    </Container>
    </>
  );
}

export default Books;