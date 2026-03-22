import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <FontAwesomeIcon icon={faPaw} className="logo-icon" />
            ZOOLAND
          </Link>
          <p className="footer-text">
            Connecting people with the beauty of the wild. Join our mission to protect and celebrate nature.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/attractions">Attractions</Link></li>
            <li><Link to="/tickets">Tickets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Visit Us</h3>
          <p>123 Safari Trail, Nairobi, Kenya</p>
          <p>Email: hello@zooland.com</p>
          <p>Phone: +254 700 000 000</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zooland Safari. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;