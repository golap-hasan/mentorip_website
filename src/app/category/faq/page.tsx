import { MainDashboardContent } from "@/components/home/MainContent";

export default function FaqPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">FAQ</h1>
        <p className="text-muted-foreground">
          Frequently asked questions about Intellectual Property registration and legal procedures.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
