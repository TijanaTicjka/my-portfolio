import { Container, Row, Col, Figure, Button } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImage from './assets/me.png';
import reactIcon from './assets/react.png';
import htmlIcon from './assets/html5.png';
import cssIcon from './assets/css3.png';
import sassIcon from './assets/sass.png';
import bootstrapIcon from './assets/bootstrap.png';
import javaScriptIcon from './assets/javascript.png';
import jqueryIcon from './assets/jquery.png';
import npmIcon from './assets/npm.png';

export const About = () => {

  const skills = [htmlIcon, cssIcon, bootstrapIcon,sassIcon, javaScriptIcon, jqueryIcon, reactIcon, npmIcon ];
  
  return (
    <Container fluid>
      <Row className="about justify-content-center align-items-center pb-5">
        <h1 className='m-3 p-3 text-center'>ABOUT <span>ME</span></h1>
        <Col sm={{span:8}} lg={{ span: 5}} className='d-flex justify-content-center mb-3'>
          <div className='photo rounded-top'>
            <Figure>
              <Figure.Image className='rounded-top figure-icon'
               width={371}
               height={450}
               alt="Tijana Milenkovic"
               src={myImage}/>
            </Figure>
          </div>
        </Col>
        <Col  lg={{span:1}} className='d-flex justify-content-center flex-row flex-sm-column'>
          <Figure.Caption className='d-flex justify-content-center align-item-center gap-3'>
            <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer" className={'link-dark'}><FontAwesomeIcon icon={faGithub} style={{fontSize:"3em"}}  /></a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"3em"}} className={'link-dark'} /></a>
            <a href="mailto:tijanamilenkovic13@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"3em"}} className={'link-dark'} /></a>
          </Figure.Caption>
        </Col>
        <Col sm={{span:8}} lg= {{span:5}} className='description d-flex justify-content-center align-items-center flex-column pt-3' >
          <p>Welcome to my "About Me" page! I'm an aspiring frontend developer with hands-on experience in JavaScript and React.</p>
          <p>My love of frontend development comes from my appreciation for design, coding, and problem-solving.I'm always eager to learn and grow as a developer and be a dedicated developer as a part of team.</p>
          <p> Thank you for considering me for your next project. Feel free to download my CV below to learn more about my skills and experience.</p>
          <div className='mt-3 d-flex justify-content-left col-12'>
            <a href={require("./assets/CV_TijanaMilenković.pdf")} download>
            <Button variant="outline-info" size="m" >Download CV</Button></a>
          </div>
        </Col>
        </Row>
        <Row className='justify-content-center figures'>
          <h1 className='m-3 pb-5 text-center'>MY <span>SKILLS</span></h1>
            <Col sm={{span:10}} lg={{ span: 12}} className='justify-content-center '>
              <Figure className='justify-content-center flex-wrap'>
                {skills.map((e, index) => (
                    <Figure.Image
                    key = {index}
                    alt="icon"
                    src={e}/>
                ))}
              </Figure>
          </Col>
          </Row>
    </Container>
  )
}