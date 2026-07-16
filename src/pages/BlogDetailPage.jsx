// import { Navigate, useParams } from "react-router-dom";
// import blogDetails from "../data/blogDetailData";
// import blogs from "../data/blog";
// import BlogContent from "../components/news/BlogContent"
// import BlogSidebar from "../components/news/BlogSidebar"
// import RelatedPosts from "../components/news/RelatedPosts";


// const BlogDetailPage = () => {
//   const { slug } = useParams();

//   const blog = blogs.find((item) => item.slug === slug);

//   const detail = blogDetails.find((item) => item.slug === slug);

//   if (!blog) {
//     return <Navigate to="/404" replace />;
//   }

//   return (
//     <>

//       <div className="max-w-7xl mx-auto px-4">

//         <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

//           <BlogContent
//             blog={blog}
//             detail={detail}
//           />

//           <BlogSidebar />

//         </div>

//         <RelatedPosts
//           currentSlug={blog.slug}
//           currentCategory={blog.category}
//         />

//       </div>

//     </>
//   );
// };

// export default BlogDetailPage;


import { Navigate, useParams } from "react-router-dom";
import blogDetails from "../data/blogDetailData";
import blogs from "../data/blog";
import BlogContent from "../components/news/BlogContent";
import BlogSidebar from "../components/news/BlogSidebar";
import RelatedPosts from "../components/news/RelatedPosts";

const BlogDetailPage = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);
  const detail = blogDetails.find((item) => item.slug === slug);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_340px] gap-8 lg:gap-10">
        <BlogContent blog={blog} detail={detail}/>
        <div>
          <BlogSidebar />
        </div>
      </div>

      <RelatedPosts
        currentSlug={blog.slug}
        currentCategory={blog.category}
      />
    </div>
  )
}

export default BlogDetailPage;