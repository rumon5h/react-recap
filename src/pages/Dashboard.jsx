import React from 'react'
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const {user} = useAuth()
  console.log(user);
  const {photoURL, email, displayName} = user;
  return (
    <div>
      <img src={photoURL ? photoURL : "https://lh3.googleusercontent.com/a/ACg8ocK2_nnsyaw0DX9J49smJAxkSSTucZS7_byyXXyZSYC6xgMfQQbl=s96-c"} className='w-52 mt-10 rounded-md mx-auto' alt="" />
      <h1 className='text-3xl font-bold text-center mt-10'>{displayName}</h1>
      <h2 className='text-2xl font-bold text-center'>{email}</h2>
    </div>
  )
}

export default Dashboard;