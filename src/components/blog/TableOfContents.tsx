"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  icon?: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="bg-card rounded-lg border p-5 shadow-sm sticky top-24">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b">
        <List className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Post Outline</h3>
      </div>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all ${
              activeId === item.id
                ? "bg-primary/5 text-primary font-bold border-l-2 border-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent"
            }`}
          >
            {item.icon && <span className="text-base">{item.icon}</span>}
            <span className="line-clamp-1">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
