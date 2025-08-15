import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function EditBlogForm() {
  const params = useParams()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image_url, setImage_Url] = useState('')
  const [userId, setUserId] = useState('')

  const fetchBlog = async () => {
    const response = await fetch(`http://localhost:5000/blog/${params.id}`)
    const data = await response.json()
    setTitle(data.title)
    setContent(data.content)
    setImage_Url(data.image_url)
    setUserId(data.userId)
  }

  (!title && !content && !userId ) && fetchBlog()


  const updateBlog = async()=>{
    const response = await fetch(`http://localhost:5000/blog/${params.id}`,{
      method:"PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        title,
        content, 
        image_url,
        userId
      })
    })

    const data = await response.json()
    console.log(data)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      alert("Title is empty")
      return;
    }
    if (content.trim() === '') {
      alert("Content is empty")
      return
    }

    updateBlog()
    setTitle('')
    setContent('')
    setImage_Url('')
  }

  return (
    <div className='p-4'>
      <form className='space-y-3 flex flex-col' onSubmit={handleSubmit}>
        <input type='text' placeholder='Title'
          className='p-2'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea type='text' placeholder='Content'
          className='p-2'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type='text' placeholder='Image url'
          className='p-2'
          value={image_url}
          onChange={(e) => setImage_Url(e.target.value)}
        />

        <button className='bg-blue-400 text-white p-2'>Update Blog</button>
      </form>
    </div>
  )
}

export default EditBlogForm