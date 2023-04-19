import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Header.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export const Header = () => {
  const [activeKey, setActiveKey] = useState('home');
  const navigate = useNavigate();

  const handleSelect = (key) => {
    setActiveKey(key);
    console.log(activeKey);
    navigate(`${key!== 'home' ?`/${key}`: `/`}`);
  };

  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand/>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton/>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Tabs activeKey={activeKey} onSelect={handleSelect}
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="home" title="HOME"/>
                  <Tab eventKey="about" title="ABOUT"/>
                  <Tab eventKey="portfolio" title="PORTFOLIO"/>
                  <Tab eventKey="contact" title="CONTACT"/>
                </Tabs>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}












