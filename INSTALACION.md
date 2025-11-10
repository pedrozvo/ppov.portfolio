# Instrucciones de Instalación - Portafolio PedroDev

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

### 1. Node.js y npm
- Descarga e instala Node.js desde: https://nodejs.org/
- Selecciona la versión LTS (Long Term Support)
- npm se instala automáticamente con Node.js

### 2. Git (opcional)
- Para clonar el repositorio: https://git-scm.com/

## Pasos de Instalación

### Opción 1: Clonar desde GitHub
```bash
git clone https://github.com/pedrodev/pedrodev.github.io.git
cd pedrodev.github.io
```

### Opción 2: Usar archivos locales
Si ya tienes los archivos en tu computadora, navega a la carpeta del proyecto.

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en modo desarrollo
```bash
npm start
```

El sitio se abrirá automáticamente en http://localhost:3000

### 5. Construir para producción
```bash
npm run build
```

### 6. Desplegar en GitHub Pages
```bash
npm run deploy
```

## Verificación de Instalación

Para verificar que todo está funcionando correctamente:

1. **Node.js**: `node --version`
2. **npm**: `npm --version`
3. **Dependencias**: Verificar que se creó la carpeta `node_modules/`
4. **Aplicación**: El sitio debe abrirse en el navegador sin errores

## Solución de Problemas

### Error: "npm no se reconoce"
- Reinstala Node.js desde https://nodejs.org/
- Reinicia la terminal/consola
- Verifica que Node.js esté en el PATH del sistema

### Error: "Module not found"
- Elimina la carpeta `node_modules/`
- Elimina el archivo `package-lock.json`
- Ejecuta `npm install` nuevamente

### Error: "Port 3000 is already in use"
- Cambia el puerto: `PORT=3001 npm start`
- O cierra otras aplicaciones que usen el puerto 3000

## Personalización

### Cambiar información personal
1. Edita `src/components/About.js` para tu información
2. Modifica `src/components/Portfolio.js` para tus proyectos
3. Actualiza `src/components/Contact.js` para tu contacto
4. Cambia `src/components/WhatsAppButton.js` para tu WhatsApp

### Cambiar colores
Edita las variables CSS en `src/index.css`:
```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  /* ... */
}
```

### Agregar tu CV
1. Coloca tu CV en formato PDF en `public/`
2. Nómbralo `cv-pedro-oyarzun.pdf`
3. El enlace ya está configurado en el componente About

## Despliegue

### GitHub Pages
1. Crea un repositorio en GitHub
2. Sube el código: `git push origin main`
3. Ejecuta: `npm run deploy`
4. Configura GitHub Pages en la configuración del repositorio

### Otros servicios
- **Netlify**: Arrastra la carpeta `build/` al dashboard
- **Vercel**: Conecta tu repositorio de GitHub
- **Firebase**: Usa Firebase Hosting

## Contacto

Si tienes problemas con la instalación:
- Email: pedro@pedrodev.cl
- GitHub: https://github.com/pedrodev

---

**¡Disfruta tu nuevo portafolio! 🚀** 