import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()
  return (
    <>
    <h3>Error 404: Page not found with pathname {location.pathname}</h3>
    <button id='home'><Link to='/'>Home</Link></button>
    </>
  )
}

export default NotFound
