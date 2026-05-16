type ContactMethodCardProps = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
};

export function ContactMethodCard({
  label,
  value,
  href,
  external,
  icon,
}: ContactMethodCardProps) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-emerald-400">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-white">
          {value}
        </span>
      </span>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-zinc-700 hover:bg-zinc-900";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${className} group`}
    >
      {content}
    </a>
  );
}
