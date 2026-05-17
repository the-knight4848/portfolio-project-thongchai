type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-emerald-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
