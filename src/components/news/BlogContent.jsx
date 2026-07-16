import ShareButtons from "./ShareButtons";

const BlogContent = ({ blog, detail }) => {

  if (!blog || !detail) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading blog...
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        return (
          <h2
            key={index}
            className="text-2xl md:text-3xl font-bold text-[#121212] mt-10 mb-5"
          >
            {item.text}
          </h2>
        );

      case "paragraph":
        return (
          <p
            key={index}
            className="text-[#4F4F4F] leading-8 text-base mb-6"
          >
            {item.text}
          </p>
        );

      case "quote":
        return (
          <div
            key={index}
            className="my-10 border-l-4 border-[#1D976C] bg-[#F8FDFC] px-6 py-5 rounded-r-xl"
          >
            <p className="italic text-lg font-medium text-[#1D976C]">
              "{item.text}"
            </p>
          </div>
        );

      case "list":
        return (
          <ul
            key={index}
            className="list-disc pl-6 space-y-3 text-[#4F4F4F] mb-8"
          >
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        );

      case "table":
        return (
          <div key={index} className="overflow-x-auto my-10">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-[#1D976C] text-white">
                <tr>
                  {item.headers.map((header, i) => (
                    <th
                      key={i}
                      className="px-5 py-3 text-left font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {item.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b last:border-none"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-5 py-4 text-[#555]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };


  return (
    <article className="w-full">

      {/* Category */}
      <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-5">
        {blog.category}
      </span>


      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-[#121212] leading-tight mb-6">
        {blog.title}
      </h1>


      {/* Author */}
      <div className="flex items-center gap-4 mb-10">

        <img
          src={blog.author.image}
          alt={blog.author.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-[#121212]">
            {blog.author.name}
          </h4>

          <div className="flex gap-4 text-sm text-gray-500 mt-1">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{detail.readTime}</span>
          </div>
        </div>

      </div>


      {/* Hero Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-3xl w-full h-[450px] object-cover mb-10"
      />


      {/* Blog Content */}
      <div>
        {detail.content?.map((item, index) =>
          renderContent(item, index)
        )}
      </div>


      {/* Tags */}
      <div className="mt-12 flex flex-wrap gap-3">
        {detail.tags?.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>


      {/* Share */}
      <div className="mt-12 border-t pt-8">
        <ShareButtons />
      </div>

    </article>
  );
};

export default BlogContent;