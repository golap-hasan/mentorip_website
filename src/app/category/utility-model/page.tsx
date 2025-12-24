import { MainDashboardContent } from "@/components/home/MainContent";

export default function UtilityModelPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Utility Model</h1>
        <p className="text-muted-foreground">
          Information on utility model protection for practical innovations in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
