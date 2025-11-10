import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiMonitor, 
  FiSmartphone, 
  FiTrendingUp,
  FiDownload
} from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    {
      icon: <FiCode />,
      name: 'Desarrollo Web',
      description: 'React, JavaScript, HTML5, CSS3, PHP, Python'
    },
    {
      icon: <FiDatabase />,
      name: 'Bases de Datos',
      description: 'MySQL, PostgreSQL, MongoDB, Redis'
    },
    {
      icon: <FiCloud />,
      name: 'Cloud & DevOps',
      description: 'AWS, Docker, CI/CD, Git'
    },
    {
      icon: <FiMonitor />,
      name: 'Soporte Técnico',
      description: 'Mantenimiento, troubleshooting, optimización'
    },
    {
      icon: <FiSmartphone />,
      name: 'Landing Pages',
      description: 'Diseño responsivo, UX/UI, conversión'
    },
    {
      icon: <FiTrendingUp />,
      name: 'Marketing Digital',
      description: 'SEO, redes sociales, posicionamiento web'
    }
  ];

  return (
    <section id="about" ref={ref} className={styles.aboutSection}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'fade-in-up' : ''}`}>
          Sobre Mí
        </h2>
        
        <p className={`section-subtitle ${inView ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras
        </p>

        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={`${styles.bio} ${inView ? styles.fadeInLeft : ''}`}>
              <h3 className={styles.bioTitle}>Mi Historia</h3>
              <p className={styles.bioText}>
                Soy Pedro Pablo Oyarzún Valdebenito, un desarrollador Full Stack de 25 años 
                originario de Chile. Mi pasión por la tecnología comenzó desde muy joven, 
                lo que me llevó a estudiar Ingeniería en Informática en INACAP.
              </p>
              <p className={styles.bioText}>
                Me especializo en el desarrollo de aplicaciones web modernas, utilizando 
                tecnologías como Python, PHP, React y AWS. Mi enfoque se centra en crear 
                soluciones que no solo funcionen perfectamente, sino que también proporcionen 
                una experiencia de usuario excepcional.
              </p>
              <p className={styles.bioText}>
                Además del desarrollo, tengo experiencia en soporte técnico, gestión de 
                bases de datos y marketing digital, lo que me permite ofrecer soluciones 
                integrales a mis clientes.
              </p>
            </div>

            <div className={`${styles.education} ${inView ? styles.fadeInLeft : ''}`}>
              <h4 className={styles.educationTitle}>Formación Académica</h4>
              <div className={styles.educationItem}>
                <h5 className={styles.educationDegree}>Ingeniería en Informática</h5>
                <p className={styles.educationSchool}>INACAP</p>
                <p className={styles.educationYear}>2020 - 2024</p>
              </div>
              <div className={styles.educationItem}>
                <h5 className={styles.educationDegree}>Analista Programador</h5>
                <p className={styles.educationSchool}>INACAP</p>
                <p className={styles.educationYear}>2018 - 2020</p>
              </div>
            </div>

            <div className={`${inView ? styles.fadeInLeft : ''}`}>
              <a
                href="/cv-pedro-oyarzun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvButton}
              >
                <FiDownload />
                Descargar CV
              </a>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={`${styles.profileImage} ${inView ? styles.fadeInScale : ''}`}>
              <div className={styles.imagePlaceholder}>PP</div>
            </div>
          </div>
        </div>

        <div className={styles.skills}>
          <h4 className={styles.skillsTitle}>Habilidades Técnicas</h4>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${styles.skillCard} ${inView ? styles.fadeInUp : ''}`}
                style={inView ? { animationDelay: `${0.6 + index * 0.1}s` } : {}}
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h5 className={styles.skillName}>{skill.name}</h5>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
