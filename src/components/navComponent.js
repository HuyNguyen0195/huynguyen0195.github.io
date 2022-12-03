import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav,NavItem} from 'reactstrap';

function NavBarStrap() {
  return (
    <div >
          <Nav pills >
            <NavItem>
              <NavLink to='/' > Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/gomoku'>AI Gomoku</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  to='/mongo'>MongoDB</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  to='/redux' >Redux Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  to='/about'>About</NavLink>
            </NavItem>
          </Nav>
    </div>
  );
}

export default NavBarStrap;