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
  iconName: string;
}

export const categories: Category[] = [
  {
    id: "assignment",
    name: "Assignment",
    description: "Legal documents and procedures regarding the transfer of Intellectual Property rights in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconName: "FileText",
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    description: "Specific IP regulations and developments within the legal landscape of Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop",
    iconName: "Globe",
  },
  {
    id: "case-study",
    name: "Case Study",
    description: "Deep dives into landmark IP cases and their implications for future litigation.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
    iconName: "Search",
  },
  {
    id: "design",
    name: "Design",
    description: "Protecting the aesthetic and functional design of products in the Bangladeshi market.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop",
    iconName: "Palette",
  },
  {
    id: "dpdt-bangladesh",
    name: "DPDT (IP Office) Bangladesh",
    description: "News and updates directly from the Department of Patents, Designs and Trademarks.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    iconName: "Building2",
  },
  {
    id: "faq",
    name: "FAQ",
    description: "Common questions and expert answers regarding IP protection in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070&auto=format&fit=crop",
    iconName: "HelpCircle",
  },
  {
    id: "gallery",
    name: "Gallery",
    description: "Visual documentation of patents, trademarks, and IP success stories.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    iconName: "ImageIcon",
  },
  {
    id: "ip-laws-rules",
    name: "IP Laws and Rules",
    description: "Comprehensive database of the acts, rules, and regulations governing IP in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    iconName: "BookOpen",
  },
  {
    id: "ip-news",
    name: "IP News",
    description: "Latest news and trends in the world of Intellectual Property.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    iconName: "Newspaper",
  },
  {
    id: "ipr-enforcement",
    name: "IPR Enforcement",
    description: "Strategies and legal actions for enforcing IP rights against infringement.",
    imageUrl: "https://images.unsplash.com/photo-1589391886645-ec59600e163b?q=80&w=1974&auto=format&fit=crop",
    iconName: "ShieldCheck",
  },
  {
    id: "journal",
    name: "Journal",
    description: "Academic and professional articles on advanced IP topics.",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
    iconName: "FileCode",
  },
  {
    id: "patent",
    name: "Patent",
    description: "Guidance on patent filing, prosecution, and maintenance in Bangladesh according to the Patent Act 2023.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    iconName: "Microscope",
  },
  {
    id: "trademark",
    name: "Trademark",
    description: "Everything you need to know about registering and protecting your brand identity and logos in Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1603521360155-226e4e8a1d7c?q=80&w=2070&auto=format&fit=crop",
    iconName: "Copyright",
  },
  {
    id: "utility-model",
    name: "Utility Model",
    description: "Protecting incremental inventions through the utility model system.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?q=80&w=2070&auto=format&fit=crop",
    iconName: "Zap",
  },
  {
    id: "copyright",
    name: "Copyright",
    description: "Protecting creative works, from software to literature, under the Copyright Act of Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    iconName: "Copyright",
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
    author: "MENTORIP, Bangladesh",
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
    slug: "trademark-registration-guide",
    categoryId: "assignment",
    title: "Trademark Registration Guide in Bangladesh",
    excerpt: "Learn the essential components of a legally binding Intellectual Property assignment agreement under Bangladesh law.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    tags: ["Assignment", "Legal"],
    author: "MENTORIP, Bangladesh",
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
    author: "MENTORIP, Bangladesh",
    date: "Feb 27, 2025",
    readTime: "3 min read",
    toc: [
      { id: "section-44", title: "Section 44: Right to Sue", icon: "🔍" },
      { id: "section-45", title: "Section 45: Jurisdiction", icon: "⚖️" },
      { id: "summary", title: "Summary of Rights", icon: "✅" },
    ],
  },
  {
    slug: "trademark-objection-grounds",
    categoryId: "trademark",
    title: "Common Grounds for Trademark Objections in Bangladesh",
    excerpt: "Understanding the absolute and relative grounds for refusal of trademark registration.",
    imageUrl: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Trademark", "Legal"],
    author: "MENTORIP, Bangladesh",
    date: "Feb 20, 2025",
    readTime: "6 min read",
  },
  {
    slug: "bangladesh-trademark-journal-336",
    categoryId: "journal",
    title: "Bangladesh Trademark Journal No. 336 Published",
    excerpt: "The latest trademark journal has been released. Review the list of accepted trademarks for potential opposition.",
    imageUrl: "https://images.unsplash.com/photo-1589391886645-ec59600e163b?q=80&w=1974&auto=format&fit=crop",
    tags: ["Journal", "Update"],
    author: "MENTORIP, Bangladesh",
    date: "Dec 8, 2025",
    readTime: "1 min read",
  },
  {
    slug: "zara-legal-setback",
    categoryId: "case-study",
    title: "ZARA's Legal Setback: Losing the Opposition Case Against Maanzara",
    excerpt: "A deep dive into the landmark trademark opposition case in Bangladesh and its implications.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
    tags: ["Case Study", "Legal"],
    author: "MENTORIP, Bangladesh",
    date: "Nov 24, 2025",
    readTime: "3 min read",
  },
  {
    slug: "ip-office-development",
    categoryId: "dpdt-bangladesh",
    title: "Significant Development in Trademark Examination in Bangladesh",
    excerpt: "New initiatives by DPDT to expedite the trademark examination process.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661299245582-777265532598?q=80&w=2070&auto=format&fit=crop",
    tags: ["DPDT", "News"],
    author: "MENTORIP, Bangladesh",
    date: "Sep 28, 2025",
    readTime: "3 min read",
  },
  {
     slug: "copyright-act-summary",
     categoryId: "copyright",
     title: "Overview of the Copyright Act in Bangladesh",
     excerpt: "Protecting your creative expressions, from literature to software codes, under current laws.",
     imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
     tags: ["Copyright", "Legal"],
     author: "MENTORIP, Bangladesh",
     date: "Aug 15, 2025",
     readTime: "5 min read",
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
