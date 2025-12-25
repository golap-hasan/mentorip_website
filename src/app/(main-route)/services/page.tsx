"use client";

import { 
  ShieldCheck, 
  Zap, 
  Scale, 
  Building2, 
  FileBadge, 
  Shapes, 
  Gavel, 
  CheckCircle2,
  ArrowRight,
  Phone,
  LayoutGrid,
  Search,
  BookOpen,
  Globe2,
  Lock,
  Target,
  FileText,
  Activity,
  Award,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const serviceCategories = [
  {
    title: "Intellectual Property",
    icon: ShieldCheck,
    color: "primary",
    services: [
      { name: "Trademark Registration", desc: "Global protection for brands and logos." },
      { name: "Patent Filing & Strategy", desc: "Securing inventions and new technologies." },
      { name: "Copyright Protection", desc: "Safeguarding creative and literary works." },
      { name: "Industrial Design", desc: "Protecting the visual aesthetics of products." }
    ]
  },
  {
    title: "Litigation & Disputes",
    icon: Scale,
    color: "primary",
    services: [
      { name: "IPR Enforcement", desc: "Anti-counterfeiting and market raids." },
      { name: "Legal Opinions", desc: "Expert assessment of IP validity/infringement." },
      { name: "Dispute Resolution", desc: "Alternative resolution for complex IP conflicts." },
      { name: "IP Litigation", desc: "Strategic representation in court proceedings." }
    ]
  },
  {
    title: "Corporate Advisory",
    icon: Building2,
    color: "primary",
    services: [
      { name: "Company Incorporation", desc: "Business setup for domestic & MNC clients." },
      { name: "Corporate Law", desc: "Comprehensive legal advisory for enterprises." },
      { name: "Licensing & Franchising", desc: "Structuring IP monetization agreements." },
      { name: "Secretarial Support", desc: "Compliance and structural documentation." }
    ]
  },
  {
    title: "Regulatory Services",
    icon: Gavel,
    color: "primary",
    services: [
      { name: "Trade License", desc: "Local business permits and registrations." },
      { name: "IRC / ERC", desc: "Import and Export certificates coordination." },
      { name: "Trade Secret Shield", desc: "Internal policy for protecting confidential info." },
      { name: "Startup Support", desc: "Legal structural aid for emerging innovators." }
    ]
  }
];

const processes = [
  { step: "01", icon: Search, title: "Assessment", desc: "Thorough check of IP uniqueness/viability." },
  { step: "02", icon: FileText, title: "Application", desc: "Precision filing with the respective authorities." },
  { step: "03", icon: Activity, title: "Monitoring", desc: "Constant tracking of legal status and objections." },
  { step: "04", icon: Award, title: "Certification", desc: "Securing the final registration and protection." }
];

export default function ServicesPage() {
  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-950 dark:to-slate-950" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           {/* Animated Mesh Effect */}
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-10">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            Expertise & Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] transition-transform duration-700 group-hover/hero:scale-[1.02]">
            COMPREHENSIVE <span className="text-primary italic">IP</span>,<br /> 
            FOUNDED ON <span className="text-blue-600 dark:text-blue-400">PRECISION</span>.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl italic">
            "Navigating the legal landscape to protect your most valuable assets with global standards."
          </p>
          <div className="flex gap-4">
             <Button size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-xl group/btn overflow-hidden relative active:scale-95 transition-all">
                <span className="relative z-10 flex items-center gap-2">Explore Services <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover/btn:opacity-100 transition-opacity" />
             </Button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR CAPABILITIES</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">World-Class Service Suite</h3>
           </div>
           <p className="max-w-md text-slate-500 dark:text-slate-400 font-medium italic">
             From domestic startups to multinational giants, we provide end-to-end legal and IP lifecycle management.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {serviceCategories.map((cat, i) => (
             <Card key={i} className="group border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/50 rounded-[3rem] p-8 lg:p-12 hover:shadow-[0_20px_50px_rgba(56,189,248,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-1000" />
                
                <div className="relative space-y-8">
                   <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:rotate-[360deg] transition-all duration-700">
                        <cat.icon className="w-8 h-8 text-slate-400 group-hover:text-white" />
                      </div>
                      <LayoutGrid className="w-5 h-5 text-slate-100 dark:text-slate-800" />
                   </div>

                   <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight italic underline decoration-primary/20 underline-offset-[10px]">{cat.title}</h4>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                      {cat.services.map((service, j) => (
                        <div key={j} className="space-y-1.5 group/service cursor-pointer">
                           <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/service:w-4 group-hover/service:bg-primary transition-all duration-300" />
                              <p className="text-sm font-black text-slate-800 dark:text-slate-200 group-hover/service:text-primary transition-colors">{service.name}</p>
                           </div>
                           <p className="text-[11px] text-slate-500 font-medium pl-4 leading-tight group-hover/service:text-slate-600 dark:group-hover/service:text-slate-300 transition-colors uppercase tracking-tight">{service.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] p-12 lg:p-20 border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden group/process">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)', backgroundSize: '40px 40px' }} />
         
         <div className="relative max-w-5xl mx-auto space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">HOW WE WORK</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Our Methodical Approach</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {processes.map((p, i) => (
                 <div key={i} className="relative group/step text-center space-y-6">
                    <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/10 flex items-center justify-center mx-auto shadow-xl group-hover/step:border-primary group-hover/step:rotate-12 group-hover/step:scale-110 transition-all duration-500 relative z-10">
                       <p.icon className="w-8 h-8 text-primary group-hover/step:scale-110 transition-transform" />
                       <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                          {p.step}
                       </div>
                    </div>
                    {i < 3 && <div className="hidden md:block absolute top-12 left-[60%] w-[90%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/5 to-transparent z-0 group-hover/process:scale-x-110 transition-transform origin-left" />}
                    <div className="space-y-2">
                       <h5 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover/step:text-primary transition-colors">{p.title}</h5>
                       <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed px-4 opacity-80 group-hover/step:opacity-100 transition-opacity">{p.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Detailed Services Spotlight */}
      <section className="space-y-12">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 lg:p-14 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl space-y-8 group hover:border-primary/50 hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transition-all duration-500 opacity-0 group-hover:opacity-100" />
               <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-24 h-24 rounded-3xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                     <Globe2 className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                     <Badge className="bg-blue-600/10 text-blue-600 border-0 uppercase tracking-widest text-xs font-black px-4 py-1.5">Strategic Edge</Badge>
                     <h4 className="text-3xl font-black text-slate-900 dark:text-white italic">Global IP Liaison Office</h4>
                     <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg leading-relaxed">
                        With direct liaison offices in the UK, UAE, Thailand, Malaysia, and India, we provide seamless outbound filing and brand management across multiple jurisdictions under a single coordination point.
                     </p>
                  </div>
               </div>
            </div>

            <div className="p-10 lg:p-14 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl space-y-8 group relative overflow-hidden hover:border-primary/50 hover:shadow-primary/5 transition-all duration-500">
               <div className="absolute top-0 right-0 w-1 h-full bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors" />
               <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:-rotate-6 transition-transform">
                     <Lock className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                     <Badge variant="outline" className="border-primary/40 text-primary uppercase tracking-widest text-xs font-black px-4 py-1.5">Privacy & Precision</Badge>
                     <h4 className="text-3xl font-black text-slate-900 dark:text-white italic text-shadow-sm">Full-Spectrum Confidentiality</h4>
                     <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg leading-relaxed">
                        All our legal opinions and administrative appeals are handled with boutique-level attention to detail, ensuring complete security of your intellectual property assets and corporate secrets.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto">
         <div className="bg-slate-50 dark:bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/10 text-center space-y-8 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group/cta">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:scale-[1.01] transition-transform">Ready to Secure Your Innovation?</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg max-w-2xl mx-auto">
               Protect your inventions, brands, and creative outputs with a team that values precision. Contact our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn-cta overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-2">Book Consultation <Phone className="w-4 h-4" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover/btn-cta:opacity-100 transition-opacity" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all">
                    View Portfolio
                </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
