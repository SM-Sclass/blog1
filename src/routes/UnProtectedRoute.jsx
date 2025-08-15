import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

function UnProtectedRoute() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    if (token) {
        navigate('/')
    }
    
    return (
        <Outlet />
    )
}

export default UnProtectedRoute