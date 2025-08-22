import React, { useState, useEffect } from 'react'
import Blogui from './Blogui'
import { useSelector, useDispatch } from 'react-redux'
import { addBlogs, updateBlog } from '../redux/features/blog/slice'
import { useNavigate } from 'react-router-dom'

function ListBlog() {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogReducer)
  console.log(blogs)

  const fetchBlogData = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog`)
    const data = await response.json()
    return data.data
  }

  useEffect(() => {
    async function getData(){
      const blogData = await fetchBlogData()
      dispatch(addBlogs(blogData))
      dispatch(updateBlog( {
            _id: "6895a1ebed3be98eae0e3f8b",
            title: "blog 1111",
            image_url:"newww",
            content:"No neww"
        },))
    }

    getData()
    console.log("BLogs from list ", blogs)
  }, [])

  return (
    <div>
      <h1>Blogs</h1>
      {blogs && blogs?.length > 0 && blogs?.map((eachblog, index) => {
        return <Blogui key={eachblog?._id} blog={eachblog} />
      })}
    </div>
  )
}

export default ListBlog