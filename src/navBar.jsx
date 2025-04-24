import React, { useEffect, useState } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setItOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Amandine</div>

      {isMobile && (
        <button className='burger-button' onClick={() => setItOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      )}

      {isMobile && isOpen &&(
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/skills">Compétences</a>
          <a href="/project">Projets</a>
          <a href="/contact">Contact</a>
          <div className="mobile-icons">
            <a href="https://github.com/AmandineGUISY" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/amandine-guisy-developpeur-web-mobile/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      )}


      {!isMobile && (
        <>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
