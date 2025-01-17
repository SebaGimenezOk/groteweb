import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import AudioPlayer from './AudioPlayer';
import { Link } from 'react-scroll'
import  IconNavbar  from '../assets/IconoNavbarColor2.png'



const NavBar = () => {
  const [nav, setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: 'INICIO'
    },
    {
      id: 2,
      link: 'INSTITUCIONAL'
    },
    {
      id: 3,
      link: 'PROGRAMAS'
    },
    {
      id: 4,
      link: 'ARCHIVO'
    },
    {
      id: 5,
      link: 'CONTACTO'
    },

  ]

  return (
    <div  className='flex  w-full fixed bg-sky-950 h-[108px] items-center' >
      <div className="flex justify-evenly items-center text-sky-800 bg-neutral-100  w-full h-24 px-5 py-5 ">
      <div className='flex flex-row items-center gap-4'>
      <h1 className='text-3xl font-medium font-signature  md:text-4xl '>RADIO GROTE </h1>
        <img className="w-24 pt-2 flex" src={IconNavbar} alt="logotye" />
 

      </div>
      <AudioPlayer />


      <ul className='hidden md:flex'>

        {links.map(({ id, link }) => (
          <li key={id} className='px-2 cursor-pointer capitalize font-normal text-lg  hover:scale-105 duration-200 hover:text-orange-400'>
            <Link to={link} smooth duration={700}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer ml-10  pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from text-sky-800 bg-neutral-100 '>

          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'> <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
          ))}

        </ul>
      )}


    </div>
    </div>
  )
}

export default NavBar
