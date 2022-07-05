import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {   
    return (
    <footer className="">
        
        <Navbar fixed="bottom" expand="lg" variant="light" bg="danger">
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Boris V</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
        
        {/* <a href="" target="_blank" rel="noreferrer"><img src={require("")} alt="Github icon"></img></a>
        <a href="" target="_blank" rel="noreferrer"><img src={require("")} alt="LinkedIn icon"></img></a>
        <a href="" rel="noreferrer"><img src={require("")} alt="Email icon"></img></a> */}
    </footer>
    )
}

export default Footer;