import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function HeroAndGrid() {
  return (
    <div className="space-y-8">
      {/* Featured Hero Article */}
      <div className="w-full">
        <Link href="#" className="group block">
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video w-full h-[400px] bg-indigo-900 flex items-center justify-center text-white overflow-hidden">
                 {/* Placeholder for the big blue "TRADEMARK REGISTRATION" image */}
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 z-10" />
                 <div className="relative z-20 text-center p-8">
                    <h2 className="text-5xl font-black tracking-tighter uppercase mb-2">Trademark</h2>
                    <h2 className="text-5xl font-black tracking-tighter uppercase text-yellow-400 mb-2">Registration</h2>
                    <h3 className="text-3xl font-light tracking-widest uppercase">In Bangladesh</h3>
                 </div>
            </div>
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Trademark</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 6 min read
                    </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    Trademark Registration in Bangladesh: Step-by-Step Guide
                </h1>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                    Introduction to Trademark Registration in Bangladesh. Securing your brand's identity is crucial in today's competitive business landscape. Trademark Registration offers legal protection for your brand name...
                </p>
                <div className="text-sm font-medium text-primary flex items-center gap-1">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
            </CardContent>
            </Card>
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardContent className="p-0">
               <div className="bg-slate-100 aspect-video w-full rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                        Image Placeholder
                    </div>
               </div>
               <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                         <Badge variant="outline" className="text-xs font-normal">IP News</Badge>
                         <span className="text-xs text-muted-foreground">Nov 24, 2025</span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary line-clamp-2">
                        Significant Development in Trademark Examination in Bangladesh
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        Bangladesh Trademark System Gets Major Upgrade – Applications Now Examined in Just Weeks!
                    </p>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
