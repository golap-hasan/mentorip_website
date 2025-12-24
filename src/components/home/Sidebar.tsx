import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RightSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Quick Links / Services Widget */}
      <Card className="border-t-4 border-t-primary shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {[
              "Our Clients",
              "Service & Practices",
              "Contact Us",
              "Gallery",
              "IP Laws and Rules"
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" /> {link}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Featured / Promo Widget */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-sm">
        <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2 text-primary">Need Legal Advice?</h3>
            <p className="text-sm text-muted-foreground mb-4">
                Our expert attorneys are ready to help you protect your intellectual property.
            </p>
            <Button className="w-full">Book Consultation</Button>
        </CardContent>
      </Card>

      {/* Tags Cloud */}
      <Card className="shadow-sm">
        <CardHeader>
           <CardTitle className="text-lg">Tags</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
               {["Trademark", "Patent", "Utility Model", "Design", "IPR Enforcement", "Copyright", "Legal", "Bangladesh"].map((tag) => (
                   <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-primary hover:text-white cursor-pointer transition-colors">
                        {tag}
                   </span>
               ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
