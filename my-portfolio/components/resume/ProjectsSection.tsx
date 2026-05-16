"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/ui/Section";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { projects } = t.resume;

  return (
    <Section id="projects" title={projects.title}>
      <ul className="grid gap-6">
        {projects.items.map((project) => (
          <li
            key={project.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target={project.demoUrl.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.demoUrl.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
                >
                  {projects.viewDemo}
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  {projects.viewRepo}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
