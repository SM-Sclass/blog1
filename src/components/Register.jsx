import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (userData) => {
        try {
            const response = await fetch(`${process.env.BASE_URL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            if (!response.ok) {
                throw new Error('Registration failed')
            }
            const data = await response.json()
            console.log('Registration successful:', data)
        } catch (error) {
            console.error('Error registering user:', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Entered")
        // Handle registration logic here
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert("All fields are required")
            return;
        }
        registerUser({ name, email, password })
    }

    return (
        <div className="flex flex-col items-center justify-center bg-blue-500 space-y-3 p-4 m-2 rounded-md">
            <h1 className='text-white'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <input type="text" placeholder='username' className='p-2 rounded-md' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='email' className='p-2 rounded-md' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder='password' className='p-2 rounded-md' value={password} onChange={e => setPassword(e.target.value)} />

                <div className='flex justify-end'>
                    <button type="submit" className='bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-md'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register