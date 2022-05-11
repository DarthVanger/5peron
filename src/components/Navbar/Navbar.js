import { useState } from 'react';

import logo from './train-station-icon.jpg';
import MenuIcon from './MenuSvg';
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
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="brand">
          Platform Five
        </div>
        <div className="nav-right">
          <button
            aria-label="Toggle menu button"
            className="menu-button"
            onClick={openMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
