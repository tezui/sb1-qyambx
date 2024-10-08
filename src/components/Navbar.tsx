import React from 'react'
import { Link } from 'react-router-dom'
import { Home, User, LogIn, UserPlus, Settings } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <Home className="h-8 w-8 mr-2 text-blue-400" />
                <span className="font-semibold text-gray-500 text-lg">SaaS Boilerplate</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/signin" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              <LogIn className="h-5 w-5 inline-block mr-1" />
              Sign In
            </Link>
            <Link to="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">
              <UserPlus className="h-5 w-5 inline-block mr-1" />
              Sign Up
            </Link>
            <Link to="/profile" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              <User className="h-5 w-5 inline-block mr-1" />
              Profile
            </Link>
            <Link to="/admin" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              <Settings className="h-5 w-5 inline-block mr-1" />
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar