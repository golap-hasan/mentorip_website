"use client"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
  { name: "All Posts", icon: LayoutDashboard },
  { name: "Assignment", icon: FileText },
  { name: "Bangladesh", icon: Globe },
  { name: "Case Study", icon: Search },
  { name: "Design", icon: Palette },
  { name: "DPDT (IP Office) Bangladesh", icon: Building2 },
  { name: "FAQ", icon: HelpCircle },
  { name: "Gallery", icon: ImageIcon },
  { name: "IP Laws and Rules", icon: BookOpen },
  { name: "IP News", icon: Newspaper },
  { name: "IPR Enforcement", icon: ShieldCheck },
  { name: "Journal", icon: FileCode },
  { name: "Patent", icon: Microscope },
  { name: "Trademark", icon: Copyright },
  { name: "Utility Model", icon: Zap }
];

const tags = [
  { name: "Trademark", color: "bg-green-500" },
  { name: "Patent", color: "bg-green-500" },
  { name: "Utility Model", color: "bg-green-500" },
  { name: "Design", color: "bg-green-500" },
  { name: "IPR Enforcement", color: "bg-green-500" },
];

const aiCategories = [
  { name: "Smart Search", icon: Cpu },
  { name: "AI Case Analysis", icon: Database },
  { name: "Auto Filing", icon: Zap },
  { name: "Market Insights", icon: LineChart }
];

export function Sidebar() {
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
              {categories.map((cat, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className={`text-sm py-2 px-4 rounded-md transition-all group flex items-center justify-between border-l-4 ${
                    i === 0 
                      ? "bg-primary/5 font-semibold text-primary border-primary" 
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary border-transparent hover:border-primary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className={`w-4 h-4 ${i === 0 ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                    <span>{cat.name}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded transition-opacity ${
                    i === 0 ? "bg-primary/10 text-primary opacity-100" : "bg-primary/10 text-primary opacity-0 group-hover:opacity-100"
                  }`}>
                    {i === 0 ? "New" : "Explore"}
                  </span>
                </Link>
              ))}
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
              {aiCategories.map((cat, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="text-sm py-2 px-4 rounded-md text-slate-600 dark:text-slate-400 hover:bg-purple-500/5 hover:text-purple-600 dark:hover:text-purple-400 border-l-4 border-transparent hover:border-purple-500 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-4 h-4 text-purple-500" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-[10px] bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">AI</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tags Section */}
        <AccordionItem value="tags" className="border-none">
          <AccordionTrigger className="px-4 hover:no-underline">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tags</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-1 px-4 mt-2">
                {tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 group cursor-pointer transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{tag.name}</span>
                    </div>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator/>
      {/* Footer Info */}
      <div className="pt-8 px-4 text-xs text-slate-400 space-y-2">
         <p>MENTOR IP APP</p>
         <p>@MENTOR IP 2025</p>
      </div>
    </aside>
  );
}
