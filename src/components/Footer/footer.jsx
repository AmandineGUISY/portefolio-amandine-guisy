import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <h2>Amandine</h2>
            <p>Copyright - tous droits reservés</p>
            <div className='web-icon'>
                <a href="https://github.com/AmandineGUISY" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/amandine-guisy-developpeur-web-mobile/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;