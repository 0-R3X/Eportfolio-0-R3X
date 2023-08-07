import React from 'react';

const NavItem = ({ targetSection, active, handleClick }) => {
  return (
    <li>
      <a href={`#${targetSection}`} className={active ? 'active' : ''} onClick={() => handleClick(targetSection) }>
        {targetSection}
      </a>
    </li>
  );
};

export default NavItem;
