"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { site } from "@/lib/content";
import Image from "next/image";

export function HeroSection() {
  const { t, role } = useLanguage();
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="flex flex-col items-center gap-8 py-20 text-center md:flex-row md:items-start md:py-28 md:text-left">
      <Image
        src={site.heroImage}
        alt={site.name}
        width={180}
        height={180}
        className="rounded-2xl object-cover border border-zinc-700"/>


      <div className="flex-1 space-y-6">
        <div>
          <p className="mb-2 text-zinc-400">{t.hero.greeting}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl text-emerald-400">{role}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href="/resume"
            className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            {t.hero.ctaResume}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            {t.hero.ctaContact}
          </Link>
        </div>
      </div>
    </section>
  );
}
