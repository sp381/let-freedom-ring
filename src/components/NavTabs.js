import React from 'react';
import Button from 'react-bootstrap/Button';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contests"
          onClick={() => handlePageChange('Contests')}
          // Check to see if the currentPage is `Contests`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contests' ? 'nav-link active' : 'nav-link'}
        >
          Contests
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Munchers"
          onClick={() => handlePageChange('Munchers')}
          // Check to see if the currentPage is `Munchers`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Munchers' ? 'nav-link active' : 'nav-link'}
        >
          Munchers
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#SignUp"
          onClick={() => handlePageChange('SignUp')}
          // Check to see if the currentPage is `SignUp`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
        >
          SignUp
        </a>
      </li>
      {/* <Button>test</Button> */}
    </ul>
  );
}

export default NavTabs;
