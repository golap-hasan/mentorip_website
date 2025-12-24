import { MainDashboardContent } from "@/components/home/MainContent";

export default function CaseStudyPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Case Study</h1>
        <p className="text-muted-foreground">
          In-depth analysis of notable Intellectual Property cases and legal battles.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
