import logo from './train-station-icon.jpg';
import MenuSvg from './MenuSvg';

export const Navbar = () => (
  <nav>
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="brand">
      Platform Five
    </div>
    <div className="nav-right">
      <button aria-label="Toggle menu button" className="menu-button">
        <MenuSvg />
      </button>
    </div>
  </nav>
);
