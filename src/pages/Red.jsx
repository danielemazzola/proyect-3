import React from 'react'
import { useLocation } from 'react-router-dom'

const Red = () => {
  const uri = useLocation()
  return (
    <div className='red'>
      <p>Pathname ➡️ ('{uri.pathname}')</p>
    </div>
  )
}

export default Red
