import { MainDashboardContent } from "@/components/home/MainContent";

export default function ClientsPage() {
  return (
    <div className="space-y-6">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold mb-4">Our Clients</h1>
            <p className="text-muted-foreground leading-relaxed">
                We work with a wide range of clients from startups to multinational corporations, 
                ensuring their intellectual property rights are secured in Bangladesh and beyond.
            </p>
        </div>
        <MainDashboardContent />
    </div>
  );
}
