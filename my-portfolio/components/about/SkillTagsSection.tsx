"use client";

import { Section } from "@/components/ui/Section";

type SkillTagsSectionProps = {
  id: string;
  title: string;
  items: string[];
};

export function SkillTagsSection({ id, title, items }: SkillTagsSectionProps) {
  return (
    <Section id={id} title={title}>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
