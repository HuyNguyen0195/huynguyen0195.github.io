import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink,Nav,NavItem} from 'reactstrap';

function NavBarStrap() {
  return (
    <div >
          <Nav pills >
            <NavItem>
              <NavLink><Link to='/' > Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/gomoku'>AI Gomoku</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to='/mongo'>MongoDB</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/redux' >Redux Store</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/about'>About</Link></NavLink>
            </NavItem>
          </Nav>
    </div>
  );
}

export default NavBarStrap;