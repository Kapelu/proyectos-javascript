import React, {useState, useEffect} from 'react'
import Link from 'next/link'
/* import '../components/header.css' */
import '../globals.css'
import '../components/hamburguer.css'

export default function Header() {
	/* const [isMenuOpen, setIsMenuOpen] = useState(false) */
	const [isMobile, setIsMobile] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	/* 	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	} */

/* 	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []) */

	/* const item = {
		inicio: {name: 'Inicio', link: '#'},
		acerca: {name: 'Acerca', link: '#acerca'},
		servicios: {name: 'Servicios', link: '#servicios'},
		portafolio: {name: 'Portafolio', link: '#portafolio'},
		testimonio: {name: 'Testimonios', link: '#testimonios'},
		contact: {name: 'Contacto', link: '#contacto'},
	} */

	return (
		<>
		<header className='header'>
			<section className='contenedor'>
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
				<button
					className='menu-btn'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
					</svg>
					<svg
						className='none'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 14 10'
					>
						<path d='M5 1 1 5l4 4m6-8L7 5l4 4' />
					</svg>
				</button>
				<nav className={`menu ${isMenuOpen ? 'menu-btn' : 'none'}`}>
					<Link href='#'>Inicio</Link>
					<Link href='#acerca'>Acerca</Link>
					<Link href='#servicios'>Servicios</Link>
					<Link href='#portafolio'>Portafolio</Link>
					<Link href='#testimonios'>Testimonios</Link>
					<Link href='#Contacto'>Contacto</Link>
				</nav>
				{/* <ul
						
					>
						{Object.keys(item).map((key) => (
							<li className='a' key={key}>
								<Link href={item[key].link}>
									{item[key].name}
								</Link>
							</li>
						))}
					</ul> */}
			</section>
		</header>
		</>
	)
}

/* codigo de descarte */
{
	/* <button className='hamburger-icon' onClick={toggleMenu}>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
					</button> */
}
