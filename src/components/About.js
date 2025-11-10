import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiMonitor, 
  FiSmartphone, 
  FiTrendingUp,
  FiDownload
} from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: var(--surface-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: var(--background-color);
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary-color);
  font-weight: 700;
`;

const Bio = styled(motion.div)`
  margin-bottom: 2rem;
`;

const BioTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const Education = styled(motion.div)`
  margin-bottom: 2rem;
`;

const EducationTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const EducationItem = styled.div`
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
`;

const EducationDegree = styled.h5`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const EducationSchool = styled.p`
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const EducationYear = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const Skills = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SkillsTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const SkillName = styled.h5`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const CVButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
`;

const About = () => {
  const [ref, inView] = useInView({
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
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras
        </motion.p>

        <Grid>
          <Content>
            <Bio
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BioTitle>Mi Historia</BioTitle>
              <BioText>
                Soy Pedro Pablo Oyarzún Valdebenito, un desarrollador Full Stack de 25 años 
                originario de Chile. Mi pasión por la tecnología comenzó desde muy joven, 
                lo que me llevó a estudiar Ingeniería en Informática en INACAP.
              </BioText>
              <BioText>
                Me especializo en el desarrollo de aplicaciones web modernas, utilizando 
                tecnologías como Python, PHP, React y AWS. Mi enfoque se centra en crear 
                soluciones que no solo funcionen perfectamente, sino que también proporcionen 
                una experiencia de usuario excepcional.
              </BioText>
              <BioText>
                Además del desarrollo, tengo experiencia en soporte técnico, gestión de 
                bases de datos y marketing digital, lo que me permite ofrecer soluciones 
                integrales a mis clientes.
              </BioText>
            </Bio>

            <Education
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <EducationTitle>Formación Académica</EducationTitle>
              <EducationItem>
                <EducationDegree>Ingeniería en Informática</EducationDegree>
                <EducationSchool>INACAP</EducationSchool>
                <EducationYear>2020 - 2024</EducationYear>
              </EducationItem>
              <EducationItem>
                <EducationDegree>Analista Programador</EducationDegree>
                <EducationSchool>INACAP</EducationSchool>
                <EducationYear>2018 - 2020</EducationYear>
              </EducationItem>
            </Education>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CVButton
                href="/cv-pedro-oyarzun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Descargar CV
              </CVButton>
            </motion.div>
          </Content>

          <ImageContainer>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ImagePlaceholder>PP</ImagePlaceholder>
            </ProfileImage>
          </ImageContainer>
        </Grid>

        <Skills
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SkillsTitle>Habilidades Técnicas</SkillsTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Skills>
      </Container>
    </AboutSection>
  );
};

export default About; 