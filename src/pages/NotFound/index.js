import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import HomeButton from '../../components/HomeButton'

const NotFound = () => {
  const location = useLocation()
  return (
    <>
    <HomeButton />
    <h3 id='error'>Error 404: Page not found with pathname {location.pathname}</h3>
    {/* <button id='home'><Link to='/'>Home</Link></button> */}
    </>
  )
}

export default NotFound
