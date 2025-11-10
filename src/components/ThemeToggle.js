import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className={styles.themeToggleContainer}>
      <button
        onClick={toggleTheme}
        className={styles.themeToggleButton}
        title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        type="button"
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>
    </div>
  );
};

export default React.memo(ThemeToggle);
