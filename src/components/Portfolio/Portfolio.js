import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import './Portfolio.css';
import image1 from './projects/interviewReports.png';
import image2 from './projects/marvelHeroes.png';
import image3 from './projects/bitShow.png';
import image4 from './projects/rickMorty.png';
import image5 from './projects/giphySearch.png';
import image6 from './projects/examStatistics.png';


export const Portfolio = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [animate, setAnimate] = useState(false); 

  const projects = [[image1, "Interview Reports", "https://tijanamilenkovic-interview-reports.netlify.app/","https://github.com/TijanaTicjka/interview-reports.git"],[image2, "Marvel Heroes","https://tijanamilenkovic-marvel-heroes-team.netlify.app/","https://github.com/TijanaTicjka/marvel-heroes-team.git"],[image3, "Bit Show","https://tijanamilenkovic-bit-show.netlify.app/","https://github.com/TijanaTicjka/bit-show.git"],[image4, "Rick And Morty","https://tijanamilenkovic-rick-and-morty.netlify.app/","https://github.com/TijanaTicjka/rick-and-morty.git"],[image5, "Giphy Searcher","https://tijanamilenkovic-giphy-searcher.netlify.app/","https://github.com/TijanaTicjka/giphy-searcher.git"],[image6, "Exam Statistics","https://tijanamilenkovic-exam-statistics.netlify.app/","https://github.com/TijanaTicjka/exam-statistics.git"]]

  const handleEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleLeave = () => {
    setHoveredCardIndex(null);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container fluid>
      <Row className="portfolio d-flex justify-content-center flex-wrap align-items-start">
        <h1 className="text-center m-3 p-3">
          MY <span>PROJECTS</span>
        </h1>
        <Col className="d-flex justify-content-center flex-wrap gap-3 pb-5">
          {projects.map((e, index) => (
            <Card 
              key={index}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
              className={`${
                animate ? 'animate-projects animate-enter' : ''
              } ${hoveredCardIndex === index ? 'hovered' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card.Img src={e[0]} alt="project" />
              <div className="card-overlay">
                <Card.Title className='card-title'>{e[1]}</Card.Title>
                <div className='d-flex gap-3 justify-content-center pt-3'>
                    <Button href={e[2]} target="_blank" rel="noopener noreferrer" className="card-button" variant="outline-info" size="sm">View Demo</Button>
                    <Button href={e[3]} target="_blank" rel="noopener noreferrer" className="card-button" variant="outline-info" size="sm">View Code</Button>
                </div>
              </div>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};