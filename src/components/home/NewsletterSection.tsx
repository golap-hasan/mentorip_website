import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Subscribe to Newsletter
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-medium">
            Subscribe to receive updates on Trademark, Patent & IP Law developments in Bangladesh and beyond.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <Input 
            type="email" 
            placeholder="Type your email..." 
            className="h-12 bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-xl px-5 text-sm font-medium focus:ring-primary shadow-sm"
          />
          <Button className="h-12 px-8 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-lg shadow-pink-500/20 w-full sm:w-auto transition-transform active:scale-95">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
