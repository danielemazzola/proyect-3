import React from 'react'
import { useLocation } from 'react-router-dom'

const Black = () => {
  const uri = useLocation()
  return (
    <div className='black'>
      <p>Pathname ➡️ ('{uri.pathname}')</p>
    </div>
  )
}

export default Black
