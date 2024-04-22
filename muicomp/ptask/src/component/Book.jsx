import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Books() {
  return (
    <Container>
      <Row>
        <h1>BOOKS</h1>
        <Col xs={6} md={6}>
          <h5 style={{margin:'50px',fontStyle:'italic'}}>BREAKFASTS</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

        <Col xs={6} md={6}>
          <h5 style={{margin:'50px',fontStyle:'italic'}}>SUGAR & SPICE</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

        <Col xs={6} md={6}>
          <h5 style={{margin:'50px',fontStyle:'italic'}}>HOLIDAY SEASON SPECIALS</h5>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <p>40 $</p>
          <button>BUY NOW</button>
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png" rounded/>
        </Col>

      </Row>
    </Container>
  );
}

export default Books;