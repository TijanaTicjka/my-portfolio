import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className={animate ? 'animate' : 'd-flex '}>
          <h5>HI THERE!</h5>
          <h1>I'm<span> TIJANA,</span></h1> 
          <p>a junior frontend developer based in Belgrade, Serbia.
             I have experience working with JavaScript and the React library to create beautiful web applications.</p>
          <p>I recently graduated from a Frontend Bootcamp at the Belgrade Institute  of Technology, where I gained valuable experience and knowledge in front-end development.I'm always looking to learn and grow as a developer.</p>
          <p>I'm excited to take on new challenges and projects. Feel free to browse my portfolio and get in touch!"</p> 
          <div className='social mt-3'>
            <a href="https://github.com/TijanaTicjka" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
            <a href="mailto:tijanamilenkovic13@ygmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

