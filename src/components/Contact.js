import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiGithub, 
  FiLinkedin, 
  FiSend,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí normalmente enviarías los datos a un servidor
      console.log('Formulario enviado:', formData);
      
      setMessage({
        type: 'success',
        text: '¡Mensaje enviado con éxito! Te responderé pronto.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      text: 'pedro@pedrodev.cl'
    },
    {
      icon: <FiPhone />,
      title: 'Teléfono',
      text: '+56 9 3706 2288'
    },
    {
      icon: <FiMapPin />,
      title: 'Ubicación',
      text: 'Chile'
    }
  ];

  return (
    <section id="contact" ref={ref} className={styles.contactSection}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'fade-in-up' : ''}`}>
          Contacto
        </h2>
        
        <p className={`section-subtitle ${inView ? 'fade-in-up' : ''}`}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`${styles.infoCard} ${inView ? styles.fadeInLeft : ''}`}
                style={inView ? { animationDelay: `${0.3 + index * 0.1}s` } : {}}
              >
                <div className={styles.infoIcon}>{info.icon}</div>
                <h4 className={styles.infoTitle}>{info.title}</h4>
                <p className={styles.infoText}>{info.text}</p>
              </div>
            ))}

            <div className={inView ? styles.fadeInLeft : ''} style={inView ? { animationDelay: '0.6s' } : {}}>
              <h4 className={styles.infoTitle} style={{ marginBottom: '1rem' }}>Sígueme en redes</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/pedrodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/pedro-oyarzun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:pedro@pedrodev.cl"
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={inView ? styles.fadeInRight : ''} style={inView ? { animationDelay: '0.3s' } : {}}>
              <div className={styles.formContainer}>
                {message && (
                  <div className={`${styles.message} ${styles[message.type]}`}>
                    {message.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Asunto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿En qué puedo ayudarte?"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className={styles.textArea}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    <FiSend />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
