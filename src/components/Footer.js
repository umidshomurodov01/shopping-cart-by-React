import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer #004d40 teal darken-4'>
       <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
            </div>
          </div>
      </footer>
  );
};

export default Footer;