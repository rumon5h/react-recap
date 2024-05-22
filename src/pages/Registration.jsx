import React, { useState } from 'react';
import GoogleLogin from '../components/LogInAndRegistetion/GoogleLogin';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Registration = () => {
    const [passMatch, setPassMatch] = useState(true);

    const {user,createUser} = useAuth();

    if(user){
        return <Navigate to={"/"}/>
    }

    const handleRegistration = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password != confirmPassword){
            setPassMatch(false);
        }

        if(password === confirmPassword && email){
            setPassMatch(true);
             createUser(email, password);
            
        }

    }
    return (
        <form onSubmit={handleRegistration} className='flex justify-center h-screen'>
            <div className='flex flex-col w-56 md:w-80 lg:w-96 gap-5 m-10 bg-slate-300 p-5 h-fit'>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" name='email' placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" name='password' placeholder="Password" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" name='confirmPassword' placeholder="confirm password" />
            </label>

            <p><span className='text-slate-950 text-[18px]'>Already have an account?</span> <Link className='text-blue-700 font-bold' 
            to={"/login"}>LogIn</Link></p>

            <button type='submit' className='btn btn-primary text-white'>Register</button>
            <GoogleLogin/>
            </div>
        </form>
    );
};

export default Registration;