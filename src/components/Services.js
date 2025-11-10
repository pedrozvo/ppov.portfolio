import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  FiCode, 
  FiSmartphone, 
  FiMonitor, 
  FiSettings, 
  FiTrendingUp, 
  FiMessageCircle 
} from 'react-icons/fi';
import styles from './Services.module.css';

const Services = () => {
  const [ref, inView] = useIntersectionObserver({
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
    <section id="services" ref={ref} className={styles.servicesSection}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'fade-in-up' : ''}`}>
          Mis Servicios
        </h2>
        
        <p className={`section-subtitle ${inView ? 'fade-in-up' : ''}`}>
          Soluciones integrales para hacer crecer tu presencia digital
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${inView ? styles.fadeInUp : ''}`}
              style={inView ? { animationDelay: `${0.3 + index * 0.1}s` } : {}}
            >
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.serviceFeature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button
            className={styles.ctaButton}
            onClick={scrollToContact}
            type="button"
          >
            ¿Necesitas alguno de estos servicios?
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
