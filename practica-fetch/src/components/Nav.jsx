import React from "react";
import { Link } from 'react-router-dom';
 
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Use effect</div>
      <ul className="navbar-links">
        <li>
          <Link to="/DragonBall">Dragon Ball</Link>
        </li>
        <li>
          <Link to="/Morty">Rick</Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default Nav;