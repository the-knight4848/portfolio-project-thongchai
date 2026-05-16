import type { TimelineItem } from "@/lib/content";

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="relative space-y-8 border-l border-zinc-800 pl-8">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="relative">
          <span
            className="absolute -left-[2.125rem] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-black"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400/90">
            {item.period}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-zinc-400">{item.subtitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
