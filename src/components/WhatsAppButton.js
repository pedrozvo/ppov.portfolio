import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const WhatsAppButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #128c7e;
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #25d366, #128c7e);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const PulseRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid #25d366;
  border-radius: 50%;
  opacity: 0;
`;

const WhatsAppButtonComponent = () => {
  const phoneNumber = '+56937062288';
  const message = 'Hola Pedro, me interesa tu trabajo como desarrollador Full Stack. ¿Podemos conversar?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppButtonContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <WhatsAppButton
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Contactar por WhatsApp"
      >
        <FiMessageCircle size={24} />
        <PulseRing
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </WhatsAppButton>
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButtonComponent; 