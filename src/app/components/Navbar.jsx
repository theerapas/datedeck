"use client";
import React from 'react';

const Navbar = () => {
  return (
    <div className='space-x-10 flex justify-center text-white'>
      <a href="/login">Login</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/accSetting">Account Settings</a>
      <a href="/comparison">Comparison</a>
    </div>
  );
};

export default Navbar;