import React from 'react'

const UserProfileInfo = ({ user, posts, profileId, setShowEdit }) => {
  return (
    <div className="relative py-6 md:px-8 bg-white">
      <div className="flex flex-col md:flex-row items-start gap-6 relative">
        
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6 md:left-8">
          <div className="w-32 h-32 border-4 border-white shadow-lg rounded-full overflow-hidden">
            <img
              src={user.profile_picture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full pt-20 md:pt-4 md:pl-40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            
            {/* Name & Username */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.full_name || "Add your name"}
              </h1>
              <p className="text-gray-600">
                {user.username ? `@${user.username}` : "Add username"}
              </p>
            </div>

            {/* Edit Button (optional) */}
            {!profileId &&
              <button
                onClick={() => setShowEdit(true)}
                className="mt-3 md:mt-0 px-4 py-2 bg-indigo-600 text-white text-sm cursor-pointer font-medium rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            }
          </div>
          <p className='text-gray-700 text-sm max-w-md mt-4'>{user.bio}</p>
          {/* Stats */}
          <div className='flex items-center gap-6 border-t border-gray-200 pt-4'>
            <div>
                <span className='sm:text-xl font-bold text-gray-900'>{posts.length}</span>
                <span className='sm:text-sm text-xs text-gray-600 ml-1'>Posts</span>
            </div>
            <div>
                <span className='sm:text-xl font-bold text-gray-900'>{user.followers.length}</span>
                <span className='sm:text-sm text-xs text-gray-600 ml-1'>Followers</span>
            </div>
            <div>
                <span className='sm:text-xl font-bold text-gray-900'>{user.following.length}</span>
                <span className='sm:text-sm text-xs text-gray-600 ml-1'>Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileInfo
