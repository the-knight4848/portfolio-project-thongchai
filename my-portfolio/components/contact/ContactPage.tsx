"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ContactMethodCard } from "./ContactMethodCard";
import {
  EmailIcon,
  GitHubIcon,
  LineIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
} from "./ContactIcons";

export function ContactPage() {
  const { locale, t } = useLanguage();
  const { contact } = t;
  const { labels, openProfile } = contact;
  const methods = buildContactMethods(locale, labels, openProfile);

  return (
    <Section id="contact" title={contact.title}>
      <p className="mb-10 max-w-2xl leading-relaxed text-zinc-400">
        {contact.intro}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <li key={method.key}>
            <ContactMethodCard
              label={method.label}
              value={method.value}
              href={method.href}
              external={method.external}
              icon={method.icon}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function buildContactMethods(
  locale: Locale,
  labels: {
    email: string;
    phone: string;
    line: string;
    linkedin: string;
    github: string;
    location: string;
  },
  openProfile: string,
) {
  const { contact } = site;

  return [
    {
      key: "email",
      label: labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <EmailIcon />,
    },
    {
      key: "phone",
      label: labels.phone,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
      icon: <PhoneIcon />,
    },
    {
      key: "line",
      label: labels.line,
      value: contact.lineId,
      href: contact.lineUrl,
      external: true,
      icon: <LineIcon />,
    },
    {
      key: "linkedin",
      label: labels.linkedin,
      value: openProfile,
      href: site.links.linkedin,
      external: true,
      icon: <LinkedInIcon />,
    },
    {
      key: "github",
      label: labels.github,
      value: openProfile,
      href: site.links.github,
      external: true,
      icon: <GitHubIcon />,
    },
    {
      key: "location",
      label: labels.location,
      value: contact.location[locale],
      icon: <LocationIcon />,
    },
  ];
}
