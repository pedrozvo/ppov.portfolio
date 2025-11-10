import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const HeartIcon = styled(FiHeart)`
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Pedro Pablo Oyarzún</FooterTitle>
            <FooterText>
              Desarrollador Full Stack apasionado por crear soluciones digitales 
              innovadoras que transforman ideas en realidad.
            </FooterText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/pedrodev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={18} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/pedro-oyarzun"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={18} />
              </SocialLink>
              <SocialLink
                href="mailto:pedro@pedrodev.cl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Servicios</FooterTitle>
            <FooterText>
              Desarrollo web, landing pages, soporte técnico, desarrollo a medida, 
              automatizaciones y asesoría en redes sociales.
            </FooterText>
            <FooterText>
              Tecnologías: Python, PHP, React, AWS, MySQL, PostgreSQL
            </FooterText>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            <span>© {currentYear} Pedro Pablo Oyarzún Valdebenito. Todos los derechos reservados.</span>
            <span>Hecho con <HeartIcon size={14} /> en Chile</span>
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 