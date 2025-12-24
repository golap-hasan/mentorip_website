import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  categorySlug: string;
  imageUrl?: string;
  tags?: string[];
  author?: string;
  date?: string;
  readTime?: string;
}

export function PostCard({
  title,
  excerpt,
  slug,
  categorySlug,
  imageUrl,
  tags = [],
  author = "SUPREMEIP, Bangladesh",
  date,
  readTime = "3 min read",
}: PostCardProps) {
  return (
    <Link href={`/category/${categorySlug}/${slug}`}>
      <article className="group bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
        {imageUrl && (
          <div className="relative w-full h-48 bg-muted overflow-hidden border-b">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {readTime && (
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </div>
            )}
          </div>
        )}

        <div className="p-5 flex-1 flex flex-col">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-[10px] px-2 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
            {excerpt}
          </p>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">⚖️</div>
               <span className="font-medium">{author}</span>
            </div>
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                <span>{date}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
