import { MainDashboardContent } from "@/components/home/MainContent";

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Gallery</h1>
        <p className="text-muted-foreground">
          A visual record of events, milestones, and architectural highlights of Mentor IP.
        </p>
      </div>
      <MainDashboardContent />
    </div>
  );
}
