import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AddBlogForm from './components/AddBlogForm'
import ListBlog from './components/ListBlog'

function App() {
  const token = localStorage.getItem('token')

  return (
    <>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ListBlog/>} />
          <Route path="/myblog" element={<h1>My blog</h1>} />
          <Route path="/addblog" element={token ? (
            <AddBlogForm />
          ) : (
            <button className='p-2 bg-blue-400 text-white'>
              Login
            </button>
          )} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
