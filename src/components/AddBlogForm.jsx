import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBlogForm() {
  const fileInputRef = useRef()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [tempUrl, setTempUrl] = useState('')



  const createBlog = async () => {

    const formData = new FormData()
    formData.append("title", title)  
    formData.append("content", content)  
    formData.append("image_url", imageFile) 

    const response = await fetch(`${process.env.BASE_URL}/blog`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // new
      },
      body: formData
    })

    const data = await response.json()
    navigate("/")
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
    setImageFile('')
  }

  const handleFileUpload = (e) => {
    setImageFile(e.target.files[0])
  }

  const handleRemove = () => {
    setImageFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
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
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
        />
        {imageFile && <p>{imageFile.name}</p>}
        {imageFile && <button onClick={handleRemove}>Remove image</button>}
        {imageFile && <img
          src={URL.createObjectURL(imageFile)        }
          className='w-56'
        />}

        <button className='bg-blue-400 text-white p-2'>Add Blog</button>
      </form>
    </div>
  )
}

export default AddBlogForm