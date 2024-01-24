import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sign_in.css"
import { useForm } from 'react-hook-form';

const Sign_in = ({isAuth,handleSignIn})=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.Email==='strinja07@gmail.com' && data.Password==='Strinja@Gwoc'){
            console.log(data.Email,data.Password)
            handleSignIn();
        }
    } 
    // console.log(errors);
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
            </div>
            <div className='sign_form'>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                >
                    <h2>Welcome to Strinja</h2>
                    <div className='form_data'>
                        <label  htmlFor='email'>Email</label>
                            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    </div>
                    <div className='form_data'>
                        <label  htmlFor='password'>Password</label>
                            <input type="password" placeholder="Atlest 8 character" {...register("Password", {required: true, min: 8})} />
                    </div>
                    <center>
                        <button className='signin_btn' type='submit'>Sign in</button>
                    </center>
                </form>
            </div>
            {/* <div className='create_accountinfo'>
                <p>New to Strinja ? </p>
                <NavLink  to="/register"><button> Create your Strinja account</button></NavLink>
            </div> */}
        </div>
    </section>
    </>
  )
}

export default Sign_in