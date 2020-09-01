import React from 'react';
import { Link } from 'react-router-dom';
import CartNavLink from '../shoppingcart/CartNavLink';

const Header = props => {
  return (
    <header className="header">
      <nav className="navigation">
        
        <div className="container d-flex justify-content-between">
        <span id="logo" className="">ORIGAMI</span>
        <ul className="">
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
            <CartNavLink/>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;