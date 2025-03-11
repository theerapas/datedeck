"use client";
import React from 'react'

const Navbar = () => {
  return (
    <div className='space-x-10 flex justify-center'>
        <a href="/login">Login</a>
        <a href="/home">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/account">Account</a>
        
    </div>

  )
}

export default Navbar