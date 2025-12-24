import Image from "next/image";

interface CategoryHeaderProps {
  title: string;
  description: string;
  imageUrl?: string;
  postCount?: number;
}

export function CategoryHeader({ title, description, imageUrl, postCount }: CategoryHeaderProps) {
  return (
    <div className="bg-card rounded-lg border shadow-sm overflow-hidden mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6 p-8">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
            {postCount !== undefined && (
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {postCount} posts
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {imageUrl && (
          <div className="w-full md:w-[400px] h-[240px] relative rounded-lg overflow-hidden flex-shrink-0 border">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}
