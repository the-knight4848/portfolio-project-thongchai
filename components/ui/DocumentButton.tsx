type DocumentButtonProps = {
  href: string;
  label: string;
};

export function DocumentButton({ href, label }: DocumentButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-emerald-500/50 hover:text-emerald-400"
    >
      <DocumentIcon />
      {label}
    </a>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0 opacity-70"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.414A2 2 0 0 0 17.414 6L14 2.586A2 2 0 0 0 12.586 2H4Zm5 6a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L9 11.586V8Zm-1-4a1 1 0 0 0-1 1v1h4V5a1 1 0 0 0-1-1H8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
