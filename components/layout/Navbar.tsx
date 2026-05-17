"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/content";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { key: "about" as const, href: "/" },
  { key: "resume" as const, href: "/resume" },
  { key: "contact" as const, href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white transition-colors hover:text-emerald-400"
        >
          <ProfileAvatar size="sm" />
          <span>{site.name}</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-emerald-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}
        </div>

        <LanguageToggle />
      </nav>
    </header>
  );
}
