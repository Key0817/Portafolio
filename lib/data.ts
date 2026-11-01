export type Language = "es" | "en";

export const portfolioContent = {
  es: {
    profile: {
      name: "Keylor Palacios Gómez",
      role: "Desarrollador Full Stack",
      summary:
        "Bachiller en Informática Empresarial. Construyo aplicaciones web con Next.js, React y TypeScript, y servicios backend con APIs REST, autenticación y bases de datos relacionales.",
      location: "Costa Rica",
      email: "palaciosk8321@gmail.com",
      phone: "+(506) 8368-7759",
      linkedin: "https://www.linkedin.com/in/kpg",
      github: "https://github.com/Key0817",
      cv: "/CV_Keylor_Palacios.pdf",
      status: "Disponible para empleo a tiempo completo",
      download: "Descargar CV",
    },
    experience: [
      {
        company: "Arenal Factura",
        role: "Desarrollador Backend · Práctica empresarial supervisada",
        period: "Ago. 2025 – Dic. 2025",
        stack: ["C#", ".NET", "Entity Framework", "SQL Server"],
        points: [
          "Desarrollé funcionalidades backend con lógica de negocio y validaciones de datos.",
          "Resolví incidencias técnicas para mantener estable la aplicación en producción.",
          "Implementé el envío automatizado de correos y diseñé estructuras de datos en SQL Server.",
        ],
      },
      {
        company: "Extremo Sur",
        role: "Desarrollador Full Stack · Proyecto",
        period: "Mar. 2025 – Jul. 2025",
        stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
        points: [
          "Desarrollé de extremo a extremo una plataforma web de reservas turísticas.",
          "Construí un dashboard administrativo con métricas, filtros y exportación a CSV.",
          "Protegí los datos con autenticación, roles y políticas Row Level Security (RLS).",
        ],
      },
      {
        company: "Universidad de Costa Rica",
        role: "Asistente técnico en soporte y mantenimiento · Oficina de Informática",
        period: "Ago. 2024 – Dic. 2025",
        stack: ["Soporte", "Redes", "Hardware"],
        points: [
          "Resolví incidentes de estudiantes y funcionarios, explicando las soluciones a usuarios no técnicos.",
          "Di mantenimiento a equipos de cómputo y de red, y configuré equipos para actividades institucionales.",
        ],
      },
    ],
    projects: {
      jobhunt: {
        name: "JobHunt",
        description: "Aplicación para reunir ofertas de empleo tecnológico y gestionar candidaturas desde un solo lugar, con ranking explicable y documentos personalizados con IA.",
        stack: ["React", "TypeScript", "Python", "FastAPI", "Supabase", "Gemini"],
        highlights: [
          "Recolección multifuente y alertas de Gmail con OAuth",
          "Tablero de candidaturas, filtros y métricas de seguimiento",
          "CV y cartas de presentación con IA y almacenamiento privado",
        ],
        href: "https://github.com/Key0817/jobhunt",
      },
      featured: {
        name: "Extremo Sur",
        description:
          "Plataforma de turismo con reservas, panel de administración, interfaz en español e inglés y gestión de archivos.",
        stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "i18n"],
        highlights: [
          "Roles y permisos con Row Level Security",
          "Dashboard con métricas, filtros y reportes CSV",
          "Archivos en Supabase Storage",
        ],
        href: "https://github.com/Key0817/Extremosur",
      },
      demos: [
        { name: "Front Store PK", note: "Interfaz de tienda en línea", href: "https://frontstorepk.netlify.app" },
        { name: "Festival de Música PK", note: "Landing de evento", href: "https://festival-de-musica-pk.netlify.app" },
        { name: "Freelancer PK", note: "Landing de servicios", href: "https://freelancer-pk.netlify.app" },
        { name: "Blog de Café", note: "Maquetación responsiva", href: "https://zippy-marzipan-79716d.netlify.app" },
      ],
    },
    stack: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vue.js", "React Native"] },
      { group: "Backend", items: ["Node.js", "Express.js", "C#", ".NET", "ASP.NET Core", "APIs REST", "PHP", "Java", "Python"] },
      { group: "Datos", items: ["PostgreSQL", "Supabase", "SQL Server", "MySQL", "MongoDB", "Firestore"] },
      { group: "Cloud y CI/CD", items: ["Git", "GitHub Actions", "Vercel", "Google Cloud", "Azure", "Firebase"] },
      { group: "Seguridad", items: ["Autenticación", "Autorización", "Control por roles", "Row Level Security"] },
      { group: "Prácticas", items: ["Scrum", "Clean Code", "Optimización de rendimiento", "Documentación técnica"] },
    ],
    education: {
      degree: "Bachillerato en Informática Empresarial",
      school: "Universidad de Costa Rica",
      period: "Abr. 2021 – Dic. 2025",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio (B1)" },
      ],
      interest:
        "Me interesan los agentes de IA, los modelos de lenguaje (LLM) y su uso responsable, y quiero crecer junto a ingenieros senior.",
    },
    ui: {
      tabs: [
        { id: "experiencia", label: "Experiencia" },
        { id: "proyectos", label: "Proyectos" },
        { id: "stack", label: "Stack" },
        { id: "formacion", label: "Formación" },
      ],
      viewProject: "Ver proyecto",
      viewCode: "Ver código",
      selectedProjects: "Proyectos seleccionados",
      projectIntro: "De la idea al producto: interfaces, datos y lógica de negocio.",
      portfolio: "Portafolio de desarrollo",
      contact: "Hablemos",
      demos: "Demos frontend",
      languages: "Idiomas",
      interests: "Intereses",
      ariaLabel: "Secciones del portafolio",
    },
  },
  en: {
    profile: {
      name: "Keylor Palacios Gómez",
      role: "Full Stack Developer",
      summary:
        "Bachelor in Business Informatics. I build web applications with Next.js, React and TypeScript, plus backend services with REST APIs, authentication and relational databases.",
      location: "Costa Rica",
      email: "palaciosk8321@gmail.com",
      phone: "+(506) 8368-7759",
      linkedin: "https://www.linkedin.com/in/kpg",
      github: "https://github.com/Key0817",
      cv: "/CV_Keylor_Palacios_EN.pdf",
      status: "Available for full-time employment",
      download: "Download CV",
    },
    experience: [
      {
        company: "Arenal Factura",
        role: "Backend Developer · Supervised business internship",
        period: "Aug. 2025 – Dec. 2025",
        stack: ["C#", ".NET", "Entity Framework", "SQL Server"],
        points: [
          "Developed backend features with business logic and data validation.",
          "Resolved technical incidents to keep the application stable in production.",
          "Implemented automated email sending and designed data structures in SQL Server.",
        ],
      },
      {
        company: "Extremo Sur",
        role: "Full Stack Developer · Project",
        period: "Mar. 2025 – Jul. 2025",
        stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
        points: [
          "Built a tourism reservation platform end to end.",
          "Created an admin dashboard with metrics, filters and CSV export.",
          "Protected data with authentication, roles and Row Level Security (RLS) policies.",
        ],
      },
      {
        company: "University of Costa Rica",
        role: "Technical Support Assistant · Computing Office",
        period: "Aug. 2024 – Dec. 2025",
        stack: ["Support", "Networking", "Hardware"],
        points: [
          "Resolved incidents for students and staff by explaining solutions to non-technical users.",
          "Performed maintenance on computing and network equipment and configured systems for institutional activities.",
        ],
      },
    ],
    projects: {
      jobhunt: {
        name: "JobHunt",
        description: "An application to collect tech job opportunities and manage applications in one place, with explainable ranking and AI-powered personalized documents.",
        stack: ["React", "TypeScript", "Python", "FastAPI", "Supabase", "Gemini"],
        highlights: [
          "Multi-source collection and Gmail alerts with OAuth",
          "Application board, filters and tracking metrics",
          "AI-powered resumes and cover letters with private storage",
        ],
        href: "https://github.com/Key0817/jobhunt",
      },
      featured: {
        name: "Extremo Sur",
        description:
          "Tourism platform with reservations, admin panel, Spanish and English interface, and file management.",
        stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "i18n"],
        highlights: [
          "Roles and permissions with Row Level Security",
          "Dashboard with metrics, filters and CSV reports",
          "Files stored in Supabase Storage",
        ],
        href: "https://github.com/Key0817/Extremosur",
      },
      demos: [
        { name: "Front Store PK", note: "Online store interface", href: "https://frontstorepk.netlify.app" },
        { name: "Festival de Música PK", note: "Event landing page", href: "https://festival-de-musica-pk.netlify.app" },
        { name: "Freelancer PK", note: "Service landing page", href: "https://freelancer-pk.netlify.app" },
        { name: "Café Blog", note: "Responsive mockup", href: "https://zippy-marzipan-79716d.netlify.app" },
      ],
    },
    stack: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vue.js", "React Native"] },
      { group: "Backend", items: ["Node.js", "Express.js", "C#", ".NET", "ASP.NET Core", "REST APIs", "PHP", "Java", "Python"] },
      { group: "Data", items: ["PostgreSQL", "Supabase", "SQL Server", "MySQL", "MongoDB", "Firestore"] },
      { group: "Cloud & CI/CD", items: ["Git", "GitHub Actions", "Vercel", "Google Cloud", "Azure", "Firebase"] },
      { group: "Security", items: ["Authentication", "Authorization", "Role-based access", "Row Level Security"] },
      { group: "Practices", items: ["Scrum", "Clean Code", "Performance optimization", "Technical documentation"] },
    ],
    education: {
      degree: "Bachelor in Business Informatics",
      school: "University of Costa Rica",
      period: "Apr. 2021 – Dec. 2025",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Intermediate (B1)" },
      ],
      interest:
        "I am interested in AI agents, language models (LLMs), their responsible use, and growing alongside senior engineers.",
    },
    ui: {
      tabs: [
        { id: "experiencia", label: "Experience" },
        { id: "proyectos", label: "Projects" },
        { id: "stack", label: "Stack" },
        { id: "formacion", label: "Education" },
      ],
      viewProject: "View project",
      viewCode: "View code",
      selectedProjects: "Selected projects",
      projectIntro: "From idea to product: interfaces, data and business logic.",
      portfolio: "Development portfolio",
      contact: "Let's talk",
      demos: "Frontend demos",
      languages: "Languages",
      interests: "Interests",
      ariaLabel: "Portfolio sections",
    },
  },
} as const;
