import React, { useState } from 'react'
import Blogui from './Blogui'
import { useNavigate } from 'react-router-dom'

function ListBlog() {
  const [blogData, setBlogData] = useState(null)

  const fetchBlogData = async () => {
    const response = await fetch("http://localhost:5000/blog")
    const data = await response.json()
    setBlogData(data.data)
  }

  !blogData && fetchBlogData()

  return (
    <div>
      <h1>Blogs</h1>
      {blogData && blogData.length > 0 && blogData.map((eachblog, index) => {
        return <Blogui key={eachblog._id} blog={eachblog} />
      })}
    </div>
  )
}

export default ListBlog