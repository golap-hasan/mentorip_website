import { Cpu, Database, Zap, LineChart, LucideIcon } from "lucide-react";

export interface AIFeature {
  id: string;
  name: string;
  description: string;
  iconName: string;
  tagline: string;
}

export const aiFeatures: AIFeature[] = [
  {
    id: "smart-search",
    name: "Smart Search",
    description: "AI-powered comprehensive IP search across global databases with natural language understanding.",
    iconName: "Cpu",
    tagline: "Intelligent IP Discovery",
  },
  {
    id: "ai-case-analysis",
    name: "AI Case Analysis",
    description: "Automated analysis of legal precedents and case law to predict litigation outcomes.",
    iconName: "Database",
    tagline: "Legal Strategy Assistant",
  },
  {
    id: "auto-filing",
    name: "Auto Filing",
    description: "Streamline the IP application process with AI-driven form completion and validation.",
    iconName: "Zap",
    tagline: "Accelerated Applications",
  },
  {
    id: "market-insights",
    name: "Market Insights",
    description: "Predictive analytics and market trend analysis for intellectual property valuation.",
    iconName: "LineChart",
    tagline: "Strategic Valuation",
  },
];

export interface AIPost {
  slug: string;
  featureId: string;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  toc?: { id: string; title: string; icon?: string }[];
}

export const aiPosts: AIPost[] = [
  {
    slug: "harnessing-ai-for-ip-search",
    featureId: "smart-search",
    title: "Harnessing AI for Comprehensive IP Searches",
    excerpt: "Discover how our AI-driven Smart Search engine processes global patent and trademark data in real-time.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["Search", "Machine Learning"],
    author: "MENTOR IP AI Team",
    date: "March 5, 2025",
    readTime: "5 min read",
    toc: [
      { id: "intro", title: "Introduction", icon: "🤖" },
      { id: "algorithms", title: "Advanced Algorithms", icon: "⚙️" },
      { id: "benefits", title: "Key Benefits", icon: "✨" },
    ],
  },
  {
    slug: "predicting-litigation-outcomes",
    featureId: "ai-case-analysis",
    title: "Predicting Litigation Outcomes with Case Analysis",
    excerpt: "Analyze historical IP case data to gain strategic insights and probability metrics for your legal battles.",
    imageUrl: "https://images.unsplash.com/photo-1636362746175-f9e1792c0f51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Analytics", "Case Law"],
    author: "MENTOR IP AI Team",
    date: "March 8, 2025",
    readTime: "7 min read",
  },
];

export function getAIFeatureById(id: string) {
  return aiFeatures.find((feature) => feature.id === id);
}

export function getPostsByFeatureId(featureId: string) {
  return aiPosts.filter((post) => post.featureId === featureId);
}

export function getAIPostBySlug(slug: string) {
  return aiPosts.find((post) => post.slug === slug);
}
