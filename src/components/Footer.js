import React from 'react';
import { pageLinks, socialLinks } from '../data';
import Sociallink from './Sociallink';
import PageLinks from './PageLinks';

const Footer = () => { 
  return ( 

    <footer className="section footer">
    <PageLinks parentClass="footer-links" itemClass="footer-link" />    

    <ul className="footer-icons">
      {socialLinks.map((link) => {
        const {id} = link
       return( 
          <Sociallink key={id} {...link} itemClass="footer-icon"/>
      );
      })}
          </ul>
    
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  
  );
}

export default Footer;