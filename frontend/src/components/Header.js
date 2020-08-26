import React from 'react';
import { Link } from 'react-router-dom';
import CartNavLink from '../shoppingcart/CartNavLink';

const Header = props => {
  return (
    <header className="header">
      <nav className="navigation">
        

        <span id="logo">ORIGAMI</span>
        <ul className="container">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>

          <li>
            <Link to="/login"> Account </Link>
          </li>
          <li>
            <CartNavLink></CartNavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;