import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '+56937062288';
  const message = 'Hola Pedro, me interesa tu trabajo como desarrollador Full Stack. ¿Podemos conversar?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.whatsappButtonContainer}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        title="Contactar por WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <FiMessageCircle size={24} />
        <div className={styles.pulseRing}></div>
      </a>
    </div>
  );
};

export default React.memo(WhatsAppButton);
