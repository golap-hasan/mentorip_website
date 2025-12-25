"use client";

import { 
  History, 
  Users, 
  Globe2, 
  Linkedin, 
  Briefcase, 
  ShieldCheck, 
  Scale, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ArrowRight,
  Zap,
  BookOpen,
  Building2,
  FileBadge
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Global Clients", value: "7,000+" },
  { label: "IP Associates", value: "350+" },
  { label: "Global Offices", value: "6" },
];

const timeline = [
  {
    year: "2000",
    title: "The Beginning",
    description: "Founded by Senior Lawyer Dr. Qumrul Hossain as 'Law & Legal,' supporting domestic pharmaceutical clients.",
  },
  {
    year: "2008",
    title: "A New Vision",
    description: "J.A. Chaudhury Reagan joins, introducing modern IP practices and global foundations.",
  },
  {
    year: "2010",
    title: "Global IP Services",
    description: "Started handling international IP filings and trademark portfolio management.",
  },
  {
    year: "2015",
    title: "Transformation",
    description: "Rebranded as 'SUPREMEiP Law Firm,' shifting focus exclusively to Intellectual Property law.",
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Direct liaison offices in UK, UAE, Thailand, India, Malaysia, and Bangladesh.",
  },
];

const offices = [
  { country: "Bangladesh", location: "121 Motijheel C/A (1st Floor), Dhaka-1000", flag: "🇧🇩" },
  { country: "UAE", location: "China Cluster, Building No D06, International City, Dubai", flag: "🇦🇪" },
  { country: "United Kingdom", location: "225A Aldborough Road South, Ilford, Essex", flag: "🇬🇧" },
  { country: "India", location: "C 103/B, 30 Foot Road, Guru Nanak Dev Colony, Delhi", flag: "🇮🇳" },
  { country: "Thailand", location: "Direct Liaison Office - Bangkok", flag: "🇹🇭" },
  { country: "Malaysia", location: "Direct Liaison Office - Kuala Lumpur", flag: "🇲🇾" },
];

const practices = [
  { title: "Trademark Registration", icon: FileBadge },
  { title: "Patent Filing", icon: Zap },
  { title: "Copyright Protection", icon: CopyrightIcon },
  { title: "IPR Enforcement", icon: ShieldCheck },
  { title: "IP Litigation", icon: Scale },
  { title: "Corporate Advisory", icon: Building2 },
];

function CopyrightIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           {/* Animated mesh effect or simple pattern */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-[0.3em] font-black text-xs">
            The SUPREMEiP Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
            PROTECTING <span className="text-primary italic">IDEAS</span>,<br /> 
            EMPOWERING <span className="text-amber-500 dark:text-amber-300">BRANDS</span>.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
            Delivering excellence in Intellectual Property Law Since 2000. 
            A legacy built on integrity, trust, and deep global expertise.
          </p>
          <div className="flex gap-4 pt-4">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900 dark:text-white">25+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Years</span>
             </div>
             <Separator orientation="vertical" className="h-10 bg-slate-200 dark:bg-white/10" />
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900 dark:text-white">7K+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Clients</span>
             </div>
             <Separator orientation="vertical" className="h-10 bg-slate-200 dark:bg-white/10" />
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900 dark:text-white">350+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Associates</span>
             </div>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">WHO WE ARE</h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
              A Legacy of Excellence in Intellectual Property
            </h3>
          </div>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
            <p>
              Our story began in 2000, founded by Senior Lawyer Dr. Qumrul Hossain as “Law & Legal.” 
              Quickly becoming known for specialized pharmaceutical trademark support, we grew on 
              a foundation of trust and integrity.
            </p>
            <p>
              Under the leadership of Mr. J.A. Chaudhury Reagan since 2008, we reshaped our vision, 
              expanding to manage global IP portfolios for major international brands.
            </p>
            <p className="text-slate-900 dark:text-slate-200 decoration-primary/30 underline underline-offset-8">
              Today, SUPREMEiP stands as a premier IP powerhouse in Asia, protecting innovations across continents.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           {stats.map((stat, i) => (
             <Card key={i} className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-[2rem] p-8 space-y-2 group hover:bg-primary hover:border-primary transition-all duration-500 shadow-sm">
               <p className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-white tracking-tighter transition-colors">{stat.value}</p>
               <p className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-white/80 transition-colors">{stat.label}</p>
             </Card>
           ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-4 lg:p-20 overflow-hidden relative border border-slate-100 dark:border-white/5 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 relative p-4">
            <div className="aspect-[4/5] bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-2xl relative group/img">
              <Image 
                src="/Barrister Shaleh Akram Somrat.png" 
                alt="Barrister Shaleh Akram Somrat"
                fill
                className="object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center bg-white/60 dark:bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
                 <p className="text-slate-900 dark:text-white font-black text-base tracking-tight uppercase">Barrister Shaleh Akram Somrat</p>
                 <p className="text-xs text-primary dark:text-amber-400 font-bold uppercase tracking-[0.2em] mt-1.5">Head of Chambers, MentorIP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-8 px-6 lg:px-0">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary dark:text-amber-400">OUR FOUNDER</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                Architect of Global <br />
                <span className="text-primary dark:text-amber-400 font-serif italic text-5xl">IP Strategy</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                Barrister Shaleh Akram Somrat is the founder of MentorIP and is widely recognized for his profound expertise in Intellectual Property (IP) law. A regular contributor to national newspapers and the prestigious <span className="text-slate-900 dark:text-slate-200">Springer international journal</span>, he has authored numerous articles and the book <span className="italic">“The Fundamentals of Legal Drafting and Conveyancing.”</span>
              </p>
              <p>
                With over a decade of experience, he has a proven track record in navigating complex processes of Patent, Copyright, and Trademark registrations, as well as handling high-stakes IP litigation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm group/card hover:border-primary transition-all">
                 <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <p className="text-slate-900 dark:text-white font-bold">Landmark Patent Victory</p>
                    <p className="text-xs text-slate-500 mt-1">First-ever successful appeal leading to Patent Office relaxation of strict time limits.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm group/card hover:border-amber-400 dark:hover:border-amber-400 transition-all">
                 <div className="w-10 h-10 rounded-full bg-amber-400/10 dark:bg-amber-400/20 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                 </div>
                 <div>
                    <p className="text-slate-900 dark:text-white font-bold">IPR Enforcement</p>
                    <p className="text-xs text-slate-500 mt-1">Orchestrated landmark raids protecting global brands like "Parachute" from counterfeiting.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR JOURNEY</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">Milestones of Growth</h3>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-x border-slate-100 dark:border-slate-800 items-center justify-center z-10 shadow-sm group hover:border-primary transition-colors">
                  <span className="text-xs font-black text-slate-400 group-hover:text-primary">{step.year}</span>
                </div>
                
                <div className="md:ml-24 flex-1 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 hover:border-primary/50 transition-all duration-300">
                  <div className="md:hidden mb-4">
                     <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 font-black">{step.year}</Badge>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR NETWORK</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white">Global Presence</h3>
           </div>
           <p className="max-w-md text-slate-500 dark:text-slate-400 font-medium italic">
             Operating through direct liaison offices in key strategic markets to ensure seamless cross-border protection.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {offices.map((office, i) => (
             <Card key={i} className="border border-slate-100 dark:border-transparent bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl">
                        {office.flag}
                      </div>
                      <Globe2 className="w-5 h-5 text-slate-200 dark:text-slate-800 group-hover:text-primary transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-xl font-black text-slate-900 dark:text-white">{office.country}</h4>
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                       {office.location}
                     </p>
                   </div>
                   <Separator className="bg-slate-100 dark:bg-slate-800" />
                   <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
                      <span>Get Directions</span>
                      <ArrowRight className="w-3 h-3" />
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-20 border border-slate-100 dark:border-slate-800 shadow-sm">
         <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">CORE CAPABILITIES</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Comprehensive IP Solutions</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {practices.map((item, i) => (
                 <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center gap-6 group hover:border-primary transition-all shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary transition-colors">
                       <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-black text-slate-800 dark:text-slate-200">{item.title}</span>
                 </div>
               ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/10 text-center space-y-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Need expert legal guidance?</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg max-w-2xl mx-auto">
                  Whether you are protecting your innovation or launching a new business, we are here to help you navigate the legal landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                   <Button size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95">
                      <Phone className="w-4 h-4" />
                      Contact Us Now
                   </Button>
                   <Button variant="outline" size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all">
                      <BookOpen className="w-4 h-4" />
                      View Portfolio
                   </Button>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
