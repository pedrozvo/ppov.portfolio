import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('todos');

  const skills = [
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos y aplicaciones web completas con las últimas tecnologías del mercado.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Python'],
      category: 'web',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Análisis de Datos',
      description: 'Análisis estadístico y visualización de datos utilizando herramientas profesionales como RStudio y Python.',
      technologies: ['R', 'RStudio', 'Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      category: 'data',
      image: '📊'
    },
    {
      id: 3,
      title: 'Bases de Datos',
      description: 'Diseño, implementación y optimización de bases de datos relacionales y NoSQL para aplicaciones empresariales.',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
      category: 'database',
      image: '🗄️'
    },
    {
      id: 4,
      title: 'Cloud Computing',
      description: 'Despliegue y gestión de aplicaciones en la nube con servicios AWS y herramientas de DevOps.',
      technologies: ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux'],
      category: 'cloud',
      image: '☁️'
    },
    {
      id: 5,
      title: 'Automatización',
      description: 'Desarrollo de scripts y herramientas para automatizar procesos repetitivos y mejorar la eficiencia.',
      technologies: ['Python', 'Bash', 'Cron', 'APIs', 'Web Scraping'],
      category: 'automation',
      image: '⚡'
    },
    {
      id: 6,
      title: 'Marketing Digital',
      description: 'Estrategias de posicionamiento web, gestión de redes sociales y análisis de métricas digitales.',
      technologies: ['SEO', 'Google Analytics', 'Redes Sociales', 'Content Marketing'],
      category: 'marketing',
      image: '📈'
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'data', label: 'Análisis de Datos' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'automation', label: 'Automatización' },
    { id: 'marketing', label: 'Marketing Digital' }
  ];

  const filteredSkills = activeFilter === 'todos' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className={styles.portfolioSection}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'fade-in-up' : ''}`}>
          Mis Habilidades
        </h2>
        
        <p className={`section-subtitle ${inView ? 'fade-in-up' : ''}`}>
          Áreas de especialización y tecnologías que domino
        </p>

        <div className={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid} key={activeFilter}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`${styles.projectCard} ${inView ? styles.fadeInUp : ''}`}
              style={inView ? { animationDelay: `${0.3 + index * 0.1}s` } : {}}
            >
              <div className={styles.projectImage}>
                {skill.image}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{skill.title}</h3>
                <p className={styles.projectDescription}>{skill.description}</p>
                <div className={styles.projectTechnologies}>
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.technologyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
