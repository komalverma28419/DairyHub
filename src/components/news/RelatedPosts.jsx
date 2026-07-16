import blogs from "../../data/blog";
import BlogCard from "../ui/BlogCard";

const RelatedPosts = ({ currentSlug, currentCategory }) => {
  // Same category blogs except current blog
  const relatedBlogs = blogs
    .filter(
      (blog) =>
        blog.category === currentCategory &&
        blog.slug !== currentSlug
    )
    .slice(0, 3);

  // Fallback if less than 3 blogs exist
  const fallbackBlogs = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, 3);

  const displayBlogs =
    relatedBlogs.length >= 3 ? relatedBlogs : fallbackBlogs;

  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-primary font-medium mb-2">
             See Related Posts
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {displayBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedPosts;