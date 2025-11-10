import React from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundAnimation}>
        <div className={styles.animatedCircle} style={{ '--delay': '0s', '--duration': '20s', width: '200px', height: '200px', top: '10%', left: '10%' }} />
        <div className={styles.animatedCircle} style={{ '--delay': '5s', '--duration': '25s', width: '150px', height: '150px', top: '60%', right: '15%' }} />
        <div className={styles.animatedCircle} style={{ '--delay': '10s', '--duration': '18s', width: '100px', height: '100px', bottom: '20%', left: '20%' }} />
      </div>

      <div className={styles.heroContent}>
        <h2 className={styles.greeting}>¡Hola! Soy</h2>

        <h1 className={styles.name}>Pedro Pablo Oyarzún</h1>

        <h3 className={styles.title}>Desarrollador Full Stack</h3>

        <p className={styles.description}>
          Especializado en Python, PHP, AWS y desarrollo web. 
          Creo soluciones digitales innovadoras que transforman ideas en realidad.
        </p>

        <button
          className={styles.ctaButton}
          onClick={scrollToAbout}
          type="button"
        >
          Conoce mi trabajo
        </button>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/pedrodev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/pedro-oyarzun"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:pedro@pedrodev.cl"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </div>
      </div>

      <div 
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToAbout()}
        aria-label="Scroll to about"
      >
        <span>Desliza para más</span>
        <div className={styles.arrow}>
          <FiArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
