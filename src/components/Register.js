import React, { useState } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom'

const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [navigate,setNavigate]=useState(false)
  const submit=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:8000/auth/register",{name:name,email:email,password:password})
    console.log(response)
    setNavigate(true)
  }
  if (navigate)
  return <Navigate to = "/login"></Navigate>

  return (

    
    <main className="form-signin">
        
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
      <div className="form-floating">
        <input type="text" className="form-control"  placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        <label>Name</label>
      </div>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <label for="floatingPassword">Password</label>
      </div>
  
     
      <button className="w-100 btn btn-lg btn-success" type="submit">Submit</button>
    </form>
  </main>
  )
}

export default Register