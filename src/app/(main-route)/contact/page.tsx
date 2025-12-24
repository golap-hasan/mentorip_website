import { MainDashboardContent } from "@/components/home/MainContent";

export default function ContactPage() {
  return (
    <div className="space-y-6">
        <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground leading-relaxed">
                Get in touch with our experts for a free consultation regarding your intellectual property matters.
            </p>
            <div className="mt-4 space-y-2 text-sm">
                <p><strong>Email:</strong> info@mentorip.com</p>
                <p><strong>Location:</strong> Dhaka, Bangladesh</p>
            </div>
        </div>
        <MainDashboardContent />
    </div>
  );
}
