import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-5'>
      <Navbar2/>
      <Navbar1/>
    </div>
  )
}

export default Navbar
