import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import '../components/header.css'
import '../globals.css'
import '../components/hamburguer.css'

export default function Header() {
	/* const [isMenuOpen, setIsMenuOpen] = useState(false) */
	const [isMobile, setIsMobile] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	/* const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	} */

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	/* const item = {
		inicio: {name: 'Inicio', link: '#'},
		acerca: {name: 'Acerca', link: '#acerca'},
		servicios: {name: 'Servicios', link: '#servicios'},
		portafolio: {name: 'Portafolio', link: '#portafolio'},
		testimonio: {name: 'Testimonios', link: '#testimonios'},
		contact: {name: 'Contacto', link: '#contacto'},
	} */

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
						viewBox='0 0 24 24'
					>
						<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
					</svg>
				</button>
				<nav className='menu'> {/* ${isMenuOpen ? 'none' : ''} */}
					<Link href='#inicio'>Inicio</Link>
					<Link href='#acerca'>Acerca</Link>
					<Link href='#servicios'>Servicios</Link>
					<Link href='#portafolio'>Portafolio</Link>
					<Link href='#testimonios'>Testimonios</Link>
					<Link href='#Contacto'>Contacto</Link>
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
				</nav>
			</section>
		</header>
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
