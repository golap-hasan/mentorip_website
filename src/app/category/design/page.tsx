import { MainDashboardContent } from "@/components/home/MainContent";

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Design</h1>
        <p className="text-muted-foreground">
          Exploration of industrial design registration and protection in the creative industry.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
