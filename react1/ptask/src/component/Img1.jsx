import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';


function Img() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1057,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg" alt="Card image" />
      <Card.ImgOverlay  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <Card.Text>
          
          <h2 class="wixui-rich-text__text" style={{letterSpacing:"0.1em",textAlign:"center",font:"70px cinzel,serif"}}>THE ART OF FOOD</h2>
          <h4 style={{textAlign:"center"}}>PHOTOGRAPHY</h4>
         <a href='Viewmore'> <Button variant="outline-secondary"  style={{display:"flex",justifyContent:"center",marginLeft:"300px"}}>View More</Button>{' '}</a>
          
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default Img;