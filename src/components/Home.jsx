import React from 'react';
import ImagenBg from '../assets/IconoNavbarColor2.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'



const Home = () => {

    return (
        <div name="Inicio" className='pt-[108px] bg-gradient-to-tr from-sky-950 to-slate-900'>
            {/* Contenedo principal con fondo */}

            {/* Texto principal */}
            <div className="text-center mb-10">
                <h2 className="text-4xl text-neutral-100">titulo general </h2>
                <p className="text-neutral-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora assumenda dolore, eligendi nemo aut itaque! Sint dolores, ea harum praesentium ratione suscipit! Voluptatum dolorem est esse perferendis rem accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore unde, perferendis ea voluptate fuga? Nihil fugiat unde odio voluptatem cupiditate fugit totam, beatae officiis quam, ducimus quis tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis cum et, beatae cupiditate sed porro tempora vitae? Molestiae neque dicta corrupti unde ipsam! Vitae qui delectus ipsum eius aliquid dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis omnis praesentium consequatur vitae inventore sint est neque corporis voluptatibus, culpa id totam dicta autem dolor impedit tenetur ab maxime minus nisi eligendi blanditiis tempore nam velit. Laudantium dolorum praesentium animi! Quos esse asperiores repellat, temporibus doloribus sequi alias, sapiente ea suscipit odit molestias magnam saepe earum officia quaerat! Quaerat minus, ipsam beatae accusantium dignissimos voluptates sunt nihil! Nobis eaque reiciendis fuga deserunt ratione, enim, quaerat aliquam ut eius assumenda minima quam commodi vel modi, culpa omnis. Molestias distinctio natus doloremque! Quasi temporibus modi excepturi provident adipisci vel cupiditate?
                </p>



            </div>

            {/* Contenedor de columnas */}
            <div className="flex flex-wrap gap-5 justify-center items-start w-full">
                <div className="grow h-[400px] shadow-md rounded-lg w-[600px] p-20  bg-sky-900 flex-col items-center justify-center">
                    <h3 className='text-4xl text-white '>titulo de seccion 1</h3>

                    <p className='text-white line-clamp-3 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam nisi qui non laborum, voluptatibus atque libero facilis magni incidunt aperiam quidem, enim inventore. Dolores delectus eius consequatur assumenda ut? Pariatur quas quis provident? Harum hic iste nisi ad ratione, inventore corporis ut ducimus consequuntur eligendi aut enim saepe eum quos qui? Sapiente qui molestiae dolores tempore repellendus aliquam! Iste commodi a vel delectus ducimus eos error necessitatibus eveniet dolore, debitis aut totam placeat blanditiis pariatur laborum maxime fuga, nisi veritatis beatae deleniti. Iure molestias iusto voluptates quod amet enim a eveniet. Ipsum earum facere numquam, dolores nemo omnis perspiciatis ullam dolorem quos quasi ea laudantium commodi saepe eaque suscipit fugiat atque molestias, itaque debitis voluptatibus? Vel sapiente fuga excepturi quia amet quis ducimus nesciunt quam quas, quidem exercitationem laudantium, asperiores similique aut autem vero vitae. Consectetur molestiae repellat ex deleniti quia mollitia ratione adipisci cum odit sunt soluta sapiente, quibusdam hic, odio asperiores perspiciatis illum. Dolorem consectetur libero dolore est, quasi, velit laborum atque saepe ducimus molestiae ad voluptates deleniti autem praesentium quia corrupti repellendus. Facere minima dolorum deserunt aliquid ab minus culpa vitae neque doloribus, officiis dicta alias error itaque animi laudantium cupiditate nihil sint! Alias, recusandae rerum?</p>
                    <button className=' bg-slate-400 rounded-lg h-9 w-24 text-neutral-50'><FaInstagram size={20} /><p>insta</p></button>
                    <button className=' text-neutral-50'><FaWhatsapp size={20} /></button>
                </div>
                <div className="grow  w-[400px] h-[400px] line-clamp-3 shadow-md rounded-lg bg-slate-700 flex items-center justify-center">
                    <h3 className='text-4xl text-white '>titulo de seccion 2</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo repellat magni perferendis ducimus quidem. Ipsum rerum minima laborum voluptatem, sequi id magnam veritatis! Laborum ea quae illo delectus quod mollitia magnam optio officiis laboriosam, provident modi nulla, animi voluptatibus pariatur facilis non odio fuga commodi dolore beatae voluptate quia. Natus sit iste impedit doloremque blanditiis laborum delectus consequatur earum sequi ipsa ipsum saepe, quidem nesciunt quae obcaecati cumque aspernatur perferendis. Perferendis voluptas, quod sequi odio repellat recusandae temporibus obcaecati qui ipsum neque sit repellendus repudiandae animi facilis saepe doloremque, optio facere voluptate veritatis voluptates ducimus aliquid. Consequuntur vitae dignissimos enim vel corporis consectetur, totam reprehenderit laborum repudiandae a? Dolorum facere eos maxime beatae, a ex corrupti fugit in cum rerum.</p>
                </div>
                <div className="w-full min-h-10 shadow-md rounded-lg bg-gradient-to-tr from-sky-800  to-sky-900 flex-shrink items-center justify-center p-20">
                    <div className="h-20 w-20 bg-cover bg-center" style={{
                        backgroundImage: `url(${ImagenBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>
                    <h1 className='text-neutral-50'>titulo seccion 3 </h1>
                    <p className='text-neutral-50 overflow-hidden line-clamp-3 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ullam nam exercitationem, officiis dolorem autem alias deserunt cupiditate, molestias corrupti minus laudantium eligendi nemo dignissimos quidem maiores et eaque! Beatae harum in architecto quod, nostrum officiis reprehenderit qui possimus accusantium unde? Adipisci reiciendis nulla velit veritatis, deserunt illum, nesciunt unde possimus nam praesentium blanditiis maxime laborum esse est pariatur similique laboriosam labore eos quidem quas debitis? Mollitia voluptatem nihil molestias minus eveniet error quos repellat velit in cum, labore voluptates, ex blanditiis consectetur recusandae quas pariatur laboriosam distinctio, nisi earum ipsa tempore obcaecati? Corporis, doloremque autem in sed molestiae quaerat culpa fuga aliquam sit recusandae aspernatur unde. Nostrum sunt eum cum veniam similique a, quaerat pariatur omnis ut nihil quidem!</p>
                </div>
                <div className="grow text-orange-500 font-extrabold text-4xl h-[200px] w-[200px] shadow-md rounded-lg bg-slate-400 flex items-center justify-center">
                    Texto y parrafo
                </div>
                <div className="grow text-orange-500 font-extrabold text-4xl h-[200px] w-[200px] shadow-md rounded-lg bg-slate-500 flex items-center justify-center">
                    5 Texto y parrafo
                </div>
            </div>

        </div>
    );
};

export default Home;
