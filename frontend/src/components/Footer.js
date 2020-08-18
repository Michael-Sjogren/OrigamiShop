import React from 'react';
  
const Footer = props => {
    return (
      <footer className="footer">
          &copy; Michael Sjögren {new Date().getFullYear()}
      </footer>
    )
}

export default Footer;