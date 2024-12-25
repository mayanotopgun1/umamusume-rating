import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css'; // 引入模块化 CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: '首页', path: '/' },
    { name: '排行榜', path: '/ranking' },
    { name: '个人中心', path: '/profile' },
    { name: '评分器', path: '/calculator' },
    { name: '登录', path: '/login' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <h1 className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span role="img" aria-label="horse">🐴</span> 赛马娘评分
          </Link>
        </h1>

        {/* Hamburger Menu */}
        <div className={styles.hamburger}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles.navList} ${
            isOpen ? styles.navListOpen : styles.navListClosed
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className={styles.navItem}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.activeLink : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
