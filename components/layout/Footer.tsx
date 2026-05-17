"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/content";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {site.name}. {t.footer.rights}
        </p>
        <div className="flex gap-4">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-emerald-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
