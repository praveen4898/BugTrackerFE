import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <Link to="/signup" className="mr-4">Signup</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/tracker">Tracker</Link>
    </div>
  )
}


export default Navbar