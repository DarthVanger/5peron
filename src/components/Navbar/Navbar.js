import './Navbar.css';
import { useState } from 'react';

import logo from './train-station-icon.jpg';
import MenuSvg from './MenuSvg';
import { Menu } from './Menu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="nav-placeholder"></div>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="brand">
          Platform Five
        </div>
        <div>
          <button
            aria-label="Toggle menu button"
            className="menu-button"
            onClick={openMenu}
          >
            <MenuSvg />
          </button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
