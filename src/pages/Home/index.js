import React from 'react'

import { UserForm } from '../../components'

const Home = () => {
  return (
    <div className='main-container'>
    <h1>GitHub Repo Tracker</h1>
    <img src='./github.png' alt='GitHub logo' />
    <UserForm />
    </div>
  )
}

export default Home
