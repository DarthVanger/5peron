import { useRef } from 'react';
import './Menu.css';
import { useOutsideClick } from './useOutsideClick';
import logo from './train-station-icon.jpg';
import { SocialLinks } from  '../SocialLinks';

export const Menu = ({ isOpen, onClose }) => {

  const wrapperRef = useRef(null);
  useOutsideClick({ ref: wrapperRef, onClick: onClose });

  if (!isOpen) return null;

  const LinkItem = ({ href, children }) => (
    <li onClick={onClose}>
      <a href={href}>{children}</a>
    </li>
  );

  return (
    <aside ref={wrapperRef}>
      <header>
        <img className="logo" src={logo} alt="railway playform icon" />
        <div className="brand">
          Platform Five
        </div>
        <svg
          className="close-icon" viewBox="0 0 100 100" 
          onClick={onClose}
        >
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="0" y1="100" x2="100" y2="0" />
        </svg>
      </header>
      <ul>
        <LinkItem href="#about">About</LinkItem>
        <LinkItem href="#dear-volunteers">Volunteers</LinkItem>
        <LinkItem href="#unloading-humanitarian-aid">Unloading Aid</LinkItem>
        <LinkItem href="#team">Team</LinkItem>
        <LinkItem href="#community">Community</LinkItem>
        <LinkItem href="#donate">Donate</LinkItem>
      </ul>

      <SocialLinks />
    </aside>
  )
};

