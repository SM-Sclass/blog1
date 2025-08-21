import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import EditContext from '../context/use-blogdata'
import HeaderContext from '../context/use-header'

function Header() {

  console.log("header rendered")

  return (
    <div className="p-4 flex justify-center text-white bg-green-500">
      <div className='flex gap-2'>
        <Link to="/">Home</Link>
        <Link to="/myblog">My Blog</Link>
        <Link to="/addblog">Add Blog</Link>
      </div>
    </div>
  )
}

export default Header