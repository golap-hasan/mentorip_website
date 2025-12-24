import { MainDashboardContent } from "@/components/home/MainContent";

export default function AssignmentPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Assignment</h1>
        <p className="text-muted-foreground">
          Legal documents and procedures regarding the transfer of Intellectual Property rights in Bangladesh.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
