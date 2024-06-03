import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { FaPenToSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const {user} = useAuth()
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res => res.json())
    .then(data => setUserInfo(data))
  },[])

  const {photoURL, email, displayName} = user;
  return (
    <div>
      <img src={photoURL ? photoURL : "https://lh3.googleusercontent.com/a/ACg8ocK2_nnsyaw0DX9J49smJAxkSSTucZS7_byyXXyZSYC6xgMfQQbl=s96-c"} className='w-52 mt-10 rounded-md mx-auto' alt="" />
      <h1 className='text-3xl font-bold text-center mt-10'>{userInfo?.name}</h1>
      <h2 className='text-2xl font-bold text-center'>{userInfo?.email}</h2>
      <p className='grid justify-center'><Link to={`profile/edit/${userInfo?._id}`} className='btn btn-neutral btn-sm mt-5 text-white w[100px]  '><FaPenToSquare width={16} height={16} /> Edit</Link></p>
    </div>
  )
}

export default Dashboard;