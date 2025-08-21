import React, {useState, useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

function UnProtectedRoute() {
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(()=>{
        if(token){
            navigate("/")
        }
      },[])
    
    return (
        <Outlet />
    )
}

export default UnProtectedRoute