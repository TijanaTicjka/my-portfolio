import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
    <Container fluid>
      <Row className='contact'>
        <Col md={{ span: 5}} className={animate ? 'animate-contact-info' : 'd-flex '}>
            <p className='contact-info'>I'm excited to take on new challenges and projects. Feel free to browse my portfolio and get in touch!</p>
            <div className='icons'>
                <a><FontAwesomeIcon icon={faSquarePhone} style={{ fontSize: '5.5em'}} /></a>
                <a href="mailto:tijanamilenkovic13@ygmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '5em' }}/></a>
                <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '5.5em' }}/></a>
                 <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '5em'}} /></a>
            </div>
            <div className='links'>
                <h5> +381 60 3530 096</h5>
                 <a href="mailto:tijanamilenkovic13@ygmail.com" className='link-contact'>tijanamilenkovic13@gmail.com </a>
                <a href="https://github.com/TijanaTicjka" target="_blank" className='link-contact'rel="noopener noreferrer">TijanaTicjka</a>
                <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer" className='link-contact'>Tijana Milenković</a>
             </div>
        </Col>
      </Row>
    </Container>
    )
    
}