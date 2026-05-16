"use client";

import { EducationSection } from "./EducationSection";
import { ProjectsSection } from "./ProjectsSection";
import { WorkHistorySection } from "./WorkHistorySection";

export function ResumePage() {
  return (
    <>
      <WorkHistorySection />
      <EducationSection />
      <ProjectsSection />
    </>
  );
}
