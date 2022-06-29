import './Navbar.css';
import { useState } from 'react';

import logo from './logo_svg.svg';
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
      <nav className="top-nav fixed-nav">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="nav-right">
          <div className="brand">
            Platform Five
          </div>
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
