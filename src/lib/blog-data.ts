export interface TOCItem {
  id: string;
  title: string;
  icon?: string;
}

export interface Post {
  slug: string;
  categoryId: string;
  title: string;
  excerpt: string;
  content?: string; // Rich text content or markdown
  imageUrl: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  toc?: TOCItem[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: "assignment",
    name: "Assignment",
    description: "Legal documents and procedures regarding the transfer of Intellectual Property rights in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    description: "Specific IP regulations and developments within the legal landscape of Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "case-study",
    name: "Case Study",
    description: "Deep dives into landmark IP cases and their implications for future litigation.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "design",
    name: "Design",
    description: "Protecting the aesthetic and functional design of products in the Bangladeshi market.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dpdt-bangladesh",
    name: "DPDT (IP Office) Bangladesh",
    description: "News and updates directly from the Department of Patents, Designs and Trademarks.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "faq",
    name: "FAQ",
    description: "Common questions and expert answers regarding IP protection in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "gallery",
    name: "Gallery",
    description: "Visual documentation of patents, trademarks, and IP success stories.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "ip-laws-rules",
    name: "IP Laws and Rules",
    description: "Comprehensive database of the acts, rules, and regulations governing IP in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ip-news",
    name: "IP News",
    description: "Latest news and trends in the world of Intellectual Property.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ipr-enforcement",
    name: "IPR Enforcement",
    description: "Strategies and legal actions for enforcing IP rights against infringement.",
    imageUrl: "https://images.unsplash.com/photo-1589391886645-ec59600e163b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "journal",
    name: "Journal",
    description: "Academic and professional articles on advanced IP topics.",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: "patent",
    name: "Patent",
    description: "Guidance on patent filing, prosecution, and maintenance in Bangladesh according to the Patent Act 2023.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "trademark",
    name: "Trademark",
    description: "Everything you need to know about registering and protecting your brand identity and logos in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "utility-model",
    name: "Utility Model",
    description: "Protecting incremental inventions through the utility model system.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "copyright",
    name: "Copyright",
    description: "Protecting creative works, from software to literature, under the Copyright Act of Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
  },
];

export const posts: Post[] = [
  {
    slug: "ip-assignment-basics",
    categoryId: "assignment",
    title: "IP Assignment Agreement Basics in Bangladesh",
    excerpt: "Learn the essential components of a legally binding Intellectual Property assignment agreement under Bangladesh law.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    tags: ["Assignment", "Legal"],
    author: "SUPREMEIP, Bangladesh",
    date: "March 1, 2025",
    readTime: "4 min read",
    toc: [
      { id: "intro", title: "Introduction", icon: "📄" },
      { id: "essentials", title: "Essential Elements", icon: "📝" },
      { id: "consideration", title: "Assignment with or without Goodwill", icon: "🤝" },
      { id: "stamp-duty", title: "Stamp Duty Requirements", icon: "🏛️" },
      { id: "registration", title: "Recordal at the IP Office", icon: "✅" },
    ],
  },
  {
    slug: "enforcing-patent-rights",
    categoryId: "patent",
    title: "Enforcing Patent Rights in Bangladesh – Legal Actions & Remedies",
    excerpt: "Under the Patent Act 2023, understand how to protect your inventions and what legal actions you can take.",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop",
    tags: ["Patent", "IPR Enforcement"],
    author: "SUPREMEIP, Bangladesh",
    date: "Feb 27, 2025",
    readTime: "3 min read",
    toc: [
      { id: "section-44", title: "Section 44: Right to Sue", icon: "🔍" },
      { id: "section-45", title: "Section 45: Jurisdiction", icon: "⚖️" },
      { id: "summary", title: "Summary of Rights", icon: "✅" },
    ],
  },
  {
    slug: "trademark-registration-guide",
    categoryId: "trademark",
    title: "A Comprehensive Guide to Trademark Registration",
    excerpt: "Step-by-step process for filing and securing your trademark in Bangladesh, from search to certificate.",
    imageUrl: "https://images.unsplash.com/photo-1603521360155-226e4e8a1d7c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Trademark", "Guide"],
    author: "SUPREMEIP, Bangladesh",
    date: "Feb 25, 2025",
    readTime: "6 min read",
  },
];

export function getCategoryById(id: string) {
  return categories.find((cat) => cat.id === id);
}

export function getPostsByCategoryId(categoryId: string) {
  return posts.filter((post) => post.categoryId === categoryId);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
