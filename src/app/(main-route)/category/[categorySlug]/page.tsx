import { CategoryHeader } from "@/components/category/CategoryHeader";
import { PostCard } from "@/components/category/PostCard";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/services/category";

export default async function DynamicCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const res = await getCategoryBySlug(categorySlug);
  if (!res?.success || !res?.data) {
    notFound();
  }

  const category = res.data;
  const categoryPosts = category.posts || [];

  return (
    <div className="space-y-8">
      <CategoryHeader
        title={category.name}
        description={category.description}
        imageUrl={category.imageUrl}
        postCount={category.postCount ?? categoryPosts.length}
      />

      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <PostCard 
              key={post.slug} 
              title={post.title}
              excerpt={post.subtitle}
              slug={post.slug}
              categorySlug={category.slug}
              imageUrl={post.coverImage}
              tags={post.tag}
              readTime={post.readTime}
            />
          ))}
        </div>
      ) : (
        <div className="p-20 text-center border-2 border-dashed rounded-2xl border-slate-100 dark:border-slate-800">
           <p className="text-muted-foreground font-medium">No posts available in this category yet.</p>
        </div>
      )}
    </div>
  );
}
