import { MainDashboardContent } from "@/components/home/MainContent";
import { Sparkles, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SmartSearchPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu className="w-24 h-24 text-purple-500" />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">Smart Search</h1>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">AI Feature</Badge>
            </div>
            <p className="text-muted-foreground">
              Instant AI-powered IP searching across massive databases for faster results.
            </p>
        </div>
      </div>
      <MainDashboardContent />
    </div>
  );
}
