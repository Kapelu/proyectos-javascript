import Link from 'next/link'
import '../components/header.css'



export default function Header() {
	return (
		<header className='header'>
			<section className='container'>
				<div className='logo'>
					<Link
						href='https://github.com/Kapelu'
						target='_blank'
						rel='noopener'
					>
						<img
							src='./assets/logo-kapelu.png'
							width='64'
							alt='Calderon Daniel'
						/>
					</Link>
				</div>
				<nav className='menu'>
					<Link href='#'>Inicio</Link>
					<Link href='#acerca'>Acerca</Link>
					<Link href='#servicios'>Servicios</Link>
					<Link href='#portafolio'>Portafolio</Link>
					<Link href='#testimonios'>Testimonios</Link>
					<Link href='#contacto'>Contacto</Link>
				</nav>
			</section>
		</header>
	)
}
