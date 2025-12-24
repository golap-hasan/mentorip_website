import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterBox } from "@/components/blog/NewsletterBox";
import { Share2, Clock, Calendar, Search, Scale, FileText, Ban, Trash2, CheckCircle } from "lucide-react";

async function getPostData(slug: string) {
  // This would eventually be a database or CMS call
  if (slug === "enforcing-patent-rights") {
    return {
      title: "Enforcing Patent Rights in Bangladesh – Legal Actions & Remedies",
      author: "SUPREMEIP, Bangladesh",
      date: "February 27, 2025",
      readTime: "3 min read",
      category: "Patent",
      tags: ["Patent", "IPR Enforcement"],
      imageUrl: "/images/patent-enforcement.jpg",
      toc: [
        { id: "section-44", title: "Section 44: Right to Sue for Infringement", icon: "🔍" },
        { id: "section-45", title: "Section 45: Jurisdiction", icon: "⚖️" },
        { id: "section-46", title: "Section 46: Burden of Proof in Patent Infringement", icon: "📋" },
        { id: "section-47", title: "Section 47: Injunctions in Patent Infringement", icon: "🚫" },
        { id: "section-48", title: "Section 48: Limits of Injunction Power", icon: "🚫" },
        { id: "section-49", title: "Section 49: Available Remedies", icon: "⚖️" },
        { id: "section-50", title: "Section 50: Infringement & Revocation Link", icon: "🔗" },
        { id: "summary", title: "Summary: Legal Tools for Patent Holders", icon: "✅" },
      ],
    };
  }
  return null;
}

export default async function PatentPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return <div className="p-10 text-center">Post not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <article className="flex-1 min-w-0">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">🛡️</div>
             <div className="flex-1">
                <p className="text-sm font-bold text-foreground">{post.author}</p>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                   <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.readTime}</span>
                </div>
             </div>
             <Button variant="outline" size="sm" className="h-8">
                <Share2 className="w-3.5 h-3.5 mr-2" /> Share
             </Button>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex gap-2 mb-6">
            {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>

          <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-10 border shadow-md">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            When a patent is granted in Bangladesh, it comes with the power to enforce exclusive rights—but also with the burden to defend those rights properly and lawfully. Sections 44 to 50 of the Bangladesh Patent Act, 2023 lay out the mechanism for enforcement, the burden of proof, and available reliefs for infringement cases.
          </p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          <section id="section-44" className="scroll-mt-28">
            <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-2 mb-6">
              <Search className="w-6 h-6 text-primary" /> Section 44: Right to Sue for Infringement
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>A <strong>patent holder</strong> or an <strong>exclusive licensee</strong> can file a lawsuit for patent infringement.</li>
              <li>If there's a contractual relationship, the licensee needs permission unless the licensor fails to act within <strong>two months</strong> of notice.</li>
              <li>The licensor must be added as a <strong>defendant or plaintiff</strong> in the suit.</li>
            </ul>
          </section>

          <section id="section-45" className="scroll-mt-28">
            <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-2 mb-6">
              <Scale className="w-6 h-6 text-primary" /> Section 45: Jurisdiction
            </h2>
            <p className="mb-4">Patent infringement suits must be filed in a <strong>District Court</strong> with jurisdiction over the area where:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>The plaintiff resides or conducts business, or</li>
              <li>The defendant resides or conducts business, or</li>
              <li>The cause of action arose</li>
            </ul>
          </section>

          <section id="section-46" className="scroll-mt-28">
            <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-2 mb-6">
              <FileText className="w-6 h-6 text-primary" /> Section 46: Burden of Proof
            </h2>
            <p className="mb-4">If a patent is for a <strong>process for obtaining a product</strong>, the burden of proof shifts:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>If the product is <strong>new</strong>, any identical product is presumed to be made by the patented process unless the defendant proves otherwise.</li>
              <li>The defendant must prove they used a <strong>different process</strong>.</li>
              <li>Courts must protect the defendant's <strong>manufacturing and business secrets</strong> during proceedings.</li>
            </ul>
          </section>

          <section id="section-47" className="scroll-mt-28">
            <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-2 mb-6">
              <Ban className="w-6 h-6 text-primary" /> Section 47: Injunctions
            </h2>
            <p className="mb-4">Courts can grant <strong>injunctions</strong> (temporary or permanent) to stop infringement, except in cases involving:</p>
            <ul className="list-disc pl-6 space-y-3 font-medium text-slate-700 dark:text-slate-300">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Government use</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Public interest</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Compulsory licensing</li>
            </ul>
          </section>

          <section id="section-48" className="scroll-mt-28 text-destructive">
             <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-2 mb-6">
                <Trash2 className="w-6 h-6" /> Section 48: Limits of Injunction Power
             </h2>
             <p className="p-4 bg-destructive/5 rounded-lg border-l-4 border-destructive">
                Courts <strong>cannot issue injunctions</strong> under Sections 29, 36, 37, 38, 39, 40, 41, and 44(1) in cases involving <strong>government use</strong>, <strong>public interest</strong>, or <strong>compulsory licensing</strong>.
             </p>
          </section>

          <section id="summary" className="scroll-mt-28 bg-primary/5 p-8 rounded-2xl border-2 border-primary/20 shadow-inner">
             <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                <CheckCircle className="w-6 h-6 text-primary" /> Legal Tools for Patent Holders
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    "Sue for infringement (Section 44)",
                    "Choose right jurisdiction (Section 45)",
                    "Shift burden of proof (Section 46)",
                    "Obtain injunctions (Section 47)",
                    "Claim damages or profits (Section 49)",
                    "Link with revocation defenses (Section 50)"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border shadow-sm">
                       <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center text-xs">✓</div>
                       <span className="text-sm font-medium">{item}</span>
                    </div>
                ))}
             </div>
          </section>
        </div>
      </article>

      <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
        <TableOfContents items={post.toc} />
        <NewsletterBox />
      </aside>
    </div>
  );
}
