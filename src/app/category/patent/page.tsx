import { CategoryHeader } from "@/components/blog/CategoryHeader";
import { PostCard } from "@/components/blog/PostCard";

const posts = [
  {
    slug: "enforcing-patent-rights",
    title: "Enforcing Patent Rights in Bangladesh – Legal Actions & Remedies",
    excerpt: "When a patent is granted in Bangladesh, it comes with the power to enforce exclusive rights—but also with the burden to defend those rights properly and lawfully.",
    imageUrl: "/images/patent-enforcement.jpg",
    tags: ["Patent", "IPR Enforcement"],
    date: "Feb 27, 2025",
    readTime: "3 min read",
  },
  {
    slug: "patent-registration-guide",
    title: "Patent Registration in Bangladesh: Step-by-Step Guide",
    excerpt: "Simplify your IP registration process with SUPREMEIP. We handle end-to-end registration of trademarks, patents, designs, and copyrights.",
    imageUrl: "/images/patent-registration.jpg",
    tags: ["Patent", "Registration"],
    date: "Feb 27, 2025",
    readTime: "6 min read",
  },
  {
      slug: "patent-search-procedure",
      title: "How to Conduct a Patent Search in Bangladesh",
      excerpt: "Before filing, it's crucial to ensure your invention is novel. Here is how you can search the DPDT database effectively.",
      imageUrl: "/images/patent-search.jpg",
      tags: ["Patent", "Search"],
      date: "Jan 15, 2025",
      readTime: "5 min read",
  },
  {
      slug: "patent-renewal-rules",
      title: "Patent Renewal Rules and Maintenance Fees",
      excerpt: "Keep your patent alive. Understand the periodic fee structure and deadlines for patent maintenance in Bangladesh.",
      imageUrl: "/images/patent-renewal.jpg",
      tags: ["Patent", "Renewal"],
      date: "Dec 10, 2024",
      readTime: "4 min read",
  }
];

export default function PatentPage() {
  return (
    <div className="space-y-8">
      <CategoryHeader
        title="Patent"
        description="Guidance on patent filing, prosecution, and maintenance in Bangladesh according to the Patent Act 2023."
        imageUrl="/images/patent-hero.jpg"
        postCount={posts.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} categorySlug="patent" {...post} />
        ))}
      </div>
    </div>
  );
}
