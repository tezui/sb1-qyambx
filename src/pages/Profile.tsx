import React from 'react'
import { User } from 'lucide-react'

const Profile: React.FC = () => {
  // TODO: Fetch user data from API or context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2023-01-01',
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-center mb-4">
          <User className="h-20 w-20 text-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Join Date</label>
          <p className="text-gray-700">{user.joinDate}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile