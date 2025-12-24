import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterBox } from "@/components/blog/NewsletterBox";
import { 
  Share2, Clock, Calendar, FileText, Scale, Gavel, 
  CheckCircle, HelpCircle, ArrowRight 
} from "lucide-react";

async function getPostData(slug: string) {
  if (slug === "ip-assignment-basics") {
    return {
      title: "IP Assignment Agreement Basics in Bangladesh",
      author: "SUPREMEIP, Bangladesh",
      date: "March 1, 2025",
      readTime: "4 min read",
      category: "Assignment",
      tags: ["Assignment", "Legal", "Contract"],
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      toc: [
        { id: "intro", title: "Introduction", icon: "📄" },
        { id: "essentials", title: "Essential Elements", icon: "📝" },
        { id: "consideration", title: "Assignment with or without Goodwill", icon: "🤝" },
        { id: "stamp-duty", title: "Stamp Duty Requirements", icon: "🏛️" },
        { id: "registration", title: "Recordal at the IP Office", icon: "✅" },
        { id: "checklist", title: "Assignment Checklist", icon: "📋" },
      ],
    };
  }
  return null;
}

export default async function AssignmentPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return (
      <div className="p-20 text-center space-y-4">
        <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground opacity-20" />
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <p className="text-muted-foreground">This assignment content is not yet available.</p>
        <Button variant="outline" asChild>
          <a href="/category/assignment">Back to Assignment</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <article className="flex-1 min-w-0">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border flex items-center justify-center text-lg">⚖️</div>
             <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold tracking-[0.1em] text-slate-900 dark:text-slate-200 uppercase">{post.author}</p>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-0.5">
                   <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5"/> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5"/> {post.readTime}</span>
                </div>
             </div>
             <Button variant="outline" size="sm" className="h-8 text-[11px] px-3 font-bold uppercase tracking-wider">
                <Share2 className="w-3.5 h-3.5 mr-2" /> Share
             </Button>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-5 tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-slate-50 dark:bg-slate-900 text-slate-400 border px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-10 border border-slate-100 dark:border-slate-800 shadow-sm">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover grayscale-[0.2] contrast-[0.98]" priority />
          </div>

          <div id="intro" className="scroll-mt-28">
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-12">
              Assignment is the process through which the ownership of an Intellectual Property right is transferred from one party (the assignor) to another (the assignee). In Bangladesh, this process is governed by specific legal requirements under the Trademark and Patent Acts.
            </p>
          </div>
        </header>

        <div className="prose prose-slate prose-sm dark:prose-invert max-w-none space-y-10">
          <section id="essentials" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <FileText className="w-5 h-5 text-primary opacity-70" /> Essential Elements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { title: "Writing Required", desc: "The assignment must be in writing and signed by both parties." },
                { title: "Legal Capacity", desc: "Both assignor and assignee must have legal standing to contract." },
                { title: "Specific IP", desc: "Detailed identification of the trademark or patent numbers involved." },
                { title: "Consideration", desc: "Mention of the value or token amount exchanged for the rights." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-900/40 border border-slate-50 dark:border-slate-800 rounded-lg">
                  <h4 className="font-bold text-sm mb-1.5 text-slate-800 dark:text-slate-200">{item.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="consideration" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <Gavel className="w-5 h-5 text-primary opacity-70" /> Assignment with or without Goodwill
            </h2>
            <p className="text-base leading-relaxed mb-6">
              In trademark law, an assignment can occur in two ways:
            </p>
            <div className="grid grid-cols-1 gap-3 not-prose">
              <div className="flex items-start gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-lg">
                 <div className="mt-0.5"><Scale className="w-4 h-4 text-primary opacity-60" /></div>
                 <div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">With Goodwill</h5>
                    <p className="text-slate-500 text-xs mt-0.5">Transferring the entire business reputation and market presence associated with the mark.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-lg">
                 <div className="mt-0.5"><ArrowRight className="w-4 h-4 text-slate-400" /></div>
                 <div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">Without Goodwill</h5>
                    <p className="text-slate-500 text-xs mt-0.5">Transferring only the legal title to the mark, without the associated business assets.</p>
                 </div>
              </div>
            </div>
          </section>

          <section id="stamp-duty" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <div className="p-1.5 bg-amber-50 rounded-lg border border-amber-100"><Scale className="w-4 h-4 text-amber-500" /></div> Stamp Duty
            </h2>
            <p className="bg-slate-50/50 dark:bg-slate-900/30 p-5 rounded-lg border border-slate-100 dark:border-slate-800 leading-relaxed text-sm text-slate-500">
              Every assignment deed in Bangladesh must be executed on <strong>non-judicial stamp paper</strong>. The value of the stamp depends on the consideration amount mentioned in the deed. Failure to properly stamp the document may make it inadmissible in court.
            </p>
          </section>

          <section id="registration" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <CheckCircle className="w-5 h-5 text-green-500 opacity-70" /> Recordal at DPDT
            </h2>
            <p className="mb-5 text-sm">The transfer is not legally complete until recorded in the DPDT Register. Process:</p>
            <div className="space-y-3 not-prose">
              {[
                "Filing Form TM-24 (Trademark) or equivalent for Patent.",
                "Submission of the original Assignment Deed.",
                "Payment of prescribed government fees."
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-center">
                   <span className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-800 border flex items-center justify-center text-[10px] font-bold text-slate-500">{i+1}</span>
                   <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="checklist" className="scroll-mt-28 bg-slate-900 dark:bg-black p-8 rounded-2xl shadow-sm relative overflow-hidden border border-slate-800">
             <h2 className="text-xl font-extrabold mb-6 text-white tracking-tight">Final Checklist</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                    "Executed Assignment Deed",
                    "Valid Stamp Paper",
                    "DPDT Forms completed",
                    "Government fees paid",
                    "Notarization of the deed",
                    "Power of Attorney"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                       <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[8px] border border-primary/30">✓</div>
                       <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">{item}</span>
                    </div>
                ))}
             </div>
          </section>
        </div>
      </article>

      <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
        <div className="sticky top-24 space-y-6">
           <TableOfContents items={post.toc} />
           <NewsletterBox />
           <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Assistance</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Our experts can help you draft and register IP assignments correctly and efficiently.</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-[11px] font-bold uppercase tracking-widest h-9 rounded-lg">Contact Us</Button>
           </div>
        </div>
      </aside>
    </div>
  );
}
