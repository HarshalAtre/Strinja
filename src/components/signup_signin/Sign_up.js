import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './sign_up.css'
const Sign_up = () => {

    const[udata,setudata]=useState({

        name:"",
        email:"",
        number:"",
        password:"",
        apassword:""
    });

    console.log(udata)

    const adddata = (e)=>{
        const{name,value}=e.target;
        setudata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }
  return (
    <>
    <section>
        <div className='sign_container2'>
            <div className='sign_header2'>
                <img src="./winkel_logo.png" alt=''/>
            </div>
            <div className='sign_form2'>
                <form>
                    <h2>Welocome to Strinja</h2>
                    <div className='form_data2'>
                        <label  htmlFor='name'>Your Name</label>
                            <input type="text" onChange={adddata} value={udata.name} name="name" id="name"/>
                    </div>
                    <div className='form_data2'>
                        <label  htmlFor='email'>Email</label>
                            <input type="Text" onChange={adddata} value={udata.email} name="email" id="email"/>
                    </div>
                    <div className='form_data2'>
                        <label  htmlFor='number'>Mobile</label>
                            <input type="text" onChange={adddata} value={udata.number}  name="number" id="number"/>
                    </div>
                    <div className='form_data2'>
                        <label  htmlFor='password'>Password</label>
                            <input type="Password" onChange={adddata} value={udata.password} name="password" id="password" placeholder='Atlest 8 character'/>
                    </div>
                    <div className='form_data2'>
                        <label  htmlFor='apassword'>Confirm Password</label>
                            <input type="Password" onChange={adddata} value={udata.apassword} name="apassword" id="apassword" placeholder=''/>
                    </div>
                    <button> Create your Strinja account</button>
                </form>
            </div>
            <div className='create_accountinfo2'>
                <p>Already have an acount ?
                <NavLink to="/login">Sign in</NavLink></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sign_up