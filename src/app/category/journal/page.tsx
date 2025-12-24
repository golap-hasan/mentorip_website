import { MainDashboardContent } from "@/components/home/MainContent";

export default function JournalPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Journal</h1>
        <p className="text-muted-foreground">
          Legal journals and publications concerning Intellectual Property matters.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
