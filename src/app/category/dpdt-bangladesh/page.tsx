import { MainDashboardContent } from "@/components/home/MainContent";

export default function DpdtBangladeshPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">DPDT (IP Office) Bangladesh</h1>
        <p className="text-muted-foreground">
          Information and updates from the Department of Patents, Designs and Trademarks in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
