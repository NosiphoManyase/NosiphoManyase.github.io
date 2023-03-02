import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarSet = () => {
  return (
    
    <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto opacity_white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href='#skills_section'>Skills</Nav.Link>
            <Nav.Link  href='#projects_section'>Projects</Nav.Link>
            <Nav.Link  href='#about_section'>About me</Nav.Link>
            <Nav.Link  href='#contact_section'>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarSet