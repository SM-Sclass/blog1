import React, { useState } from 'react'

function AddBlogForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image_url, setImage_Url] = useState('')

  const createBlog = async () => {
    const response = await fetch("http://localhost:5000/blog", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content,
        userId: "6892e12270ba8348d14ea038",
        image_url
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

    createBlog()
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

        <button className='bg-blue-400 text-white p-2'>Add Blog</button>
      </form>
    </div>
  )
}

export default AddBlogForm