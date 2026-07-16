import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <article className='group rounded-xl bg-white border border-[#E8E8EA] p-6 shadow-sm transition  hover:-translate-y-2 duration-300'>
      <img src={blog.image} alt={blog.title} 
      className='rounded-md  h-60 w-full object-cover transition duration-500 group-hover:scale-105'/>
      <div className='mt-6'>
        <span className='text-primary font-light text-base py-2 px-6 rounded-md bg-[#4B6BFB0D]'>
          {blog.category}
        </span>
        <h3 className='font-semibold text-[#181A2A] text-xl mt-4 leading-7'>
          {blog.title}
        </h3>
      </div>
      <div className='flex items-center gap-3 my-6'>
        <div>
          <img src={blog.author.image} alt={blog.author.name} className='w-12 h-12 rounded-full'/>
        </div>
        <div className='flex items-center gap-12'>
          <p className='font-medium text-[#97989F] text-base'>{blog.author.name}</p>
          <p className='text-[#97989F] text-sm'>{blog.date}</p>
        </div>
      </div>
      <Link to={`/blogs/${blog.slug}`}
        className=' font-medium text-primary font-base'
        >
           Read More →
        </Link>
    </article>
  )
}

export default BlogCard
