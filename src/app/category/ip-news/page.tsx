import { MainDashboardContent } from "@/components/home/MainContent";

export default function IpNewsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">IP News</h1>
        <p className="text-muted-foreground">
          Latest news and developments in the field of Intellectual Property worldwide.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
