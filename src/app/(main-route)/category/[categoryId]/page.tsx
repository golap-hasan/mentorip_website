import { getCategoryById, getPostsByCategoryId } from "@/lib/blog-data";
import { CategoryHeader } from "@/components/blog/CategoryHeader";
import { PostCard } from "@/components/blog/PostCard";
import { notFound } from "next/navigation";

export default async function DynamicCategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  const categoryPosts = getPostsByCategoryId(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <CategoryHeader
        title={category.name}
        description={category.description}
        imageUrl={category.imageUrl}
        postCount={categoryPosts.length}
      />

      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <PostCard 
              key={post.slug} 
              categorySlug={categoryId} 
              {...post} 
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
