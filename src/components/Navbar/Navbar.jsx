import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPaw } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-box">
            <FontAwesomeIcon icon={faPaw} className="logo-icon" />
          </div>
          <span className="logo-text">ZOOLAND</span>
        </Link>

        {/* Mobile Toggle */}
        <div className="mobile-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
        </div>

        {/* Navigation Menu */}
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={closeMenu}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/attractions" className="nav-links" onClick={closeMenu}>Attractions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tickets" className="nav-links mobile-only-btn" onClick={closeMenu}>
              Get Tickets
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="nav-btn-wrapper">
          <Link to="/tickets" className="nav-action-btn">GET TICKETS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;