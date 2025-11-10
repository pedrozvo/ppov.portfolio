# Portafolio PedroDev - Pedro Pablo Oyarzún Valdebenito

Portafolio web profesional para Pedro Pablo Oyarzún Valdebenito, desarrollador Full Stack chileno especializado en Python, PHP, AWS y desarrollo web.

## 🚀 Características

- **Diseño Moderno y Responsivo**: Interfaz elegante que se adapta a todos los dispositivos
- **Tema Claro/Oscuro**: Cambio dinámico entre temas con persistencia en localStorage
- **Animaciones Suaves**: Animaciones con Framer Motion para una experiencia fluida
- **Efectos Parallax**: Efectos visuales en la sección Hero
- **Galería de Proyectos**: Portafolio interactivo con filtros por tecnología
- **Formulario de Contacto**: Formulario funcional con validación
- **Botón WhatsApp**: Contacto directo vía WhatsApp
- **SEO Optimizado**: Metadatos y estructura para mejor posicionamiento
- **PWA Ready**: Configurado para funcionar como aplicación web progresiva

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **Styled Components**: Estilos CSS-in-JS
- **Framer Motion**: Animaciones y transiciones
- **React Icons**: Iconografía
- **React Intersection Observer**: Detección de elementos en viewport
- **React Router**: Navegación (preparado para futuras expansiones)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Hero.js            # Sección de presentación
│   ├── About.js           # Información biográfica
│   ├── Portfolio.js       # Galería de proyectos
│   ├── Services.js        # Servicios ofrecidos
│   ├── Contact.js         # Formulario de contacto
│   ├── Footer.js          # Pie de página
│   ├── WhatsAppButton.js  # Botón flotante de WhatsApp
│   └── ThemeToggle.js     # Cambio de tema
├── App.js                 # Componente principal
├── index.js              # Punto de entrada
├── index.css             # Estilos globales
└── reportWebVitals.js    # Métricas de rendimiento
```

## 🎨 Paleta de Colores

### Tema Claro
- **Primario**: #2563eb (Azul)
- **Secundario**: #1e40af (Azul oscuro)
- **Fondo**: #ffffff (Blanco)
- **Superficie**: #f8fafc (Gris muy claro)
- **Texto**: #1e293b (Gris oscuro)

### Tema Oscuro
- **Primario**: #3b82f6 (Azul claro)
- **Secundario**: #60a5fa (Azul más claro)
- **Fondo**: #0f172a (Azul muy oscuro)
- **Superficie**: #1e293b (Gris oscuro)
- **Texto**: #f1f5f9 (Gris claro)

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/pedrodev/pedrodev.github.io.git
   cd pedrodev.github.io
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Desplegar en GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📱 Funcionalidades

### Navegación
- Header fijo con navegación suave
- Menú hamburguesa para móviles
- Navegación por secciones

### Sección Hero
- Efectos parallax en el fondo
- Animaciones de entrada escalonadas
- Enlaces a redes sociales
- Llamado a la acción

### Sobre Mí
- Información biográfica
- Formación académica
- Habilidades técnicas con iconos
- Botón para descargar CV

### Portafolio
- Galería de proyectos con filtros
- Tecnologías utilizadas
- Enlaces a GitHub y demos
- Animaciones de transición

### Servicios
- 6 servicios principales
- Descripción detallada
- Características de cada servicio
- Llamado a la acción

### Contacto
- Formulario funcional
- Información de contacto
- Enlaces a redes sociales
- Validación de campos

### Funcionalidades Adicionales
- Botón flotante de WhatsApp
- Cambio de tema claro/oscuro
- Animaciones al hacer scroll
- Diseño completamente responsivo

## 🔧 Configuración

### Personalización de Contenido

1. **Información Personal**: Editar datos en `src/components/About.js`
2. **Proyectos**: Modificar array de proyectos en `src/components/Portfolio.js`
3. **Servicios**: Actualizar servicios en `src/components/Services.js`
4. **Contacto**: Cambiar información en `src/components/Contact.js`
5. **Redes Sociales**: Actualizar enlaces en múltiples componentes

### Configuración de WhatsApp

Editar en `src/components/WhatsAppButton.js`:
```javascript
const phoneNumber = '+56912345678'; // Tu número de WhatsApp
const message = 'Hola Pedro, me interesa tu trabajo...'; // Mensaje predeterminado
```

### Configuración de GitHub Pages

El proyecto está configurado para desplegar en GitHub Pages. Asegúrate de:

1. Tener el repositorio en `https://github.com/pedrodev/pedrodev.github.io`
2. Ejecutar `npm run deploy` para desplegar
3. Configurar GitHub Pages en la configuración del repositorio

## 📄 CV Descargable

Para incluir un CV descargable:

1. Coloca tu archivo PDF en la carpeta `public/`
2. Actualiza el enlace en `src/components/About.js`:
   ```javascript
   href="/tu-cv.pdf"
   ```

## 🔮 Futuras Mejoras

- [ ] Blog técnico integrado
- [ ] Sistema de comentarios
- [ ] Integración con CMS
- [ ] Analytics avanzado
- [ ] Tests automatizados
- [ ] Optimización de imágenes
- [ ] Cache inteligente

## 📞 Contacto

- **Email**: pedro@pedrodev.cl
- **GitHub**: [@pedrodev](https://github.com/pedrodev)
- **LinkedIn**: [Pedro Oyarzún](https://linkedin.com/in/pedro-oyarzun)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Framework de JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones
- [Styled Components](https://styled-components.com/) - CSS-in-JS
- [React Icons](https://react-icons.github.io/react-icons/) - Iconografía
- [Google Fonts](https://fonts.google.com/) - Tipografías

---

**Desarrollado con ❤️ en Chile por Pedro Pablo Oyarzún Valdebenito** 