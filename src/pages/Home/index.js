import React from 'react'

import { UserForm } from '../../components'
import image from '../../../assets/github.png'

const Home = () => {
  return (
    <div className='main-container'>
    <h1>GitHub Repo Tracker</h1>
    <img src={image} alt='GitHub logo' />
    <UserForm />
    </div>
  )
}

export default Home
