import { Button } from "@/components/ui/button";
import { NewsletterBox } from "@/components/category/NewsletterBox";
import { processHtmlForToc } from "@/components/tools/toc-utils";
// import { getPostBySlug } from "@/lib/blog-data";
// import { notFound } from "next/navigation";
import { Share2, Clock, Calendar } from "lucide-react";
import TableOfContents from "@/components/category/TableOfContents";

export default async function DynamicPostPage({}: // params,
{
  params: Promise<{ categoryId: string; slug: string }>;
}) {
  // const { slug } = await params;
  // const post = getPostBySlug(slug);

  const fakeData = {
    title: "Next.js 15: The Ultimate Guide for Modern Web Development",
    date: "January 9, 2026",
    tag: ["Next.js", "React", "Web Development"],
    author: "John Doe",
    readTime: "12 min read",
    content: `
    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Next.js Banner" title="Next.js 15 Banner" />

    <p class="lead">Web development has evolved rapidly. In this massive guide, we will explore why Next.js is the best choice for SEO, performance, and developer experience in 2026.</p>

    <h2>Introduction to Next.js</h2>
    <p>Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It's the go-to solution for production-grade React applications.</p>
    <blockquote>
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more."
    </blockquote>

    <h2>Core Features</h2>
    <p>There are several core features that make Next.js stand out from the crowd. Let's dive into them.</p>

    <h3>Server Actions</h3>
    <p>Server Actions allow you to run asynchronous code directly on the server. They eliminate the need to create API endpoints to mutate data. This is a game-changer for form handling.</p>
    
    <h3>Partial Prerendering (PPR)</h3>
    <p>PPR combines the best of static and dynamic rendering. It allows you to keep the shell of your application static while streaming in dynamic parts. This ensures fast initial loads while keeping data fresh.</p>

    <h2>Data Fetching Patterns</h2>
    <p>Understanding how to fetch data is crucial. Next.js extends the native fetch API to allow for caching and revalidating.</p>

    <h3>Static Site Generation (SSG)</h3>
    <p>Perfect for blogs and documentation. Pages are built once at build time and reused on every request.</p>

    <h3>Server-Side Rendering (SSR)</h3>
    <p>Use this when data changes frequently. The page is generated on the server for every request.</p>

    <h2>SEO Optimization Techniques</h2>
    <p>Search Engine Optimization is critical. Here is how you can master it with Next.js using the built-in tools.</p>

    <h3>Metadata API</h3>
    <p>The Metadata API allows you to define your application metadata (e.g., meta and link tags) inside your layout or page. It is fully typed and supports streaming.</p>

    <h3>Sitemap and Robots</h3>
    <p>Generating sitemaps and robots.txt files is straightforward. You can generate them dynamically based on your database content using built-in route handlers.</p>

    <h2>Styling with Tailwind CSS</h2>
    <p>Tailwind CSS works perfectly with Next.js. It allows for rapid UI development without leaving your HTML. The utility-first approach helps maintain consistency across the project. Features include:</p>
    <ul>
      <li>Just-in-Time (JIT) engine for fast builds.</li>
      <li>Automatic unused CSS purging.</li>
      <li>Easy responsiveness with breakpoints.</li>
      <li>Dark mode support out of the box.</li>
    </ul>

    <h2>Advanced Routing</h2>
    <p>The App Router introduced a new way to handle routing, making it more intuitive and powerful.</p>

    <h3>Middleware</h3>
    <p>Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.</p>

    <h3>Parallel Routes</h3>
    <p>Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. This is useful for highly dynamic dashboards.</p>

    <h3>Intercepting Routes</h3>
    <p>Intercepting routes allows you to load a route from another part of your application within the current layout. This paradigm can be useful when you want to display the content of a route without the user switching to a different context, like a photo feed modal.</p>

    <h2>Deployment Strategies</h2>
    <p>Once your application is ready, you need to deploy it. Vercel is the creators of Next.js and provides the best hosting solution.</p>

    <h3>Vercel Deployment</h3>
    <p>Deploying to Vercel is as easy as pushing your code to GitHub. It handles CI/CD automatically and provides edge caching.</p>

    <h3>Docker Containerization</h3>
    <p>If you prefer self-hosting, you can wrap your Next.js application in a Docker container and deploy it anywhere, from AWS to DigitalOcean. This gives you full control over the infrastructure.</p>

    <h2>Conclusion</h2>
    <p>Next.js continues to dominate the React ecosystem. With its focus on performance, SEO, and developer experience, it is an excellent choice for your next project. Start building today!</p>
  `,
  };

  const { processedHtml, toc } = processHtmlForToc(fakeData.content);

  // if (!post) {
  //   notFound();
  // }

  return (
    <div className="space-y-8">
      <header className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
              {fakeData.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
              <span className="font-medium">by {fakeData.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {fakeData.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {fakeData.readTime}
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-3 text-[11px] font-bold"
          >
            <Share2 className="w-3.5 h-3.5" /> Share
          </Button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {fakeData.tag.map((t) => (
            <span
              key={t}
              className="rounded-md border bg-muted/40 px-2.5 py-1 text-[11px] font-bold text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
        <article className="flex-1 min-w-0">
          <div
            className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-24 max-w-none mx-auto md:pb-[650px]"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </article>

        <aside className="w-full lg:w-[320px] shrink-0 space-y-6 sticky top-24">
          <div className="space-y-6">
            {toc.length > 0 && <TableOfContents toc={toc} />}
            <NewsletterBox />
          </div>
        </aside>
      </div>
    </div>
  );
}
