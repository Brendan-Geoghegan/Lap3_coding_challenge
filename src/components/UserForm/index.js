import React, { useState } from 'react'

const UserForm = () => {
  const [ formData, setFormData ] = useState("")

  return (
    <form>
      <label htmlFor='username'>Enter username:</label>
      <input type="text" placeholder="GitHub Username" id='username' onChange={(e) => setFormData(e.target.value)} />
      <input type="submit" value="Search!" />
    </form>
  )
}

export default UserForm
