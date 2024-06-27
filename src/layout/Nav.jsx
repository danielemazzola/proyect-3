import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Indigo</Link>
          <Link to='/red'>Red</Link>
          <Link to='/black'>Black</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Nav
