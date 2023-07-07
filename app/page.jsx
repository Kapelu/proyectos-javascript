/* import Image from 'next/image' */
import Inicio from './components/Inicio'
import Acerca from './components/Acerca'

import './page.module.css'

export default function Home() {
	return (
		<>
			<section id='inicio' className='home'>
        <Inicio />
      </section>
			<section id="acerca" className="about section container full-lg-screen">
        <Acerca />
      </section>
			<section id='servicios' className=''>
        <h2>Servicios</h2>
      </section>
			<section id='portafolio' className=''>
        <h2>Portafolio</h2>
      </section>
			<section id='testimonios' className=''>
        <h2>Testimonios</h2>
      </section>
			<section id='contacto' className=''>
        <h2>Contacto</h2>
      </section>
		</>
	)
}
