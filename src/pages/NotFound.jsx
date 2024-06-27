import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const uri = useLocation()
  return (
    <div className='not-found'>
      <p>Pathname ➡️ ('{uri.pathname}'), NOT found</p>
    </div>
  )
}

export default NotFound
