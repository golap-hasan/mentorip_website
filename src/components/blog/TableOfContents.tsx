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
    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-xl border border-slate-100 dark:border-slate-800 p-5 shadow-sm sticky top-24">
      <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-slate-50 dark:border-slate-800/50">
        <List className="w-3.5 h-3.5 text-primary opacity-80" />
        <h3 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Post Outline</h3>
      </div>
      <nav className="space-y-0.5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 px-3 py-1.5 text-[11.5px] rounded-lg transition-all ${
              activeId === item.id
                ? "bg-primary/5 text-primary font-bold"
                : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            {item.icon && <span className="text-sm opacity-90">{item.icon}</span>}
            <span className="truncate">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
