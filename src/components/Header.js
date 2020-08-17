import React from 'react';
  
const Header = props => {
    return (
      <header className="header">
          <nav className="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/login">login</a></li>
            </ul>
          </nav>
      </header>
    )
}

export default Header;