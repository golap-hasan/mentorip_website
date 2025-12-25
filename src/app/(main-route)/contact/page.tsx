"use client";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Send, 
  ExternalLink, 
  Star, 
  Globe2, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const offices = [
  {
    country: "Bangladesh Office",
    name: "MentorIP Law Firm",
    person: "J.A. Chaudhury Reagan",
    address: "Jiban Bima Bhaban (1st Floor), 121 Motijheel Commercial Area, Dhaka-1000, Bangladesh",
    phone: "+8801613336333",
    email: "info@mentorip.com",
    icon: MapPin,
    color: "primary"
  },
  {
    country: "UK Office",
    name: "MentorIP Global",
    person: "Barrister Md Shah Alam Faruk, Partner",
    address: "225A Aldborough Road South, Ilford, Essex, IG3 8HZ, United Kingdom",
    phone: "+447514 584701",
    email: "brfaruk@mentorip.com",
    icon: Globe2,
    color: "blue-600"
  },
  {
    country: "UAE Office",
    name: "MENTOR INTELLECTUAL PROPERTY MANAGEMENT L.L.C",
    person: "J.A. Chaudhury Reagan",
    address: "China Cluster, Building No D06, International City, Dubai, UAE",
    phone: "+971567811333",
    email: "info@mentorip.com",
    icon: Zap,
    color: "amber-500"
  },
  {
    country: "India Office",
    name: "MentorIP Global",
    person: "Riya Gupta (Ms.)",
    address: "C 103/B, 30 Foot Road, Near Happy Properties, Guru Nanak Dev Colony, Bhalswa Dairy, Delhi, 110042, India",
    phone: "Contact via Email",
    email: "info@mentorip.com",
    icon: MapPin,
    color: "red-500"
  }
];

export default function ContactPage() {
  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-950 dark:to-slate-950" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            Get In Touch <Sparkles className="w-3 h-3 ml-2" />
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] group-hover/hero:scale-[1.01] transition-transform duration-700">
            WE'RE HERE TO <span className="text-primary italic">HELP</span>.<br /> 
            ANYTIME, <span className="text-blue-600 dark:text-blue-400">ANYWHERE</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl italic">
            "Reach out to MentorIP for expert guidance on trademarks, patents, and all your IP needs globally."
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Contact Info */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR LOCATIONS</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform cursor-default">Global Liaison Offices</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {offices.map((office, i) => (
               <Card key={i} className="group border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${office.color}/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700`} />
                  
                  <div className="space-y-4 relative z-10">
                     <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-primary/20 text-primary font-black text-[10px] uppercase px-3">{office.country}</Badge>
                        <office.icon className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors group-hover:rotate-12" />
                     </div>
                     <div className="space-y-1">
                        <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight italic">{office.name}</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Person: {office.person}</p>
                     </div>
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {office.address}
                     </p>
                     <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                           <Phone className="w-4 h-4" />
                           {office.phone}
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                           <Mail className="w-4 h-4" />
                           {office.email}
                        </div>
                     </div>
                  </div>
               </Card>
             ))}
          </div>

          {/* Quick Connect & Socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card className="rounded-[2.5rem] p-8 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black text-slate-900 dark:text-white relative overflow-hidden group shadow-sm dark:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                         <MessageCircle className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                      <div>
                         <p className="text-lg font-black italic">Hotline & Socials</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Stay Connected 24/7</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors group/item cursor-pointer">
                         <div className="flex items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">WhatsApp</span>
                         </div>
                         <p className="text-sm font-black text-primary">+880 1613 336 333</p>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors group/item cursor-pointer">
                         <div className="flex items-center gap-3">
                            <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">LinkedIn</span>
                         </div>
                         <ExternalLink className="w-4 h-4 text-slate-400 group-hover/item:text-primary transition-colors" />
                      </div>
                   </div>
                </div>
             </Card>

             <Card className="rounded-[2.5rem] p-8 border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-white/10 shadow-sm group hover:shadow-xl transition-all duration-500">
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                         <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                      </div>
                      <div>
                         <p className="text-lg font-black text-slate-900 dark:text-white italic">Client Satisfaction</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted Globally</p>
                      </div>
                   </div>
                   <p className="text-slate-500 dark:text-slate-400 font-medium italic text-sm leading-relaxed">
                      "We’re proud to be trusted by global IP firms, startups, and corporates alike."
                   </p>
                   <div className="pt-2 flex gap-3">
                      <Button variant="outline" className="flex-1 rounded-full text-[10px] font-black uppercase tracking-widest h-11 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800">
                         Read Reviews
                      </Button>
                      <Button className="flex-1 rounded-full text-[10px] font-black uppercase tracking-widest h-11 shadow-lg">
                         Leave a Review
                      </Button>
                   </div>
                </div>
             </Card>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="space-y-8">
           <Card className="lg:sticky lg:top-24 border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-950 rounded-[3rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden group/form">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 opacity-50 transition-opacity group-hover/form:opacity-100" />
              
              <div className="space-y-8 relative z-10">
                 <div className="space-y-2">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white italic underline decoration-primary/20 underline-offset-8">Quick Inquiry</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Typical response: Under 2 hours</p>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">Full Name</label>
                       <Input placeholder="Your Name" className="rounded-2xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-white/5 focus-visible:ring-primary h-14" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">Email Address</label>
                       <Input type="email" placeholder="example@company.com" className="rounded-2xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-white/5 focus-visible:ring-primary h-14" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">Message</label>
                       <Textarea placeholder="How can we assist you with your IP matters?" className="rounded-2xl bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-white/5 min-h-[150px] focus-visible:ring-primary p-4" />
                    </div>
                    <Button className="w-full rounded-2xl h-16 bg-primary font-black text-xs uppercase tracking-[0.3em] shadow-xl group/btn-send relative overflow-hidden">
                       <span className="relative z-10 flex items-center gap-2">Send Message <Send className="w-4 h-4 group-hover/btn-send:translate-x-1 group-hover/btn-send:-translate-y-1 transition-transform" /></span>
                       <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover/btn-send:opacity-100 transition-opacity" />
                    </Button>
                 </div>

                 <div className="flex items-center gap-4 pt-4 text-slate-400">
                    <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Support: 24/7 Available</span>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </section>

      {/* Trusted Banner */}
      <section className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-sm dark:shadow-2xl border border-slate-100 dark:border-white/5 group">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-0.05 pointer-events-none bg-[radial-gradient(circle_at_center,#000_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_center,white_1px,transparent_0)] bg-[size:20px_20px] group-hover:scale-110 transition-transform duration-1000" />
         <div className="relative z-10 space-y-6">
            <Badge variant="outline" className="border-slate-200 dark:border-white/20 text-slate-400 dark:text-white/50 font-black uppercase tracking-widest text-xs px-4">Confidentiality Assured</Badge>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white italic">Committed to Protecting Your Corporate Secrets</h3>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">All communications are end-to-end encrypted and handled with boutique-level legal precision.</p>
         </div>
      </section>
    </div>
  );
}
