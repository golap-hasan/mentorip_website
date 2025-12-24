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
    <div className="bg-card rounded-lg border p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get the latest IP legal insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="space-y-3">
        <Input
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-10"
        />
        <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold h-10">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
