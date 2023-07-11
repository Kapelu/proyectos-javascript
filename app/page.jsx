import Link from'next/link'
import Image from 'next/image'
import Inicio from './components/Inicio'
import Acerca from './components/Acerca'
import Servicios from './components/Servicios'
import Portafolio from './components/Portafolio'
import PortafolioModal from './components/PortafolioModal'

/* import './page.module.css' */
import './globals.css'

export default function Home() {
	return (
		<>
			<section id='inicio' className='home'>
        <Inicio />
      </section>
			<section id="acerca" className="container about section  full-lg-screen">
        <Acerca />
      </section>
			<section id='servicios' className='services section bg-gray-light'>
        <Servicios />
      </section>
			<section id='portafolio' className='portfolio section'>
      <Portafolio /><PortafolioModal />
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
