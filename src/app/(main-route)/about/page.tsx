import { MainDashboardContent } from "@/components/home/MainContent";

export default function AboutPage() {
  return (
    <div className="space-y-6">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold mb-4">About Mentor IP</h1>
            <p className="text-muted-foreground leading-relaxed">
                Mentor IP is a specialized Intellectual Property Law Firm in Bangladesh, dedicated to protecting 
                your innovation and creative assets. Our team provides comprehensive services in trademark, 
                patent, and copyright registration and enforcement.
            </p>
        </div>
        <MainDashboardContent />
    </div>
  );
}
