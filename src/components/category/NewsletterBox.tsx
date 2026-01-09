"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function NewsletterBox() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="rounded-xl border bg-card/60 backdrop-blur p-5 shadow-sm">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
        Subscribe to Newsletter
      </h3>
      <p className="mt-2 text-[12px] text-muted-foreground">
        Get the latest IP insights in your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="mt-4 flex items-center gap-2">
        <Input
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-10"
        />
        <Button type="submit" className="h-10 px-4 font-bold bg-pink-500 hover:bg-pink-600 text-white">
          <Send />
        </Button>
      </form>
    </div>
  );
}
