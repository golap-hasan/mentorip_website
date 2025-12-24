import { MainDashboardContent } from "@/components/home/MainContent";

export default function TrademarkPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Trademark</h1>
        <p className="text-muted-foreground">
          Everything you need to know about trademark registration and branding in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
