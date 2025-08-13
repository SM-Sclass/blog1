import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


  return (
    <div className="p-4 flex justify-center text-white bg-green-500">
      <div className='flex gap-2'>
          <Link to= "/">Home</Link>
          <Link to="/myblog">My Blog</Link>
      </div>
    </div>
  )
}

export default Header