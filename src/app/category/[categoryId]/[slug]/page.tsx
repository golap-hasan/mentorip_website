import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterBox } from "@/components/blog/NewsletterBox";
import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { 
  Share2, Clock, Calendar, FileText, Gavel, 
  Search, Scale, CheckCircle, ArrowRight 
} from "lucide-react";

export default async function DynamicPostPage({ params }: { params: Promise<{ categoryId: string; slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
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
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="prose prose-slate prose-sm dark:prose-invert max-w-none space-y-10">
          {/* Detailed content would go here. For now, we show a professional placeholder structure */}
          <section id="essentials" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <FileText className="w-5 h-5 text-primary opacity-70" /> Key Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { title: "Legal Framework", desc: "Understanding the primary statutes and regulations governing this IP area." },
                { title: "Procedural Steps", desc: "A detailed breakdown of the administrative process required for protection." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-900/40 border border-slate-50 dark:border-slate-800 rounded-lg">
                  <h4 className="font-bold text-sm mb-1.5 text-slate-800 dark:text-slate-200">{item.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-sm leading-relaxed text-slate-500 italic">
             This post is part of our premium IP series. For full legal consultation and document drafting, please contact our experts.
          </p>
        </div>
      </article>

      <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
        <div className="sticky top-24 space-y-6">
           {post.toc && <TableOfContents items={post.toc} />}
           <NewsletterBox />
           <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Assistance</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Our experts can help you manage your intellectual property correctly.</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-[11px] font-bold uppercase tracking-widest h-9 rounded-lg">Contact Us</Button>
           </div>
        </div>
      </aside>
    </div>
  );
}
