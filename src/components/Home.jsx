import React from 'react'

import marcoprueba from '../assets/captura 01.png'


const Home = () => {
    return (
        <div name='Inicio' >
            <div className='h-screen py-56  mx-auto flex flex-col items-center justify-center bg-gradient-to-t from-sky-800 from-10%  to-sky-950 to-90%  '>
                <div>

                    <h2 className='text-4xl text-neutral-100 '> aca va el titulo</h2>
                    <p className='text-neutral-50'>
                        aca va todo el parrafo par ver como queda el texto
                    </p>
                    <img className=" h-[400px] w-auto flex justify-center " src={marcoprueba} alt="le" />
                </div>
            </div>


        </div>



    )
}

export default Home