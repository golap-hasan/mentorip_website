"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ChevronRight, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts, categories } from "@/lib/blog-data";

const POSTS_PER_PAGE = 4;

export function LatestNews() {
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);

  // Get all posts sorted by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const visiblePosts = sortedPosts.slice(0, displayCount);
  const hasMore = displayCount < sortedPosts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <section className="space-y-6 py-8">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Latest <span className="text-primary">News</span>
        </h2>
        <Link 
          href="/category/all" 
          className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
        >
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visiblePosts.map((post) => {
          const category = categories.find(c => c.id === post.categoryId);
          
          return (
            <Link 
              key={post.slug} 
              href={`/category/${post.categoryId}/${post.slug}`}
              className="group flex flex-col bg-card rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Badge className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-[10px] h-5 px-1.5 backdrop-blur-md border-0 text-white font-medium">
                  <Clock className="w-2.5 h-2.5 mr-1" /> {post.readTime}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                    <Image src="/next.svg" alt="IP" width={12} height={12} className="opacity-70 dark:invert" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    {post.author.split(',')[0]}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h3>

                <div className="pt-4 border-t border-slate-50 dark:border-slate-800/50 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 italic font-medium lowercase first-letter:uppercase">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-primary/70">{category?.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore ? (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleLoadMore}
            variant="outline" 
            className="h-10 px-8 rounded-full border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Load More Posts
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-10 pb-4 space-y-2 opacity-50">
           <div className="h-px w-20 bg-slate-200 dark:bg-slate-800" />
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             You've reached the end of the list
           </p>
        </div>
      )}
    </section>
  );
}
