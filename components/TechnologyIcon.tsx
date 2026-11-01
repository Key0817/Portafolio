import type { IconType } from "react-icons";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiVuedotjs, SiNodedotjs, SiExpress, SiDotnet, SiPython, SiPhp,
  SiPostgresql, SiSupabase, SiMysql, SiMongodb, SiFirebase,
  SiGit, SiGithubactions, SiVercel, SiGooglecloud,
} from "react-icons/si";
import {
  FaJava, FaMicrosoft, FaGithub, FaLinkedin, FaWhatsapp,
  FaCode, FaDatabase, FaShieldHalved, FaKey, FaUserShield,
  FaUsersGear, FaArrowsRotate, FaGaugeHigh, FaFileLines,
} from "react-icons/fa6";

const icons: Record<string, IconType> = {
  "Next.js": SiNextdotjs, React: SiReact, TypeScript: SiTypescript,
  JavaScript: SiJavascript, HTML5: SiHtml5, CSS3: SiCss,
  "Vue.js": SiVuedotjs, "React Native": SiReact,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "C#": FaCode,
  ".NET": SiDotnet, "ASP.NET Core": SiDotnet, Python: SiPython,
  "APIs REST": FaCode, "REST APIs": FaCode, PHP: SiPhp, Java: FaJava,
  PostgreSQL: SiPostgresql, Supabase: SiSupabase, "SQL Server": FaDatabase,
  MySQL: SiMysql, MongoDB: SiMongodb, Firestore: SiFirebase,
  Git: SiGit, "GitHub Actions": SiGithubactions, Vercel: SiVercel,
  "Google Cloud": SiGooglecloud, Azure: FaMicrosoft, Firebase: SiFirebase,
  Autenticación: FaKey, Authentication: FaKey,
  Autorización: FaUserShield, Authorization: FaUserShield,
  "Control por roles": FaUsersGear, "Role-based access": FaUsersGear,
  "Row Level Security": FaShieldHalved, Scrum: FaArrowsRotate,
  "Clean Code": FaCode, "Optimización de rendimiento": FaGaugeHigh,
  "Performance optimization": FaGaugeHigh,
  "Documentación técnica": FaFileLines, "Technical documentation": FaFileLines,
  LinkedIn: FaLinkedin, GitHub: FaGithub, WhatsApp: FaWhatsapp,
};

export default function TechnologyIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? FaCode;
  return <Icon className="technology-icon" aria-hidden="true" focusable="false" />;
}
