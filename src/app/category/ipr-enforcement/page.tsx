import { MainDashboardContent } from "@/components/home/MainContent";

export default function IprEnforcementPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">IPR Enforcement</h1>
        <p className="text-muted-foreground">
          Strategies and legal actions for enforcing Intellectual Property rights in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
