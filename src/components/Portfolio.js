import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const PortfolioSection = styled.section`
  padding: 100px 0;
  background-color: var(--background-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'var(--primary-color)' : 'var(--surface-color)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'var(--secondary-color)' : 'var(--primary-color)'};
    color: white;
    border-color: ${props => props.active ? 'var(--secondary-color)' : 'var(--primary-color)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--surface-color);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px var(--shadow-color);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechnologyTag = styled.span`
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &.github {
    background: var(--surface-color);
    color: var(--text-primary);
    border: 1px solid var(--border-color);

    &:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
  }

  &.demo {
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
    }
  }
`;

const Portfolio = () => {
  const [ref, inView] = useInView({
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
    <PortfolioSection id="portfolio" ref={ref}>
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis Habilidades
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Áreas de especialización y tecnologías que domino
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterContainer>
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterContainer>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsGrid>
              {filteredSkills.map((skill, index) => (
                <ProjectCard
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectImage>
                    {skill.image}
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{skill.title}</ProjectTitle>
                    <ProjectDescription>{skill.description}</ProjectDescription>
                    <ProjectTechnologies>
                      {skill.technologies.map((tech, techIndex) => (
                        <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                      ))}
                    </ProjectTechnologies>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 