import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/TopBar.module.css';

const links = [
  { to: '/', text: 'About' },
  { to: '/education', text: 'Education' },
  { to: '/work', text: 'Work' },
  { to: '/volunteer', text: 'Volunteer' },
  { to: '/animals', text: 'Animals' },
  { to: '/hobbies', text: 'Hobbies' },
  { to: '/projects', text: 'Projects' },
];

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.topbar}>
      <NavLink to="/" className={styles.title} onClick={closeMenu}>
        Selena Lourenco
      </NavLink>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
