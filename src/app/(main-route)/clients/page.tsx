"use client";

import { 
  Users, 
  Globe2, 
  ShieldCheck, 
  Zap,
  Building2,
  Cpu,
  Car,
  ShoppingBag,
  ShoppingBasket,
  Stethoscope,
  Hotel,
  Monitor,
  Factory,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { label: "Active Clients", value: "7,000+" },
  { label: "Global Associates", value: "350+" },
  { label: "Industries Served", value: "12+" },
  { label: "Success Rate", value: "99%" },
];

const industries = [
  { name: "Consumer Electronics", icon: Cpu, desc: "Protecting next-gen tech and hardware innovations." },
  { name: "Automotive", icon: Car, desc: "Securing designs and trademarks for global mobility leaders." },
  { name: "Fashion", icon: ShoppingBag, desc: "Empowering luxury and retail brands against counterfeiting." },
  { name: "FMCG", icon: ShoppingBasket, desc: "Safeguarding consumer brand identities across markets." },
  { name: "Pharmaceuticals", icon: Stethoscope, desc: "Specialized IP support for healthcare and life sciences." },
  { name: "Hospitality", icon: Hotel, desc: "Brand management for international hotels and resorts." },
  { name: "Media & Tech", icon: Monitor, desc: "Digital assets and content copyright protection." },
  { name: "Industrial Manufacturing", icon: Factory, desc: "Patent and industrial design security for creators." },
];

const brands = [
  "Apple", "Samsung", "Tesla", "Nike", "Nestlé", "Novartis", "Hilton", "BMW", "Marico", "Unilever"
];

const trademarkJurisdictions = [
  "Bangladesh", "India", "Pakistan", "Afghanistan", "Nepal", "China", "Thailand", "Malaysia", "Singapore", "UAE", "UK", "EU"
];

export default function ClientsPage() {
  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-[0.3em] font-black text-xs">
            Global Partnerships
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
            TRUSTED BY <span className="text-primary italic">THOUSANDS</span>,<br /> 
            VALUED BY <span className="text-blue-600 dark:text-blue-400">GLOBAL LEADERS</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl italic">
            "Your innovation is our priority. Join the elite circle of over 7,000 clients who trust MentorIP."
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR CLIENTELE</h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                  A Diverse Portfolio of <br /> Global Excellence
                </h3>
              </div>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  MentorIP proudly represents a diverse and prestigious global clientele — from breakthrough innovators to some of the world’s most recognizable brands. 
                </p>
                <p>
                  With a proven record of precision, confidentiality, and proactive legal strategy, we have earned the confidence of leading corporations and top IP law firms across continents.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-6">
                   {stats.map((stat, i) => (
                      <div key={i} className="space-y-1">
                         <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                         <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                      </div>
                   ))}
                </div>
              </div>
           </div>

           <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-3xl opacity-50 transition-opacity group-hover:opacity-70" />
              <Card className="relative border-slate-100 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <CardContent className="p-10 space-y-8">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Confidence Guaranteed</p>
                          <p className="text-xs text-slate-500 font-bold uppercase">Boutique Legal Precision</p>
                       </div>
                    </div>
                    <Separator className="bg-slate-100 dark:bg-white/5" />
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Names We Support</p>
                       <div className="flex flex-wrap gap-3">
                          {brands.map((brand) => (
                             <Badge key={brand} variant="outline" className="px-4 py-2 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold rounded-full group-hover:border-primary/50 transition-colors">
                                {brand}
                             </Badge>
                          ))}
                          <Badge className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-full">
                             & MANY MORE
                          </Badge>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">SECTORS</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">Industries We Serve</h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">
            Cross-industry expertise tailored to the unique challenges of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {industries.map((item, i) => (
             <Card key={i} className="group border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 space-y-6 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                   <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </div>
                <div className="space-y-2">
                   <h4 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{item.name}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Strategic Jurisdictions */}
      <section className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full -ml-48 -mb-48" />

         <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-4">
                  <Badge variant="outline" className="border-primary/20 dark:border-amber-400/30 text-primary dark:text-amber-400 font-black uppercase tracking-widest text-xs px-3 py-1">
                     Jurisdictions
                  </Badge>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                    Strategic Global <br />
                    <span className="text-primary dark:text-amber-400 font-serif italic text-5xl">Reach</span>
                  </h3>
               </div>
               <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
                 Providing high-standard legal solutions across key growth markets in Asia and Europe.
               </p>
               
               <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm space-y-4">
                     <div className="flex items-center gap-3">
                        <Globe2 className="w-5 h-5 text-primary" />
                        <p className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">Trademark Services</p>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {trademarkJurisdictions.map(city => (
                           <span key={city} className="px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-300 font-bold">{city}</span>
                        ))}
                     </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm flex items-center justify-between group cursor-help">
                     <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary dark:text-amber-400" />
                        <div>
                           <p className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">Patent & Design Services</p>
                           <p className="text-xs text-slate-500 font-bold uppercase">Exclusively in Bangladesh</p>
                        </div>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <MapPin className="w-4 h-4 text-primary dark:text-white" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="relative aspect-square">
               {/* Decorative Element - Mapping Visualization */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center animate-pulse">
                     <div className="w-3/4 h-3/4 rounded-full border border-slate-100 dark:border-white/5 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center">
                           <Globe2 className="w-20 h-20 text-slate-200 dark:text-white/20" />
                        </div>
                     </div>
                  </div>
                  {/* Floating labels as decorative map markers */}
                  <div className="absolute top-1/4 right-1/4 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-xs uppercase shadow-2xl">United Kingdom</div>
                  <div className="absolute bottom-1/3 left-1/4 px-4 py-2 bg-primary text-white rounded-full font-black text-xs uppercase shadow-2xl">Singapore</div>
                  <div className="absolute top-1/2 right-1/3 px-4 py-2 bg-amber-500 text-white dark:text-slate-900 rounded-full font-black text-xs uppercase shadow-2xl">UAE</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
         <div className="bg-slate-50 dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Protect Your Brand Locally & Globally</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg max-w-2xl mx-auto">
                Join our prestigious circle of global clients. Let us secure your intellectual interests with precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Get Expert Advice
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all">
                    Contact Us
                </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
