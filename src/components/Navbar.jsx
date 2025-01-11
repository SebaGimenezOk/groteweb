import React from 'react'
import IconoNav from "../assets/IconoGrote512.png"


const Navbar = () => {
  return (
    <div className='items-center flex justify-around w-full h-20  bg-gradient-to-tr from-orange-100 to-orange-200 '>
      <div className='flex items-center gap-7 mr-96  '>
        <p className='text-2xl font-medium text-slate-800 '> Radio Grote</p>
        <img src={IconoNav} alt="iconoGrote" className=' w-8  ' /></div>
      <p className='text-2xl font-medium  text-slate-800'>menu</p>
    </div>)
}

export default Navbar
