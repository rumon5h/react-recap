import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditProfile = () => {

  const data = useLoaderData();

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [address, setAddress] = useState(data?.address);
  const [phone, setPhone] = useState(data?.phone);
  const [education, setEducation] = useState(data?.education);
  const [linkedin, setLinkedin] = useState(data?.linkedin);
  const [github, setGithub] = useState(data?.github);


    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const userInfo = {
            name, email, address, phone, education, linkedin, github
        }


        fetch(`http://localhost:5000/users/${data?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                  
                    toast.success("Profile updated successfully");
                }
            })
    }

    return (
        
    <form
    onSubmit={handleUpdateProfile}
    className='flex justify-center h-screen'>
      <div className='flex flex-col w-56 md:w-80 lg:w-96 gap-5 m-10 bg-slate-300 p-5 h-fit'>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setName(e.target.value)} required defaultValue={name} name='name' placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setEmail(e.target.value)} required defaultValue={email} name='email' placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setAddress(e.target.value)} required defaultValue={address} name='address' placeholder="Address" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setPhone(e.target.value)} required defaultValue={phone} name='phone' placeholder="Phone Number" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setEducation(e.target.value)} required defaultValue={education} name='education' placeholder="Education" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setLinkedin(e.target.value)} required defaultValue={linkedin} name='linkedin' placeholder="Linkedin" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          
          <input type="text" className="grow" onChange={(e) => setGithub(e.target.value)} required defaultValue={github} name='github' placeholder="Github" />
        </label>
        <button type='submit' className='btn btn-primary text-white'>Submit</button>
        
      </div>
    </form>
    );
};

export default EditProfile;