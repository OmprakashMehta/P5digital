import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };


    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={setExpanded}
      className={`header-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img 
            src="src/assets/brand-logo.png" 
            alt="P5 DIGITAL SOLUTIONS" 
            loading="eager"
            className="brand-logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle
  aria-controls="basic-navbar-nav"
  className={`custom-toggler ${expanded ? "navbar-expanded" : ""}`}
>
  <span className="toggler-icon"></span>
</Navbar.Toggle>

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              onClick={handleNavClick}
              className="nav-link"
            >
              HOME
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/about"
              onClick={handleNavClick}
              className="nav-link"
            >
              ABOUT
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/services"
              onClick={handleNavClick}
              className="nav-link"
            >
              SERVICES
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/blog"
              onClick={handleNavClick}
              className="nav-link"
            >
              BLOG
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/career"
              onClick={handleNavClick}
              className="nav-link"
            >
              CAREER
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/talk-to-us"
              onClick={handleNavClick}
              className="nav-link"
            >
              TALK TO US
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Header;