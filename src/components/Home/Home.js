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
      <Row className='home'>
        <Col xs={{span:7, offset:1}} sm={{span:6, offset:1}} md={{span:6, offset:1}}lg={{span:6, offset: 1}}xl={{span:7, offset:1}} className={animate ? 'animate' : 'd-flex '}>
          <h5>Hello. My name is</h5>
          <h1><span> TIJANA MILENKOVIĆ</span>.</h1>
          <h3>Frontend Developer</h3>
          <p>I'm deeply passionate about creating beautiful and functional websites.</p> <p>Feel free to browse my portfolio and get in touch!</p> 
          <div className='social mt-5'>
            <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
            <a href="mailto:tijanamilenkovic13@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

