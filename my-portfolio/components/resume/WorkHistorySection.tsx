"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { DocumentButton } from "@/components/ui/DocumentButton";
import { Section } from "@/components/ui/Section";
import { TimelineList } from "@/components/ui/TimelineList";
import { site } from "@/lib/content";

export function WorkHistorySection() {
  const { t } = useLanguage();
  const { workHistory } = t.resume;

  return (
    <Section id="work-history" title={workHistory.title}>
      <div className="mb-8">
        <DocumentButton
          href={site.documents.workCertificate}
          label={workHistory.viewCertificate}
        />
      </div>
      <TimelineList items={workHistory.items} />
    </Section>
  );
}
