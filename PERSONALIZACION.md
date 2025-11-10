# Guía de Personalización - Portafolio PedroDev

## 🎨 Personalización de Colores

### Cambiar Colores del Tema

Edita el archivo `src/index.css` para cambiar los colores:

```css
:root {
  /* Tema Claro - Cambia estos valores */
  --primary-color: #2563eb;      /* Color principal (azul) */
  --secondary-color: #1e40af;    /* Color secundario (azul oscuro) */
  --accent-color: #3b82f6;       /* Color de acento */
  --background-color: #ffffff;   /* Color de fondo */
  --surface-color: #f8fafc;      /* Color de superficie */
  --text-primary: #1e293b;       /* Color de texto principal */
  --text-secondary: #64748b;     /* Color de texto secundario */
  --text-muted: #94a3b8;         /* Color de texto atenuado */
  --border-color: #e2e8f0;       /* Color de bordes */
  --shadow-color: rgba(0, 0, 0, 0.1); /* Color de sombras */
  
  /* Gradientes - Cambia estos valores */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

[data-theme="dark"] {
  /* Tema Oscuro - Cambia estos valores */
  --primary-color: #3b82f6;      /* Color principal (azul claro) */
  --secondary-color: #60a5fa;    /* Color secundario (azul más claro) */
  --accent-color: #93c5fd;       /* Color de acento */
  --background-color: #0f172a;   /* Color de fondo */
  --surface-color: #1e293b;      /* Color de superficie */
  --text-primary: #f1f5f9;       /* Color de texto principal */
  --text-secondary: #cbd5e1;     /* Color de texto secundario */
  --text-muted: #94a3b8;         /* Color de texto atenuado */
  --border-color: #334155;       /* Color de bordes */
  --shadow-color: rgba(0, 0, 0, 0.3); /* Color de sombras */
}
```

### Paletas de Colores Sugeridas

#### Paleta Azul (Actual)
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #3b82f6;
```

#### Paleta Verde
```css
--primary-color: #059669;
--secondary-color: #047857;
--accent-color: #10b981;
```

#### Paleta Púrpura
```css
--primary-color: #7c3aed;
--secondary-color: #5b21b6;
--accent-color: #8b5cf6;
```

#### Paleta Naranja
```css
--primary-color: #ea580c;
--secondary-color: #c2410c;
--accent-color: #f97316;
```

## 📝 Personalización de Contenido

### Información Personal
Edita `src/components/About.js`:
```javascript
// Cambia la información biográfica
<BioText>
  Soy Pedro Pablo Oyarzún Valdebenito, un desarrollador Full Stack de 25 años...
</BioText>

// Cambia la formación académica
<EducationDegree>Ingeniería en Informática</EducationDegree>
<EducationSchool>INACAP</EducationSchool>
<EducationYear>2020 - 2024</EducationYear>
```

### Habilidades Técnicas
Edita `src/components/Portfolio.js`:
```javascript
const skills = [
  {
    id: 1,
    title: 'Tu Habilidad',
    description: 'Descripción de tu habilidad...',
    technologies: ['Tecnología 1', 'Tecnología 2'],
    category: 'categoria',
    image: '🛠️'
  },
  // Agrega más habilidades...
];
```

### Servicios
Edita `src/components/Services.js`:
```javascript
const services = [
  {
    icon: <FiCode />,
    title: 'Tu Servicio',
    description: 'Descripción del servicio...',
    features: [
      'Característica 1',
      'Característica 2',
      'Característica 3',
      'Característica 4'
    ]
  },
  // Agrega más servicios...
];
```

### Información de Contacto
Edita `src/components/Contact.js`:
```javascript
const contactInfo = [
  {
    icon: <FiMail />,
    title: 'Email',
    text: 'tu@email.com'
  },
  {
    icon: <FiPhone />,
    title: 'Teléfono',
    text: '+56 9 3706 2288'
  },
  {
    icon: <FiMapPin />,
    title: 'Ubicación',
    text: 'Tu Ciudad, Chile'
  }
];
```

### WhatsApp
Edita `src/components/WhatsAppButton.js`:
```javascript
const phoneNumber = '+56937062288'; // Tu número
const message = 'Hola, me interesa tu trabajo...'; // Tu mensaje
```

## 🔧 Personalización Avanzada

### Cambiar Tipografías
En `src/index.css`:
```css
body {
  font-family: 'Tu-Fuente', -apple-system, BlinkMacSystemFont, ...;
}

.section-title {
  font-family: 'Tu-Fuente-Titulos', sans-serif;
}
```

### Cambiar Animaciones
En `src/index.css`:
```css
/* Cambia la duración de las animaciones */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out; /* Cambia 0.6s por 0.8s */
}
```

### Cambiar Espaciado
En `src/index.css`:
```css
.section {
  padding: 100px 0; /* Cambia 80px por 100px */
}

.container {
  max-width: 1400px; /* Cambia 1200px por 1400px */
}
```

## 🎯 Personalización de SEO

### Metadatos
Edita `public/index.html`:
```html
<meta name="description" content="Tu descripción personalizada" />
<meta name="keywords" content="tus, palabras, clave" />
<meta property="og:title" content="Tu Título Personalizado" />
<meta property="og:description" content="Tu descripción para redes sociales" />
```

### Título de la Página
```html
<title>Tu Nombre - Tu Título Profesional</title>
```

## 📱 Personalización Responsiva

### Breakpoints
En `src/index.css`:
```css
/* Cambia los breakpoints si es necesario */
@media (max-width: 768px) {
  /* Estilos para tablets */
}

@media (max-width: 480px) {
  /* Estilos para móviles */
}
```

## 🚀 Personalización de Despliegue

### GitHub Pages
1. Cambia el `homepage` en `package.json`:
```json
{
  "homepage": "https://tu-usuario.github.io/tu-repositorio"
}
```

2. Actualiza los enlaces en `public/index.html`:
```html
<meta property="og:url" content="https://tu-usuario.github.io/tu-repositorio" />
```

## 💡 Consejos de Personalización

### Colores
- Mantén un buen contraste entre texto y fondo
- Usa máximo 3-4 colores principales
- Asegúrate de que funcionen en modo claro y oscuro

### Contenido
- Sé específico con tus habilidades
- Incluye ejemplos concretos
- Mantén la información actualizada

### Imágenes
- Usa imágenes de alta calidad
- Optimiza el tamaño de archivo
- Incluye texto alternativo

### Rendimiento
- Minimiza el uso de animaciones pesadas
- Optimiza las imágenes
- Usa lazy loading cuando sea posible

---

**¡Personaliza tu portafolio para que refleje tu estilo único y profesional!** 