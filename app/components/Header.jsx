import React, {useState} from 'react'
import Link from 'next/link'
import '../components/header.css'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const item = {
		inicio: {name: 'Inicio', link: '#'},
		acerca: {name: 'Acerca', link: '#acerca'},
		servicios: {name: 'Servicios', link: '#servicios'},
		portafolio: {name: 'Portafolio', link: '#portafolio'},
		testimonio: {name: 'Testimonios', link: '#testimonios'},
		contact: {name: 'Contacto', link: '#contacto'},
	}

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
				{/* <button
					className='hamburger-icon'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</button> */}
				<nav className='menu'>
					<button className='hamburger-icon' onClick={toggleMenu}>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
					</button>
					<ul className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
						{Object.keys(item).map((key) => (
							<li className='a' key={key}>
								<Link href={item[key].link}>
									{item[key].name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</header>
	)
}

/* import Link from 'next/link'
import '../components/header.css'

export default function Header() {
	const item = {
		inicio: {name: 'Inicio', link: '#'},
		acerca: {name: 'Acerca', link: '#acerca'},
		servicios: {name: 'Servicios', link: '#servicios'},
		portafolio: {name: 'Portafolio', link: '#portafolio'},
		testimonio: {name: 'Testimonios', link: '#testimonios'},
		contact: {name: 'Contacto', link: '#contacto'},
	}
	
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
					<ul>
						{Object.keys(item).map((key) => (
							<li className='a' key={key}>
								<Link href={item[key].link}>
									{item[key].name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</header>
	)
}
 */
