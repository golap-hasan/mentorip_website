import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterBox } from "@/components/blog/NewsletterBox";
import { getAIPostBySlug } from "@/lib/ai-data";
import { notFound } from "next/navigation";
import { 
  Share2, Clock, Calendar, FileText, 
  BrainCircuit, Sparkles, ShieldCheck, Zap 
} from "lucide-react";

export default async function DynamicAIPostPage({ params }: { params: Promise<{ featureId: string; slug: string }> }) {
  const { slug } = await params;
  const post = await getAIPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <article className="flex-1 min-w-0">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 flex items-center justify-center text-lg">🤖</div>
             <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold tracking-[0.1em] text-purple-600 dark:text-purple-400 uppercase">{post.author}</p>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-0.5">
                   <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5"/> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5"/> {post.readTime}</span>
                </div>
             </div>
             <Button variant="outline" size="sm" className="h-8 text-[11px] px-3 font-bold uppercase tracking-wider border-purple-100 hover:bg-purple-50">
                <Share2 className="w-3.5 h-3.5 mr-2 text-purple-500" /> Share
             </Button>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-5 tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-purple-50 dark:bg-purple-900/40 text-purple-500 border border-purple-100 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-10 border border-purple-100 dark:border-purple-900/30 shadow-md">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
          </div>

          <div id="intro" className="scroll-mt-28">
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-12">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="prose prose-slate prose-sm dark:prose-invert max-w-none space-y-10">
          <section id="intro" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <BrainCircuit className="w-5 h-5 text-purple-500 opacity-70" /> AI Foundation
            </h2>
            <div className="p-6 bg-purple-50/30 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800 rounded-2xl">
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                  Our AI features are built on proprietary large language models (LLMs) fine-tuned specifically for the legal and IP domain of Bangladesh. This ensures that every insight generated is grounded in actual statutes and precedents.
               </p>
            </div>
          </section>

          <section id="algorithms" className="scroll-mt-28">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              <Zap className="w-5 h-5 text-purple-500 opacity-70" /> Core Mechanisms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { title: "Semantic Analysis", desc: "Going beyond keywords to understand the actual meaning of IP claims." },
                { title: "Predictive Modeling", desc: "Using historical data to forecast trends and legal probabilities." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm">
                  <h4 className="font-bold text-sm mb-1.5 text-slate-800 dark:text-slate-200">{item.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="benefits" className="scroll-mt-28 bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
             <h2 className="text-xl font-extrabold mb-6 text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" /> Key Benefits
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {[
                    "99% Accuracy in legal keyword matching",
                    "Real-time global database sync",
                    "Automated risk assessment reports",
                    "Integrated filing workflow"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                       <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[8px] border border-purple-500/30">✓</div>
                       <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">{item}</span>
                    </div>
                ))}
             </div>
          </section>

          <p className="text-xs text-slate-400 italic">
             This AI insight is generated by MENTOR IP's proprietary AI engine. Please consult our human experts for final legal validation.
          </p>
        </div>
      </article>

      <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
        <div className="sticky top-24 space-y-6">
           {post.toc && <TableOfContents items={post.toc} />}
           <NewsletterBox />
           <div className="p-6 bg-purple-600 rounded-2xl border border-purple-500 text-white space-y-3 shadow-lg shadow-purple-500/20">
              <h4 className="text-sm font-bold uppercase tracking-wider">Try AI Now</h4>
              <p className="text-[11px] text-white/80 leading-relaxed font-medium">Experience the power of our AI tools with a free trial of our flagship features.</p>
              <Button className="w-full bg-white text-purple-600 hover:bg-slate-50 text-[11px] font-bold uppercase tracking-widest h-9 rounded-lg">Get Started</Button>
           </div>
        </div>
      </aside>
    </div>
  );
}
