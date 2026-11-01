"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import TechnologyIcon from "@/components/TechnologyIcon";
import { portfolioContent, type Language } from "@/lib/data";

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const copy = portfolioContent[language];

  return (
    <main className="shell" lang={language}>
      <aside className="card">
        <div className="card-header">
          <div className="monogram" aria-hidden="true">kp<span>.</span></div>
          <p className="status">
            <span className="dot" aria-hidden="true" /> {copy.profile.status}
          </p>
          <div className="lang-switch" aria-label="Language selector">
            {(["es", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                className={language === lang ? "active" : ""}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <p className="eyebrow">{copy.ui.portfolio}</p>
        <h1>{copy.profile.name}</h1>
        <p className="title">{copy.profile.role}</p>
        <p className="summary">{copy.profile.summary}</p>
        <p className="muted">{copy.profile.location}</p>
        <div className="actions">
          <a className="btn primary" href={copy.profile.cv} download>
            {copy.profile.download}
          </a>
          <a className="btn" href={`https://wa.me/${copy.profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"><TechnologyIcon name="WhatsApp" />{copy.ui.contact} <span aria-hidden="true">↗</span></a>
        </div>
        <ul className="social">
          <li><a href={copy.profile.linkedin} target="_blank" rel="noopener noreferrer"><TechnologyIcon name="LinkedIn" />LinkedIn</a></li>
          <li><a href={copy.profile.github} target="_blank" rel="noopener noreferrer"><TechnologyIcon name="GitHub" />GitHub</a></li>
          <li><a href={`tel:${copy.profile.phone.replace(/[^\d+]/g, "")}`}>{copy.profile.phone}</a></li>
        </ul>
      </aside>
      <section className="content">
        <Tabs language={language} />
      </section>
    </main>
  );
}
