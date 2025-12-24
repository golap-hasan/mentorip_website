import Image from "next/image";
import Link from "next/link";
import { Clock, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MainDashboardContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Main Hero Section - Takes up 2 columns */}
      <div className="xl:col-span-2 space-y-6">
        <Card className="pt-0 border-0 shadow-sm overflow-hidden bg-card group cursor-pointer hover:shadow-md transition-all">
          <div className="relative aspect-video w-full bg-blue-600">
             {/* Mocking the Gradient Blue Trademark Image */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0052cc] to-[#00aaff] flex flex-col items-center justify-center text-white p-8 text-center">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-lg mb-0 text-white">Trademark</h2>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-lg mb-2 text-[#ffd700]">Registration</h2>
                 <h3 className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] border-t border-white/30 pt-2 mt-2">In Bangladesh</h3>
                 
                 <Badge className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md">
                    <Clock className="w-3 h-3 mr-1" /> 6 min read
                 </Badge>
             </div>
          </div>
          <CardContent>
             <div className="flex items-center gap-2 mb-2"> 
                <Image src="/next.svg" alt="Mentor IP Icon" width={20} height={20} className="w-5 h-5 opacity-50 dark:invert" />
                <h2 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    Trademark Registration in Bangladesh: Step-by-Step Guide
                </h2>
             </div>
             <p className="text-muted-foreground mb-2 leading-relaxed">
                <span className="inline-block w-4 h-4 bg-primary/20 rounded-sm mr-2 align-middle"></span>
                Introduction to Trademark Registration in Bangladesh. Securing your brand's identity is crucial in today's competitive business landscape. Trademark Registration...
             </p>
             <div className="flex items-center text-xs text-slate-400 gap-2">
                <span>MENTOR IP, Bangladesh</span>
                <span>•</span>
                <span>Jan 1, 2025</span>
                <span>•</span>
                <span>Trademark</span>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Side Posts List - Takes up 1 column */}
      <div className="space-y-4">
        {/* Post 1 */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-amber-500/5 dark:bg-amber-500/10">
           <CardContent>
              <div className="aspect-[2/1] bg-amber-100 mb-3 rounded-md flex items-center justify-center overflow-hidden relative">
                  <div className="text-center">
                     <p className="text-2xl font-serif italic text-slate-800">ZARA <span className="text-slate-400 not-italic sans-serif text-sm">VS</span></p>
                     <p className="text-sm font-bold text-slate-600">MAANZARA</p>
                  </div>
                  <Badge variant="secondary" className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] h-5 px-1.5">3 min read</Badge>
              </div>
              <h3 className="font-bold text-card-foreground leading-tight mb-2 hover:text-primary">
                ZARA's Legal Setback: Losing the Opposition Case Against Maanzara in Bangladesh
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                In a resounding triumph for local entrepreneurship and fair competition...
              </p>
              <p className="text-xs text-slate-400">Nov 24, 2025</p>
           </CardContent>
        </Card>

        {/* Post 2 */}
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-card">
           <CardContent className="flex gap-3 h-full px-4 pt-4">
               <div className="w-1/3 bg-muted rounded-md h-24 flex-shrink-0"></div>
               <div className="w-2/3 flex flex-col justify-between">
                   <h3 className="font-semibold text-sm text-card-foreground leading-snug hover:text-primary">
                     Significant Development in Trademark Examination in Bangladesh
                   </h3>
                   <div className="flex items-center justify-between mt-2">
                      <p className="text-[10px] text-slate-400">Sep 28, 2025</p>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-[10px] h-5 px-1.5">3 min read</Badge>
                   </div>
               </div>
           </CardContent>
        </Card>

         {/* Post 3 */}
         <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-rose-500/5 dark:bg-rose-500/10">
           <CardContent className="flex gap-3 px-4 pt-4">
                <div className="w-1/3 bg-rose-500/20 rounded-md h-24 flex-shrink-0 flex items-center justify-center">
                    <span className="text-rose-500 text-[10px] text-center font-bold">COMMON<br/>GROUNDS</span>
                </div>
               <div className="w-2/3">
                   <h3 className="font-semibold text-sm text-card-foreground leading-snug hover:text-primary">
                     Common Grounds for Trademark Objections in Bangladesh
                   </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[10px] text-slate-400">Sep 12, 2025</p>
                      <Badge variant="secondary" className="bg-black/60 text-white text-[10px] h-5 px-1.5">6 min read</Badge>
                   </div>
               </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
