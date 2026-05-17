"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { DocumentButton } from "@/components/ui/DocumentButton";
import { Section } from "@/components/ui/Section";
import { TimelineList } from "@/components/ui/TimelineList";
import { site } from "@/lib/content";

export function EducationSection() {
  const { t } = useLanguage();
  const { education } = t.resume;

  return (
    <Section id="education" title={education.title}>
      <div className="mb-8 flex flex-wrap gap-3">
        <DocumentButton
          href={site.documents.transcript}
          label={education.viewTranscript}
        />
        <DocumentButton
          href={site.documents.diploma}
          label={education.viewDiploma}
        />
      </div>
      <TimelineList items={education.items} />
    </Section>
  );
}
