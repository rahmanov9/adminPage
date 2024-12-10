import React, { useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.logo}>MyLogo</div>

        <nav className={s.nav}>
          <ul className={s.menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className={s.rightLogo}>🌐</div>

        <div
          className={`${s.burger} ${menuActive ? s.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuActive && (
        <div className={s.overlay} onClick={toggleMenu}>
          <nav className={s.mobileNav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
