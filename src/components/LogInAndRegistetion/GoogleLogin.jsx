import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {
  return (
    <button className='btn w-full'>
        <div className='flex items-center gap-2'>
            <FcGoogle size={24}/>
            <p>Google</p>
        </div>
    </button>
  )
}

export default GoogleLogin;