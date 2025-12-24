import { MainDashboardContent } from "@/components/home/MainContent";

export default function IpLawsRulesPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">IP Laws and Rules</h1>
        <p className="text-muted-foreground">
          Comprehensive guide to the laws and regulations governing Intellectual Property in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
