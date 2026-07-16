import { Search } from "lucide-react";
import blogs from "../../data/blog";

const BlogSidebar = () => {
  const latestPosts = blogs.slice(0, 4);

  const tags = [
    "Technology",
    "AI",
    "IoT",
    "Automation",
    "Business",
    "Cloud",
    "ERP",
    "Health",
  ];

  return (
    <aside className="space-y-10">

      {/* Search */}

      <div className="border rounded-2xl p-6">

        <h3 className="text-xl font-semibold mb-5">
          Search
        </h3>

        <div className="relative">

          <input
            type="text"
            placeholder="Search blog..."
            className="w-full border rounded-xl py-3 pl-4 pr-12 outline-none focus:border-[#00B207]"
          />

          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

        </div>

      </div>

      {/* Advertisement */}

      <div className="rounded-2xl overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800"
          alt="Advertisement"
          className="w-full h-72 object-cover"
        />

      </div>

      {/* Latest Posts */}

      <div className="border rounded-2xl p-6">

        <h3 className="text-xl font-semibold mb-5">
          Latest Posts
        </h3>

        <div className="space-y-5">

          {latestPosts.map((post) => (

            <div
              key={post.id}
              className="flex gap-4"
            >

              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>

                <p className="text-sm text-[#00B207] mb-1">
                  {post.category}
                </p>

                <h4 className="font-medium leading-6 line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  {post.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Tags */}

      <div className="border rounded-2xl p-6">

        <h3 className="text-xl font-semibold mb-5">
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-3">

          {tags.map((tag) => (

            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-[#00B207] hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </aside>
  );
};

export default BlogSidebar;