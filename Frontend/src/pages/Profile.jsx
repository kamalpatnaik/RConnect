import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyPostsData, dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
import UserProfileInfo from '../components/UserProfileInfo'
import PostCard from '../components/PostCard'
import ProfileModel from '../components/ProfileModel'

const Profile = () => {
  const {proileId} = useParams()
  const [user, setUser]= useState(null)
  const [posts, setPosts]= useState([])
  const [activateTab, setActivateTab]= useState('posts')
  const [showEdit, setShowEdit]= useState(false)

  const fetchUser = async () =>{
    setUser(dummyUserData)
    setPosts(dummyPostsData)
  }

  useEffect(()=>{
    fetchUser()
  },[])
  return user ? (
    <div className='relative h-full overflow-y-scroll bg-gray-50 p-6'>
      <div className='max-w-3xl mx-auto'>
        {/* profile card */}
        <div className='bg-white rounded-2xl shadow overflow-hidden'>
          {/* cover photo */}
          <div className='h-40 md:h-56 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
            {user.cover_photo && <img src={user.cover_photo} alt='' className='w-full h-full object-cover'/>}
          </div>
          {/* info */}
          <UserProfileInfo user={user} posts={posts} profileId={proileId} setShowEdit={setShowEdit}/>
        </div>
         <div className="mb-8 ">
          <h3 className="text-2xl justify-center font-bold text-slate-900 mb-2">
            All Posts
          </h3>
        </div>
        <div>{posts.map((post)=> <PostCard key={post._id} post={post}/>)}</div>
      </div>
      {showEdit && <ProfileModel setShowEdit={setShowEdit}/>}
    </div>
  ):
  (<Loading/>)
}

export default Profile
