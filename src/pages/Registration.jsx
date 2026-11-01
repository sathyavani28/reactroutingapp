import React from 'react'

export default function Registration() {
  return (
    <div>
      <h3>Registration Page</h3>


      <form>

    <label>Fullname</label>
     <input type="text"/>

     
    <label>Gender</label>
    <div className='radio-group'>
     <input type="radio" value="male"/>Male
     <input type="radio" value="female"/>Female
     </div>


     <label>Email Address</label>
     <input type="email"/>

    <label>Username</label>
     <input type="text"/>

     <label>Password</label>
     <input type="password"/>

      <label>Location</label>
     <input type="text"/>


     <input type="submit" value="Register"/>

      </form>


    </div>
  )
}
