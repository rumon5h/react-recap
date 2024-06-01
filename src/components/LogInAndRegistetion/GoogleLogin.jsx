import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("Account created successfully");
            }
          });
      }
    });
  }

  return (
    <div onClick={handleGoogleLogin} className='btn w-full'>
      <div className='flex items-center gap-2'>
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </div>
  )
}

export default GoogleLogin;