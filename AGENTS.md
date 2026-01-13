SincroHealth AI: Plataforma Vercel-Native
1. Visión General de la Arquitectura (## Architecture Overview)
Este proyecto es una plataforma de salud de alto rendimiento construida bajo el paradigma de Infrastructure as Code (IaC) para asegurar paridad total entre entornos.
• Pila Tecnológica: Next.js 14+ (App Router) utilizando TypeScript en Strict Mode. Se emplea Server-Side Rendering (SSR) para SEO y Static Site Generation (SSG) para contenido estático.
• Infraestructura: Despliegue nativo en Vercel Cloud con configuración de Fluid Compute (región iad1) para reducir el Cold Start a menos de 100ms.
• Estructura del Repositorio:
    ◦ /src/app: Rutas y layouts del App Router.
    ◦ /src/components: Componentes organizados en Atoms, Molecules y Organisms.
    ◦ /src/hooks & /src/lib: Lógica personalizada y configuraciones de terceros (Vercel Analytics, Edge Config).
    ◦ /src/styles: Punto de entrada de Tailwind CSS.
2. Convenciones de Codificación (## Coding Conventions)
Jules debe priorizar la estabilidad y el diseño premium siguiendo estos estándares:
• Sistema de Diseño: Implementación estricta de Tailwind CSS basada en variables de CSS (tokens) para la paleta SincroBlue y Deep Navy, con radios de curvatura de 60px.
• Componentes UI: Uso de Radix UI o Headless UI para garantizar la accesibilidad (A11y). El selector de "Pacientes Mensuales" debe ser un componente headless con un Chevron SVG personalizado.
• Validación de Datos: Uso obligatorio de Zod para la validación de esquemas tanto en el cliente como en el servidor (Edge Runtime).
• Animaciones: Empleo de Framer Motion para scroll suave y efectos de revelado. Los contadores de métricas solo deben animarse al entrar en el viewport mediante Intersection Observer API.
3. Requisitos de Ejecución y Pruebas (## Running Tests)
Jules opera en una VM segura y debe validar que el proyecto cumpla con los objetivos de rendimiento.
• Instalación: Utilizar exclusivamente pnpm install.
• Validación de Rendimiento: La meta irrenunciable es 100/100 en Lighthouse. Jules debe verificar que el LCP sea < 1.2s y el INP < 200ms utilizando la Transition API de React.
• Seguridad: Validar la configuración de Vercel WAF y Vercel BotID para proteger la ruta /api/submit-diagnostico.
4. Flujos de Trabajo Comunes (## Common Tasks)
• Actualización de Infraestructura: Cualquier cambio en los headers de seguridad (CSP) o redirecciones debe realizarse en el archivo vercel.json.
• Gestión de Formularios: Al modificar el formulario de diagnóstico, Jules debe asegurar estados claros de idle, loading (con skeleton) y success.
• Monitoreo: Mantener activos Vercel Speed Insights y Vercel Analytics para el rastreo de conversiones sin cookies intrusivas.
