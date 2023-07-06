import React, {useState} from 'react'
import Link from 'next/link'
import '../globals.css'
import './header.css'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

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
							src='./assets/icon/logo-kapelu.png'
							width='64'
							alt='Calderon Daniel'
						/>
					</Link>
				</div>
				<button
					className={`menu-btn ${isMenuOpen ? 'menu-hamburguer' : ''}`}
					onClick={() => {
						const $btnMenu = document.querySelector('.menu-btn')

						setIsMenuOpen(!isMenuOpen)

						$btnMenu.firstElementChild.classList.toggle('menu-none')
						$btnMenu.lastElementChild.classList.toggle('menu-none')
					}}
				>
					<svg
						className='menu-hamburguer'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
					</svg>
					<svg
						class='menu-none'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
					</svg>
				</button>
				<nav className={`menu ${isMenuOpen ? 'is-active' : ''}`}>
					<Link href='#'>Inicio</Link>
					<Link href='#acerca'>Acerca</Link>
					<Link href='#servicios'>Servicios</Link>
					<Link href='#portafolio'>Portafolio</Link>
					<Link href='#testimonios'>Testimonios</Link>
					<Link href='#Contacto'>Contacto</Link>
				</nav>
			</section>
		</header>
	)
}
