import React, { useState } from 'react'

export default function Login() 
{
     const [formdata,setFormData] = useState({
         username:"",
         password:"" 
     })    // object with 2 properties username and password and initially with empty strings ""
    
    // where e is an event
    // e.target means specific field

     const handleChange = (e) => {
             //console.log("text is typing .......")
             // console.log(e)
             // console.log(e.target)

             const id = e.target.id
             const value = e.target.value

             console.log(id,value)

          // SetFormData function is used to modify the formdata

             setFormData({...formdata,[id]:value})
     }

     const handleSubmit = (e) => {

           e.preventDefault()      

           console.log(formdata)
     }


  return (
    <div>
      <h3>Login Page</h3>

     <form onSubmit={handleSubmit}>

     <label>Username</label>
     <input type="text" id="username" onChange={handleChange} required/>

     <label>Password</label>
     <input type="password" id="password" onChange={handleChange} required/>


     <input type="submit" value="Login"/>


     </form>

    </div>
  )
}
