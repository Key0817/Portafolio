import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Keylor Palacios Gómez | Desarrollador Full Stack",
  description:
    "Portafolio de Keylor Palacios Gómez, desarrollador full stack con Next.js, React, TypeScript y Supabase. Costa Rica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
