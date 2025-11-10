import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiSmartphone, 
  FiMonitor, 
  FiSettings, 
  FiTrendingUp, 
  FiMessageCircle 
} from 'react-icons/fi';

const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: var(--surface-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--background-color);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px var(--shadow-color);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
  }
`;

const CTAButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
`;

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FiCode />,
      title: 'Desarrollo Web',
      description: 'Creo sitios web modernos y aplicaciones web completas utilizando las últimas tecnologías.',
      features: [
        'Sitios web responsivos',
        'Aplicaciones web dinámicas',
        'Integración con APIs',
        'Optimización de rendimiento'
      ]
    },
    {
      icon: <FiSmartphone />,
      title: 'Landing Pages',
      description: 'Diseño landing pages de alta conversión optimizadas para generar leads y ventas.',
      features: [
        'Diseño atractivo y moderno',
        'Optimización para conversión',
        'Integración con herramientas de marketing',
        'Análisis de métricas'
      ]
    },
    {
      icon: <FiMonitor />,
      title: 'Soporte Técnico',
      description: 'Servicio completo de soporte técnico y mantenimiento de sistemas informáticos.',
      features: [
        'Mantenimiento preventivo',
        'Resolución de problemas',
        'Actualizaciones de software',
        'Backup y seguridad'
      ]
    },
    {
      icon: <FiSettings />,
      title: 'Desarrollo a Medida',
      description: 'Desarrollo de software personalizado según las necesidades específicas de tu negocio.',
      features: [
        'Análisis de requerimientos',
        'Desarrollo personalizado',
        'Testing y calidad',
        'Documentación completa'
      ]
    },
    {
      icon: <FiTrendingUp />,
      title: 'Automatizaciones',
      description: 'Automatizo procesos repetitivos para mejorar la eficiencia de tu empresa.',
      features: [
        'Análisis de procesos',
        'Scripts de automatización',
        'Integración entre sistemas',
        'Monitoreo y reportes'
      ]
    },
    {
      icon: <FiMessageCircle />,
      title: 'Asesoría en Redes Sociales',
      description: 'Estrategias de marketing digital y posicionamiento en redes sociales.',
      features: [
        'Estrategia de contenido',
        'Gestión de redes sociales',
        'SEO y posicionamiento',
        'Análisis de métricas'
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServicesSection id="services" ref={ref}>
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis Servicios
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Soluciones integrales para hacer crecer tu presencia digital
        </motion.p>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CTAButton
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¿Necesitas alguno de estos servicios?
          </CTAButton>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services; 