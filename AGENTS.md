1. Visión General de la Arquitectura (Architecture Overview)
Este proyecto es una Single Page Application (SPA) de alta conversión diseñada para el sector salud.
• Pila Tecnológica: El desarrollo utiliza Next.js (o React) como framework principal y Tailwind CSS para la gestión del sistema de diseño.
• Estructura de Navegación: La página se organiza en módulos de altura completa (100vh) con un sistema de Snap Scrolling para que cada sección se ajuste automáticamente al desplazar.
• Componentes Clave: Incluye un Header sticky con efecto de vidrio esmerilado (Glassmorphism), un Footer universal y el Agendador Interactivo de 3 Pasos, que es el núcleo de la conversión.
2. Convenciones de Codificación (Coding Conventions)
Para garantizar la calidad y el estilo visual, Jules debe seguir estas reglas:
• Estilo Visual (Claymorfismo): Se deben aplicar formas suaves, grandes esquinas redondeadas (mínimo 24px) y efectos 3D sutiles con sombras internas y externas.
• Paleta de Colores Obligatoria:
    ◦ Azul Marino (#1B3A5F): Títulos de autoridad y confianza clínica.
    ◦ Turquesa (#00B8D4): Acentos, innovación y elementos seleccionados en el agendador.
    ◦ Índigo (#3F51B5): CTAs principales de acción.
    ◦ Fondo: Blanco sólido (#FFFFFF) o gris muy claro (#F8F9FA) para secciones alternas.
• Tipografía y Accesibilidad: Uso exclusivo de fuentes sans-serif (Inter o Montserrat) con alineación siempre a la izquierda para facilitar la lectura. Se debe cumplir estrictamente con la normativa WCAG 2.2 AA.
• Animaciones: Implementar efectos de "scroll discovery" utilizando la librería GSAP con ScrollTrigger.
3. Requisitos de Ejecución y Pruebas (Running Tests)
Jules debe validar sus cambios en la VM segura de Google Cloud siguiendo estos comandos:
• Instalación: Ejecutar npm install para preparar el entorno.
• Validación Técnica: El comando exacto para la suite de pruebas es npm run test.
• Rendimiento: El objetivo es mantener una puntuación de Lighthouse superior a 90 en todas las categorías, optimizando imágenes en formatos WebP o AV1.
4. Flujos de Trabajo Comunes (Common Tasks)
• Creación de Módulos: Cada sección debe ser un componente con min-height: 100vh centrado con Flexbox.
• Mantenimiento del Agendador: Cualquier modificación en el Diagnóstico Estratégico debe respetar la lógica de 3 pasos (Cualificación, Calendario y Confirmación) y las transiciones fluidas de estado.
• Páginas Legales: Al generar o editar Política de Privacidad o Términos de Servicio, es obligatorio heredar el Header y Footer universales para mantener la coherencia del sitio
