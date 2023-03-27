import React from 'react'
import { pageLinks } from '../data'
import logo from '../img/logo.svg';
import { socialLinks } from '../data';
import Sociallink from './Sociallink';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* left this comment on purpose  */}
      <PageLinks parentClass="nav-links" itemClass="nav-link" />

      <ul className="nav-icons">
        {socialLinks.map((link) => {
          const {id} = link
          return(
            <Sociallink key={id} {...link} itemClass="nav-icon" />
          )
        })}
        
      </ul>
    </div>
  </nav>

  )
}

export default Navbar;