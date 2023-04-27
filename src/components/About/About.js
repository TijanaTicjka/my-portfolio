import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImage from '../Images/me.png';
import reactIcon from '../Images/react.png';
import htmlIcon from '../Images/html5.png';
import cssIcon from '../Images/css3.png';
import sassIcon from '../Images/sass.png';
import bootstrapIcon from '../Images/bootstrap.png';
import javaScriptIcon from '../Images/javascript.png';
import jqueryIcon from '../Images/jquery.png';
import npmIcon from '../Images/npm.png';
import Figure from 'react-bootstrap/Figure';
import { Button } from 'react-bootstrap';

export const About = () => {
    return (
    <Container fluid>
      <Row className="about pb-5">
       <h1 className='m-3 p-3 text-center'>ABOUT <span>ME</span></h1>
      <Col md={{ span: 5}} className='d-flex justify-content-center gap-5'>
        <div className='photo rounded-top'>
          <Figure>
            <Figure.Image className='rounded-top figure-icon'
        width={371}
        height={450}
        alt="Tijana Milenkovic"
        src={myImage}/>
        </Figure>
        </div>
        <Figure.Caption className='gap-3'>
            <a href="https://github.com/TijanaTicjka" target="_blank" rel="noopener noreferrer" className={'link-dark'}><FontAwesomeIcon icon={faGithub} style={{fontSize:"3em"}}  /></a>
            <a href="https://www.linkedin.com/in/tijana-milenkovic-b0402b205/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"3em"}} className={'link-dark'} /></a>
            <a href="mailto:tijanamilenkovic13@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"3em"}} className={'link-dark'} /></a>
          
      </Figure.Caption>
      </Col>
        <Col md={{span:5}}  className='description' >
          <p>I have experience working with JavaScript and the React library to create beautiful web applications.</p>
          <p>I'm excited to take on new challenges and projects. Feel free to browse my portfolio and get in touch!</p>
          <div className='mt-5'>
          <Button variant="outline-info" size="m">Download CV</Button>
          </div>
          
        </Col>
        </Row>
        <Row className='justify-content-center figures'>
          <h1 className='m-3 pb-5 text-center'>MY <span>SKILLS</span></h1>
            <Col md={{ span: 10}} className='justify-content-center '>
              <Figure className='justify-content-center flex-wrap'>
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={htmlIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={cssIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={sassIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={bootstrapIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={javaScriptIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={jqueryIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={reactIcon}
            />
            <Figure.Image className='figure-skills'
              alt="react icon"
              src={npmIcon}
            />
          </Figure>
          </Col>
          </Row>
    </Container>
    )
}