import { MainDashboardContent } from "@/components/home/MainContent";

export default function PatentPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Patent</h1>
        <p className="text-muted-foreground">
          Guidance on patent filing, prosecution, and maintenance in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
