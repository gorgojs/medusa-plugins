import { cn } from "@/lib/utils";

export type UsedByItem = {
  image: string;
  alt: string;
  name: string;
  href: string;
  displayUrl: string;
  description: string;
};

export type UsedByListProps = {
  items: UsedByItem[];
  className?: string;
};

export function UsedByList({ items, className }: UsedByListProps) {
  return (
    <div className={cn("not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-4", className)}>
      {items.map((item) => (
        <div key={item.href} className="flex items-center gap-2">
          <a href={item.href} target="_blank" rel="noreferrer" className="shrink-0">
            <img src={item.image} width={55} alt={item.alt} className="rounded" />
          </a>
          <div className="flex flex-col gap-[3px]">
            <div className="text-sm font-medium text-ui-fg-base leading-snug truncate">
              {item.name}
            </div>
            <div className="text-sm text-ui-fg-subtle leading-snug pb-1">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--docs-fg-interactive)] hover:text-[color:var(--docs-fg-interactive-hover)] transition-colors decoration-[0.1em]"
              >
                {item.displayUrl}
              </a>
              {" · "}
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
