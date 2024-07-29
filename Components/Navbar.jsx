import React from 'react'

const Navbar = () => {
  return (
    <div className='flex y-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold'>ToDo App</h1>
      <ul className='flex gap-[40px] text-m'>
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
