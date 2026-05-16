"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { BioSection } from "./BioSection";
import { HeroSection } from "./HeroSection";
import { SkillTagsSection } from "./SkillTagsSection";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />
      <BioSection />
      <SkillTagsSection
        id="primary-skills"
        title={t.primarySkills.title}
        items={t.primarySkills.items}
      />
      <SkillTagsSection
        id="secondary-skills"
        title={t.secondarySkills.title}
        items={t.secondarySkills.items}
      />
    </>
  );
}
