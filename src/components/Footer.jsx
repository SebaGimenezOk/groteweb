import React from 'react'
import Icons from './Icons'



const Footer = () => {




    return (
        <footer className='bg-neutral-800 py-2'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-center text-gray-400 pt-8 ' >
                <span className='px-7 '>Todos los Derechos Reservados.2019</span>
                <span className='px-7'>+54 11 2457 6875</span>
                <span className='px-7'>Términos y Politica de Privacidad</span>
                <span className='px-7'>Junín 1063 (C1113AAE) C.A.B.A</span>
            </div>
            <Icons />
        </footer>
    )
}

export default Footer