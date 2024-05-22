import React from 'react'
import GoogleLogin from '../components/LogInAndRegistetion/GoogleLogin';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const {signIn} = useAuth();
  const handleLogIn = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    
    if(email && password){
      signIn(email, password);
    }
    
  }
  return (
    <form
    onSubmit={handleLogIn}
    className='flex justify-center h-screen'>
      <div className='flex flex-col w-56 md:w-80 lg:w-96 gap-5 m-10 bg-slate-300 p-5 h-fit'>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" name='email' placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" name='password' placeholder="Password" />
        </label>
        <p><span className='text-slate-950 text-[18px]'>Don't have an account?</span> <Link className='text-blue-700 font-bold' 
        to={"/registration"}>Register</Link></p>

        <button type='submit' className='btn btn-primary text-white'>Login</button>
        <GoogleLogin />
      </div>
    </form>
  )
}

export default Login;