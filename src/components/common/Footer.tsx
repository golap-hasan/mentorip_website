"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-slate-100 dark:border-white/5 py-8">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:rotate-12 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
              MENTOR<span className="text-primary italic">IP</span>
            </span>
          </Link>
          <Separator orientation="vertical" className="hidden md:block h-4 bg-slate-200 dark:bg-white/10" />
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            &copy; {currentYear} MENTOR IP LAW FIRM. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Side: Credit */}
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 group/credit cursor-pointer">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Created by</p>
              <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] group-hover:text-primary transition-colors relative">
                SmartEdge Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </div>
        </div>
      </div>
    </footer>
  );
}
