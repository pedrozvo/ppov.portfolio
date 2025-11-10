import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Pedro Pablo Oyarzún</h3>
            <p className={styles.footerText}>
              Desarrollador Full Stack apasionado por crear soluciones digitales 
              innovadoras que transforman ideas en realidad.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/pedrodev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/pedro-oyarzun"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:pedro@pedrodev.cl"
                className={styles.socialLink}
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Servicios</h3>
            <p className={styles.footerText}>
              Desarrollo web, landing pages, soporte técnico, desarrollo a medida, 
              automatizaciones y asesoría en redes sociales.
            </p>
            <p className={styles.footerText}>
              Tecnologías: Python, PHP, React, AWS, MySQL, PostgreSQL
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            <span>© {currentYear} Pedro Pablo Oyarzún Valdebenito. Todos los derechos reservados.</span>
            <span>Hecho con <FiHeart className={styles.heartIcon} size={14} /> en Chile</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
