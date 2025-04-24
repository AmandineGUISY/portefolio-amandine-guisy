import React from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Amandine</div>
      <ul className="navbar-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/skills">Compétences</a></li>
        <li><a href="/project">Projets</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://github.com/AmandineGUISY" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/amandine-guisy-developpeur-web-mobile/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
