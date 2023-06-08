import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav'>
          <NavLink to={'/counter'} className='navlink'>Pure Component </NavLink>
          <NavLink to={'/HOC'} className='navlink'>HOC</NavLink>
          
    </div>
  )
}

export default Navbar