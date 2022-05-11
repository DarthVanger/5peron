import { useRef } from 'react';
import './Menu.css';
import { useOutsideClick } from './useOutsideClick';


export const Menu = ({ isOpen, onClose }) => {

  const wrapperRef = useRef(null);
  useOutsideClick({ ref: wrapperRef, onClick: onClose });

  if (!isOpen) return null;

  return (
    <aside ref={wrapperRef}>
      Menu :)
    </aside>
  )
};
