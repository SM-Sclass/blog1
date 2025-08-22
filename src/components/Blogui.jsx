import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBlogData } from '../context/use-blogdata'


function Blogui(blog) {
  const Navigate = useNavigate()
  const values = useBlogData()

  return (
    <div className='p-4 m-3 space-y-2 border border-black rounded-md'>
      {blog?.blog?.image_url && <img
        src={blog?.blog?.image_url}
        className='w-56 h-56'
      />}
      <div className='flex justify-end' >


        <button onClick={() => {
          values.setEditingBlogData(blog?.blog)
          Navigate(`/editblog`)
        }}>
          Edit
        </button>




        
      </div>
      <h3>{blog?.blog?.title}</h3>
      <p>{blog?.blog?.content}</p>
    </div>
  )
}

export default Blogui