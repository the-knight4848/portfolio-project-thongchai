"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localeLabels, locales } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/80 p-1"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            locale === code
              ? "bg-emerald-500 text-black"
              : "text-zinc-400 hover:text-white"
          }`}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
