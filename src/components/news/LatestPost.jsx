import React, { useState } from 'react'
import PageHero from '../shared/PageHero'
import Title from '../ui/Title'
import blogs from '../../data/blog'
import BlogCard from '../ui/BlogCard'
import Pagination from './Pagination'

const LatestPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 6;

  const lastIndex = currentPage * blogPerPage;
  const firstIndex = lastIndex - blogPerPage;

  const currentBlogs = blogs.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(blogs.length / blogPerPage)

  return (
  
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <Title text="Latest Posts"/>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14'>
        {currentBlogs.map((blog) =>(
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
          <Pagination 
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={setCurrentPage}
          />
        </div>
    </section>
  )
}

export default LatestPost
