import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {   
    return (
    <footer className="">
        
        <Navbar fixed="bottom" expand="lg" variant="light">
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Made by Boris, Carter, Oscar and Sarah
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar> 
    </footer>
    )
}

export default Footer;