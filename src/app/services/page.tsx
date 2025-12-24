import { MainDashboardContent } from "@/components/home/MainContent";

export default function ServicesPage() {
  return (
    <div className="space-y-6">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold mb-4">Service & Practices</h1>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Trademark Registration & Enforcement</li>
                <li>Patent Filing & Prosecution</li>
                <li>Copyright Registration</li>
                <li>Industrial Design Protection</li>
                <li>IP Litigation & Dispute Resolution</li>
            </ul>
        </div>
        <MainDashboardContent />
    </div>
  );
}
