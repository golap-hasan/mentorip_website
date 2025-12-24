import { MainDashboardContent } from "@/components/home/MainContent";

export default function GalleryPage() {
  return (
    <div className="space-y-6">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold mb-4">Gallery</h1>
            <p className="text-muted-foreground leading-relaxed">
                Moments from our firm's journey, events, and legal achievements.
            </p>
        </div>
        <MainDashboardContent />
    </div>
  );
}
