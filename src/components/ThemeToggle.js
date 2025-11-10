import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggleContainer = styled(motion.div)`
  position: fixed;
  top: 100px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 90px;
    right: 20px;
  }
`;

const ThemeToggleButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--shadow-color);

  &:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--shadow-color);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeToggleContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <ThemeToggleButton
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </ThemeToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle; 