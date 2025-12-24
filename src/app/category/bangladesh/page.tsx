import { MainDashboardContent } from "@/components/home/MainContent";

export default function BangladeshPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Bangladesh</h1>
        <p className="text-muted-foreground">
          Intellectual Property updates and legal frameworks specific to Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
