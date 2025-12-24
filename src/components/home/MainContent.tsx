import { posts, categories } from "@/lib/blog-data";
import { LatestNews } from "./LatestNews";
import { NewsletterSection } from "./NewsletterSection";
import { CategorySection } from "./CategorySections";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";
import Image from "next/image";

export function MainDashboardContent() {
  // Extract specific posts for the hero and side list
  const heroPost = posts.find((p) => p.slug === "trademark-registration-guide") || posts[0];
  const sidePosts = [
    posts.find((p) => p.slug === "zara-legal-setback"),
    posts.find((p) => p.slug === "ip-office-development"),
    posts.find((p) => p.slug === "trademark-objection-grounds"),
  ].filter(Boolean);

  const getCategoryName = (id: string) => categories.find((c) => c.id === id)?.name || id;

  return (
    <div className="space-y-12 focus:outline-none">
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Hero Section - Takes up 2 columns */}
        <div className="xl:col-span-2">
          <Link href={`/category/${heroPost.categoryId}/${heroPost.slug}`}>
            <Card className="group overflow-hidden border-0 bg-transparent shadow-none cursor-pointer">
              {/* Visual Header */}
              <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/10">
                {/* mesh-like gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.4),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,78,216,0.5),transparent_50%)]" />
                
                {/* Watermark Logo */}
                <div className="absolute top-10 left-10 opacity-10 rotate-12 pointer-events-none">
                  <div className="w-32 h-32 border-[16px] border-white rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-sm" />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center select-none">
                  <div className="mb-6">
                    <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-0 px-4 py-1.5 uppercase tracking-[0.3em] font-black text-[10px]">
                      Featured Guide
                    </Badge>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl mb-1 text-white leading-[0.9]">
                    Trademark
                  </h2>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl mb-4 text-amber-300 leading-[0.9]">
                    Registration
                  </h2>
                  <div className="h-px w-32 bg-white/30 my-6" />
                  <h3 className="text-2xl md:text-3xl font-extralight uppercase tracking-[0.25em] text-blue-50/80">
                    In Bangladesh
                  </h3>
                  
                  <Badge className="absolute bottom-8 right-8 bg-black/40 hover:bg-black/60 text-white backdrop-blur-xl border-white/10 px-3 py-1 text-[10px] font-bold">
                    <Clock className="w-3 h-3 mr-1.5 opacity-70" /> {heroPost.readTime}
                  </Badge>
                </div>
              </div>

              {/* Content Area */}
              <CardContent>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-100 flex items-center justify-center overflow-hidden">
                        <Image src="/next.svg" alt="Mentor IP" width={16} height={16} className="opacity-60 dark:invert" />
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                        {heroPost.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 line-clamp-2 font-medium">
                    {heroPost.excerpt}
                  </p>
                  <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 gap-4">
                    <span className="text-slate-500 dark:text-slate-300">By {heroPost.author.split(",")[0]}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <span>{heroPost.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <span className="text-primary tracking-widest">{getCategoryName(heroPost.categoryId)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Wide Featured Post 1 */}
          {posts.find(p => p.slug === "copyright-act-summary") && (
            <Link href={`/category/copyright/copyright-act-summary`} className="block group mt-8">
              <Card className="border-0 bg-slate-500/5 dark:bg-slate-400/5 hover:bg-slate-500/10 dark:hover:bg-slate-400/10 transition-all duration-500 rounded-[2rem] overflow-hidden">
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 aspect-video relative rounded-2xl overflow-hidden shadow-lg">
                      <Image 
                        src={posts.find(p => p.slug === "copyright-act-summary")?.imageUrl || ""} 
                        alt="Featured" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <Badge className="absolute top-3 left-3 bg-purple-600 text-white border-0 text-[8px] font-black uppercase">
                        New Insight
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Copyright Law</span>
                         <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">August 2025</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                        {posts.find(p => p.slug === "copyright-act-summary")?.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed font-medium">
                        {posts.find(p => p.slug === "copyright-act-summary")?.excerpt}
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                            <Image src="/next.svg" alt="M" width={10} height={10} className="opacity-50 dark:invert" />
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">MENTORIP</span>
                        </div>
                        <Badge variant="outline" className="text-[8px] font-black border-slate-200 dark:border-slate-800 text-slate-400">
                          {posts.find(p => p.slug === "copyright-act-summary")?.readTime}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}
        </div>

        {/* Side Posts List - Takes up 1 column */}
        <div className="flex flex-col gap-6">
          {sidePosts.map((post) => {
            const isZara = post?.slug === "zara-legal-setback";
            const isObjection = post?.slug === "trademark-objection-grounds";
            
            return (
              <Link key={post?.slug} href={`/category/${post?.categoryId}/${post?.slug}`} className="block group">
                <Card className={`relative h-full border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-[1.5rem] overflow-hidden ${
                  isZara ? "bg-amber-950/5 dark:bg-amber-500/5" : 
                  isObjection ? "bg-rose-950/5 dark:bg-rose-500/5" : 
                  "bg-slate-500/5 dark:bg-slate-400/5"
                }`}>
                  <CardContent>
                    <div>
                      {isZara && (
                        <div className="relative aspect-[16/10] bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-900/40 dark:to-orange-950/40 rounded-xl mb-5 flex items-center justify-center border border-amber-200/50 dark:border-amber-800/20 overflow-hidden shadow-inner">
                          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                          <div className="text-center relative z-10">
                            <p className="text-3xl font-serif italic text-amber-900 dark:text-amber-100 tracking-tighter">
                              ZARA <span className="text-amber-500 not-italic sans-serif text-xs font-black align-middle mx-1">VS</span>
                            </p>
                            <p className="text-xs font-black text-amber-700/80 dark:text-amber-300/80 tracking-[0.3em] uppercase mt-1">
                              Maanzara
                            </p>
                          </div>
                          <Badge className="absolute top-3 right-3 bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[9px] font-black border-0 backdrop-blur-md">
                            CASE STUDY
                          </Badge>
                        </div>
                      )}

                      {!isZara && (
                        <div className="mb-5 flex gap-4 items-center">
                          <div className={`w-20 h-20 rounded-2xl flex-shrink-0 relative overflow-hidden flex items-center justify-center border-2 border-white/50 dark:border-slate-800/50 shadow-sm transition-transform duration-500 group-hover:scale-105 ${
                            isObjection ? "bg-rose-500/10" : "bg-white dark:bg-slate-900"
                          }`}>
                            {isObjection ? (
                              <div className="text-center font-black leading-[0.8] text-rose-500">
                                <span className="text-[7px] block mb-0.5 opacity-60">COMMON</span>
                                <span className="text-[10px]">GROUNDS</span>
                              </div>
                            ) : (
                              <div className="relative w-full h-full opacity-90 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                                  <Image src={post?.imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=200&auto=format"} alt="News" fill className="object-cover" />
                              </div>
                            )}
                          </div>
                          <div className="space-y-1">
                            <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-slate-200 dark:border-slate-800 text-slate-400">
                              Latest Post
                            </Badge>
                            <p className="text-[9px] font-black text-primary/80 uppercase tracking-widest">
                              {getCategoryName(post?.categoryId || '')}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h3 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-[1.2] group-hover:text-primary transition-colors ${
                          isZara ? "text-xl pb-2" : "text-sm"
                        }`}>
                          {post?.title}
                        </h3>
                        
                        {isZara && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium italic">
                            "{post?.excerpt}"
                          </p>
                        )}

                        <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-pulse" />
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                               {post?.date}
                             </p>
                          </div>
                          <Badge variant="secondary" className={`text-[9px] font-black px-2 py-0.5 border-0 rounded-lg ${
                            isZara ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" :
                            isObjection ? "bg-rose-500/10 text-rose-600 dark:text-rose-400" :
                            "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          }`}>
                            {post?.readTime}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Latest News Section */}
      <LatestNews />
      
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Category Specific Sections */}
      <div className="space-y-4">
        <CategorySection categoryId="trademark" />
        <CategorySection categoryId="patent" />
        <CategorySection categoryId="design" />
      </div>
    </div>
  );
}
