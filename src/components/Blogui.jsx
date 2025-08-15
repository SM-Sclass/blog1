import React from 'react'
import { Link } from 'react-router-dom'

function Blogui(blog) {
  return (
    <div className='p-4 m-3 space-y-2 border border-black rounded-md'>
      {blog.blog.image_url && <img
        src={blog.blog.image_url}
        className='w-56 h-56'
      />}
      <div className='flex justify-end'>
        <Link to={`http://localhost:5173/editblog/${blog.blog._id}`}>Edit</Link>
      </div>
      <h3>{blog.blog.title}</h3>
      <p>{blog.blog.content}</p>
    </div>
  )
}

export default Blogui