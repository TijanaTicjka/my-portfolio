import { Container, Nav, Navbar, Offcanvas, Tab, Tabs } from 'react-bootstrap';
import './Header.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export const Header = () => {
  const [activeKey, setActiveKey] = useState('home');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (key) => {
    setActiveKey(key);
    navigate(`${key !== 'home' ? `/${key}` : `/`}`);
    if (showOffcanvas) {
      setShowOffcanvas(false);
    }
  };

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand />
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleToggleOffcanvas} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Tabs activeKey={activeKey} onSelect={handleSelect} id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="HOME" />
                  <Tab eventKey="about" title="ABOUT" />
                  <Tab eventKey="portfolio" title="PORTFOLIO" />
                  <Tab eventKey="contact" title="CONTACT" />
                </Tabs>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
