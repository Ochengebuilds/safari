import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPaw } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* Logo - Scales automatically */}
        <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
          <FontAwesomeIcon icon={faPaw} className='logo-icon' />
          <span className="logo-text">ZOOLAND</span>
        </Link>

        {/* Hamburger Icon - Only visible on Mobile */}
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        {/* Navigation Menu - Slides in on Mobile */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/attractions' className='nav-links' onClick={closeMobileMenu}>
              Attractions
            </NavLink>
          </li>
          
        </ul>

        {/* Desktop Button - Hidden on Mobile */}
        <div className="nav-btn-desktop">
          <Link to='/tickets' className='btn-ticket-link'>
            GET TICKETS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;