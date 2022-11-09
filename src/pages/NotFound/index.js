import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()
  return (
    <>
    <h3>Error 404: Page not found with pathname {location.pathname}</h3>
    </>
  )
}

export default NotFound
