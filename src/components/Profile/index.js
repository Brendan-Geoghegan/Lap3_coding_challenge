import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(prev => prev.userResults)

  return (
    <div id='profile'>
      <img id='avatar' src={user.avatar_url} alt='Profile Image' />
      <h1>{user.login}</h1>
      <p>{user.followers} followers • {user.following} following</p>
      {/* <h2>Organisations</h2>
      <img src='' alt='Organisation logo' border-radius='5px' /> */}
    </div>
  )
}

export default Profile
