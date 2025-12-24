import { CategoryHeader } from "@/components/blog/CategoryHeader";
import { PostCard } from "@/components/blog/PostCard";

const posts = [
  {
    slug: "ip-assignment-basics",
    title: "IP Assignment Agreement Basics in Bangladesh",
    excerpt: "Learn the essential components of a legally binding Intellectual Property assignment agreement under Bangladesh law.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    tags: ["Assignment", "Legal"],
    date: "March 1, 2025",
    readTime: "4 min read",
  },
  {
    slug: "trademark-ownership-transfer",
    title: "How to Transfer Trademark Ownership: A Step-by-Step Guide",
    excerpt: "A comprehensive guide on the administrative steps required to record a trademark assignment with the DPDT.",
    imageUrl: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop",
    tags: ["Trademark", "Assignment"],
    date: "Feb 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "patent-assignment-recordal",
    title: "Recordal of Patent Assignments at the IP Office",
    excerpt: "Detailed procedures for filing patent assignment documents and ensuring legal protection for the new owner.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
    tags: ["Patent", "Assignment"],
    date: "Feb 20, 2025",
    readTime: "6 min read",
  }
];

export default function AssignmentPage() {
  return (
    <div className="space-y-8">
      <CategoryHeader
        title="Assignment"
        description="Legal documents and procedures regarding the transfer of Intellectual Property rights in Bangladesh."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop"
        postCount={posts.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} categorySlug="assignment" {...post} />
        ))}
      </div>
    </div>
  );
}
