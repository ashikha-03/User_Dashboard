import React from 'react';
import { NavBarContainer, NavLink } from '../styles/styledComponents';  

const Navbar: React.FC = () => (
  <NavBarContainer>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/settings">Settings</NavLink>
  </NavBarContainer>
);

export default Navbar;
