layaout.jsx 




page.jsx

import Inicio from './components/Inicio'
import Acerca from './components/Acerca'
import './globals.css'

export default function Home() {
	return (
		<>
			<section id='inicio' className='container home'>
                <Inicio />
            </section>
			<section id="acerca" className="container about section  full-lg-screen">
                <Acerca />
            </section>
			<section id='servicios' className='container'>
                <h2>Servicios</h2>
            </section>
			<section id='portafolio' className='container'>
                <h2>Portafolio</h2>
            </section>
			<section id='testimonios' className='container'>
                <h2>Testimonios</h2>
            </section>
			<section id='contacto' className='container'>
                <h2>Contacto</h2>
            </section>
		</>
	)
}
