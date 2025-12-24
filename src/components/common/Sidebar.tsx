"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  LayoutDashboard, 
  FileText, 
  Globe, 
  Search, 
  Palette, 
  Building2, 
  HelpCircle, 
  Image as ImageIcon, 
  BookOpen, 
  Newspaper, 
  ShieldCheck, 
  FileCode, 
  Copyright, 
  Zap,
  Microscope,
  Cpu,
  Database,
  LineChart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

const categories = [
  { name: "All Posts", icon: LayoutDashboard, slug: "" },
  { name: "Assignment", icon: FileText, slug: "assignment" },
  { name: "Bangladesh", icon: Globe, slug: "bangladesh" },
  { name: "Case Study", icon: Search, slug: "case-study" },
  { name: "Design", icon: Palette, slug: "design" },
  { name: "DPDT (IP Office) Bangladesh", icon: Building2, slug: "dpdt-bangladesh" },
  { name: "FAQ", icon: HelpCircle, slug: "faq" },
  { name: "Gallery", icon: ImageIcon, slug: "gallery" },
  { name: "IP Laws and Rules", icon: BookOpen, slug: "ip-laws-rules" },
  { name: "IP News", icon: Newspaper, slug: "ip-news" },
  { name: "IPR Enforcement", icon: ShieldCheck, slug: "ipr-enforcement" },
  { name: "Journal", icon: FileCode, slug: "journal" },
  { name: "Patent", icon: Microscope, slug: "patent" },
  { name: "Trademark", icon: Copyright, slug: "trademark" },
  { name: "Utility Model", icon: Zap, slug: "utility-model" }
];

const aiCategories = [
  { name: "Smart Search", icon: Cpu, slug: "smart-search" },
  { name: "AI Case Analysis", icon: Database, slug: "ai-case-analysis" },
  { name: "Auto Filing", icon: Zap, slug: "auto-filing" },
  { name: "Market Insights", icon: LineChart, slug: "market-insights" }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full">
      <Accordion type="multiple" defaultValue={["categories"]} className="w-full">
        {/* Categories List */}
        <AccordionItem value="categories" className="border-none">
          <AccordionTrigger className="px-4 hover:no-underline">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Categories</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 mt-2">
              {categories.map((cat, i) => {
                const href = cat.slug === "" ? "/" : `/category/${cat.slug}`;
                const isActive = pathname === href;
                return (
                  <Link 
                    key={i} 
                    href={href} 
                    className={`text-sm py-2 px-4 rounded-md transition-all group flex items-center justify-between border-l-4 ${
                      isActive
                        ? "bg-primary/5 font-semibold text-primary border-primary" 
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary border-transparent hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                      <span>{cat.name}</span>
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded transition-opacity ${
                      isActive ? "bg-primary/10 text-primary opacity-100" : "bg-primary/10 text-primary opacity-0 group-hover:opacity-100"
                    }`}>
                      {i === 0 ? "New" : "Explore"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* AI Powered Categories */}
        <AccordionItem value="ai" className="border-none">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex items-center gap-2">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Categories</h3>
                <Sparkles className="w-3 h-3 text-purple-500 animate-pulse" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1 mt-2">
              {aiCategories.map((cat, i) => {
                const href = `/ai/${cat.slug}`;
                const isActive = pathname === href;
                return (
                  <Link 
                    key={i} 
                    href={href} 
                    className={`text-sm py-2 px-4 rounded-md border-l-4 transition-all group flex items-center justify-between ${
                      isActive
                        ? "bg-purple-500/5 font-semibold text-purple-600 dark:text-purple-400 border-purple-500" 
                        : "text-slate-600 dark:text-slate-400 hover:bg-purple-500/5 hover:text-purple-600 dark:hover:text-purple-400 border-transparent hover:border-purple-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className={`w-4 h-4 ${isActive ? "text-purple-500" : "text-purple-400"}`} />
                      <span>{cat.name}</span>
                    </div>
                    <span className={`text-[10px] bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>AI</span>
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator className="my-4 opacity-50" />
      {/* Footer Info */}
      <div className="px-4 text-[10px] text-slate-400 space-y-1">
         <p className="font-bold">MENTOR IP APP v1.0</p>
         <p>&copy; MENTOR IP 2025</p>
      </div>
    </aside>
  );
}
