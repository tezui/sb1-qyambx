import React from 'react'
import { Users, Activity, DollarSign } from 'lucide-react'

const AdminDashboard: React.FC = () => {
  // TODO: Fetch actual data from API
  const stats = {
    totalUsers: 1000,
    activeUsers: 750,
    revenue: 50000,
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Activity className="h-10 w-10 text-green-500 mr-4" />
            <div>
              <p className="text-gray-500">Active Users</p>
              <p className="text-2xl font-bold">{stats.activeUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-yellow-500 mr-4" />
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">${stats.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard