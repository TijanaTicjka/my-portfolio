import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container fluid>
      <Row className='contact'>
        <Col xs={{ span: 10}} className={animate ? 'animate-contact-info' : 'd-flex '}>
          <div className='contact-intro'>
            <p className='contact-info'>Thank you for taking the time to review my portfolio! I can’t wait to work on your projects and bring your vision to life.</p>
            <h3 className='span'> Let's work together to make your projects a success!</h3>
          </div>
          <div className='contact-box'>
          <div className='icons'>
            <div><FontAwesomeIcon icon={faSquarePhone} style={{ fontSize: '4.4em'}} /></div>
            <a href="mailto:tijanamilenkovic13@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '4em' }}/></a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '4.4em' }}/></a>
            <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '4em'}} /></a>
          </div>
          <div className='links'>
            <h5> +381 60 3530 096</h5>
            <a href="mailto:tijanamilenkovic13@gmail.com" className='link-contact'>tijanamilenkovic13@gmail.com </a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/"target="_blank" className='link-contact'rel="noopener noreferrer">tijana-milenkovic13</a>
            <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer" className='link-contact'>TijanaTicjka</a>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};