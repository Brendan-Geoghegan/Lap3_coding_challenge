import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';

const UserForm = () => {
  const [ formData, setFormData ] = useState("")

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Enter username:</label>
      <input type="text" placeholder="GitHub Username" id='username' onChange={(e) => setFormData(e.target.value)} />
      <input type="submit" value="Search!" />
    </form>
  )
}

export default UserForm
