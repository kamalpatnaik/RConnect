import React from 'react'
import { assets } from '../assets/assets'
import {SignIn, SignUp} from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <img src={assets.bgImage} alt='' className='absolute top-0 left-0 -z-1 w-full h-full object-cover'/>
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-10'>
        <img src= {assets.incoss} alt='' className=' h-12 object-contain '/>
        <br />
        <div>
          <div>
            <img src={assets.group_users} alt="" className='h-8 md:h-10'/>
          </div>
           <h1 className='text-2xl md:text-5xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent '><br></br> Connecting RGUKT</h1>
           <p className='text-xl md:text-2xl text-indigo-900 max-w-72 md:max-w-md'>connect with friends in RGUKT from RConnect</p>
        </div>
        <span className='md:h-12'></span>
      </div>
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
        <SignIn/>
      </div>
    </div>
  )
}

export default Login
