"use client";

import { useState } from "react";
import TechnologyIcon from "@/components/TechnologyIcon";
import { portfolioContent, type Language } from "@/lib/data";

type TabId = "experiencia" | "proyectos" | "stack" | "formacion";

function Chips({ items, icons = false }: { items: readonly string[]; icons?: boolean }) {
  return (
    <ul className="chips">
      {items.map((i) => (
        <li key={i}>{icons && <TechnologyIcon name={i} />}{i}</li>
      ))}
    </ul>
  );
}

export default function Tabs({ language }: { language: Language }) {
  const copy = portfolioContent[language];
  const tabs = copy.ui.tabs as readonly { id: TabId; label: string }[];
  const [active, setActive] = useState<TabId>("experiencia");

  const onKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (idx + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setActive(tabs[next].id);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={copy.ui.ariaLabel} className="tablist">
        {tabs.map((t, idx) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, idx)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="panel" key={active}>
        {active === "experiencia" && (
          <ol className="timeline">
            {copy.experience.map((e) => (
              <li key={e.company}>
                <div className="row">
                  <h2>{e.company}</h2>
                  <span className="muted">{e.period}</span>
                </div>
                <p className="role">{e.role}</p>
                <ul className="points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Chips items={e.stack} />
              </li>
            ))}
          </ol>
        )}

        {active === "proyectos" && (
          <>
            <header className="section-heading">
              <p className="eyebrow">{copy.ui.selectedProjects}</p>
              <p className="muted">{copy.ui.projectIntro}</p>
            </header>
            <div className="project-list">
              {[copy.projects.jobhunt, copy.projects.featured].map((project, index) => (
                <article className={`featured project-card ${index === 0 ? "project-primary" : ""}`} key={project.name}>
                  <div className="project-heading">
                    <span className="project-number" aria-hidden="true">0{index + 1}</span>
                    <h2>{project.name}</h2>
                    <span className="project-mark" aria-hidden="true">{index === 0 ? "↗" : "↘"}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="points">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <Chips items={project.stack} />
                  {project.href && (
                    <a className="link" href={project.href} target="_blank" rel="noopener noreferrer">
                      {copy.ui.viewCode} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
            <h3 className="sub">{copy.ui.demos}</h3>
            <ul className="demos">
              {copy.projects.demos.map((d) => (
                <li key={d.name}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer">
                    <strong>{d.name}</strong>
                    <span className="muted">{d.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {active === "stack" && (
          <dl className="stack">
            {copy.stack.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <Chips items={s.items} icons />
                </dd>
              </div>
            ))}
          </dl>
        )}

        {active === "formacion" && (
          <div className="edu">
            <div className="row">
              <h2>{copy.education.degree}</h2>
              <span className="muted">{copy.education.period}</span>
            </div>
            <p className="role">{copy.education.school}</p>
            <h3 className="sub">{copy.ui.languages}</h3>
            <ul className="points">
              {copy.education.languages.map((l) => (
                <li key={l.name}>
                  {l.name}: {l.level}
                </li>
              ))}
            </ul>
            <h3 className="sub">{copy.ui.interests}</h3>
            <p>{copy.education.interest}</p>
          </div>
        )}
      </div>
    </div>
  );
}
