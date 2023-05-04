import { Container, Row, Col, Card} from 'react-bootstrap';
import { useState} from 'react';
import testPhoto from '../Images/testPhoto.jpeg'
import './Portfolio.css';

export const Portfolio = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleEnter = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
  
    return(
        <Container fluid>
            <Row className='portfolio'>
                <h1 className='text-center'>MY <span>PROJECTS</span></h1>
                <Col className='d-flex justify-content-center'>
                    
                    <Card  onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                      <Card.Img src={testPhoto} alt="Card image"  />
                      <div className="card-overlay project-image" style={{ display: isHovered ? 'block' : 'none',}}
                       >
                        <Card.Title>Card title</Card.Title>
                      </div>
                    </Card>
                </Col>
            </Row>
       </Container>

    )
      

    
    

}