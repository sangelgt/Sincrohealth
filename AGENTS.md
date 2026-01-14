SincroHealth AI: Plataforma Vercel-Native
1. Visión General de la Arquitectura (## Architecture Overview)
Este proyecto es una plataforma de salud de alto rendimiento que utiliza un enfoque de Infraestructura como Código (IaC) para asegurar paridad total entre entornos.
• Pila Tecnológica: Next.js 14+ (App Router) con TypeScript en Strict Mode. Se emplea Server-Side Rendering (SSR) para SEO y Static Site Generation (SSG) para contenido estático.
• Estructura del Repositorio:
    ◦ /src/app: Rutas y layouts (App Router).
    ◦ /src/components: Componentes organizados en Atoms, Molecules y Organisms.
    ◦ /src/hooks & /src/lib: Lógica personalizada, configuraciones de Vercel Analytics y Edge Config.
    ◦ /src/styles: Punto de entrada de Tailwind CSS.
• Infraestructura: Despliegue nativo en Vercel Cloud con Fluid Compute (región iad1) para reducir el Cold Start a menos de 100ms.
2. Convenciones de Codificación (## Coding Conventions)
Jules debe seguir estos estándares para garantizar la calidad y seguridad del código:
• Sistema de Diseño: Implementación estricta de Tailwind CSS con estilo Claymorfismo (formas suaves, esquinas de 60px, efectos 3D sutiles) y paleta SincroBlue / Deep Navy.
• Componentes UI: Uso obligatorio de Radix UI o Headless UI para garantizar accesibilidad (WCAG 2.2 AA).
• Validación de Datos: Uso de Zod para esquemas en cliente y servidor (Edge Runtime).
• Animaciones: Empleo de Framer Motion para scroll suave y revelado de tarjetas de métricas mediante Intersection Observer API.
3. Requisitos de Ejecución y Pruebas (## Running Tests)
Esta sección es crítica para evitar fallos de ejecución en la VM de Jules.
• Comando de Instalación: pnpm install (Jules utilizará este comando para preparar el entorno en su VM Ubuntu).
• Comando de Pruebas: pnpm run test (Jules ejecutará este comando para validar cada cambio antes de generar el PR).
• Objetivos de Rendimiento:
    ◦ Meta: 100/100 en Lighthouse.
    ◦ LCP (Largest Contentful Paint): < 1.2s.
    ◦ INP (Interaction to Next Paint): < 200ms utilizando la Transition API de React.
• Cobertura: Se requiere una cobertura mínima de pruebas del 80% para código nuevo.
4. Flujos de Trabajo Comunes (## Common Tasks)
• Actualización de Infraestructura: Modificar vercel.json para cambios en headers de seguridad (CSP) o redirecciones.
• Gestión de Formularios: Asegurar estados de idle, loading (con skeleton) y success en el formulario de diagnóstico.
• Seguridad: Validar la configuración de Vercel WAF y Vercel BotID para la ruta /api/submit-diagnostico.
• Monitoreo: Mantener activos Vercel Speed Insights y Analytics.
