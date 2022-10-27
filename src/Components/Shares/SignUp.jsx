import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const SignUp = () => {
  const navigate = useNavigate()


    const {user,userupdateprofile,createUser}= useContext(AuthContext) 

    const handleSubmit = event=>{

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
       const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            navigate('/login')

            handleUpdateUserProfile(name,photoURL)
        })
        .catch(error=>{
            console.error(error)
        })

    }
    const handleUpdateUserProfile =(name,photoURL)=>{

      const profile={

        displauName : name,
        photoURL:photoURL

      }
      userupdateprofile(profile)
      .then(()=>{})
      .catch(error=>{
        console.error(error)
      })

    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Sign Up!</h1>
        </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input name='photoURL' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </form>
      </div>
      
    );
};

export default SignUp;