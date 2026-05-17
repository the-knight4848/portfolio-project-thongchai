"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/ui/Section";

export function BioSection() {
  const { t } = useLanguage();

  return (
    <Section id="bio" title={t.bio.title}>
      <div className="space-y-4 text-zinc-300 leading-relaxed">
        {t.bio.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
