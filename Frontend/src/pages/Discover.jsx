import React, { useState } from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Search } from 'lucide-react'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'

const Discover = () => {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState(dummyConnectionsData)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setUsers([])
      setLoading(true)
      setTimeout(() => {
        setUsers(dummyConnectionsData)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
            Discover
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Connect with your friends
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search people..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         bg-white shadow-sm text-sm sm:text-base transition-all"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyUp={handleSearch}
            />
          </div>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {users.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>

        {/* Loading */}
        {loading && <Loading height="60vh" />}
      </div>
    </div>
  )
}

export default Discover
