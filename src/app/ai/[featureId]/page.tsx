import { getAIFeatureById, getPostsByFeatureId } from "@/lib/ai-data";
import { CategoryHeader } from "@/components/blog/CategoryHeader";
import { PostCard } from "@/components/blog/PostCard";
import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";

export default async function DynamicAILayerPage({ params }: { params: Promise<{ featureId: string }> }) {
  const { featureId } = await params;
  const feature = getAIFeatureById(featureId);
  const featurePosts = getPostsByFeatureId(featureId);

  if (!feature) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-8 md:p-12 text-white">
        <div className="absolute top-0 right-0 p-10 opacity-10 blur-xl bg-purple-500 w-32 h-32 rounded-full" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
               <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">AI Powered Feature</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{feature.name}</h1>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{feature.description}</p>
          </div>
          
          <div className="w-full md:w-[320px] h-[180px] relative rounded-xl overflow-hidden flex-shrink-0 border border-slate-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-slate-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                 </div>
              </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
           <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">Related AI Insights</h2>
           <span className="text-xs font-bold text-primary">{featurePosts.length} Posts Available</span>
        </div>

        {featurePosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featurePosts.map((post) => (
              <PostCard 
                key={post.slug} 
                categorySlug={featureId} 
                baseHref="ai"
                {...post} 
              />
            ))}
          </div>
        ) : (
          <div className="p-20 text-center border-2 border-dashed rounded-2xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
             <p className="text-slate-500 dark:text-slate-400 font-semibold tracking-tight">
               Coming Soon: AI-driven insights for {feature.name}.
             </p>
          </div>
        )}
      </div>
    </div>
  );
}
