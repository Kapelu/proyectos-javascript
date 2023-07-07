import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import '../globals.css'
import './header.css'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const handleClickOutsideMenu = (event) => {
			if (!event.target.matches('.menu-item')) return false
				const $btnMenu = document.querySelector('.menu-btn')
				$btnMenu.firstElementChild.classList.remove('menu-none')
				$btnMenu.lastElementChild.classList.add('menu-none')
				setIsMenuOpen(false)
		}
		document.addEventListener('click', handleClickOutsideMenu)
	}, [])

	const item = {
		inicio: {name: 'Inicio', link: '#'},
		acerca: {name: 'Acerca', link: '#acerca'},
		servicios: {name: 'Servicios', link: '#servicios'},
		portafolio: {name: 'Portafolio', link: '#portafolio'},
		testimonio: {name: 'Testimonios', link: '#testimonios'},
		contacto: {name: 'Contacto', link: '#contacto'},
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
							src='./assets/icon/logo-kapelu.png'
							width='64'
							alt='Calderon Daniel'
						/>
					</Link>
				</div>
				<button
					className={`menu-btn ${
						isMenuOpen ? 'menu-hamburguer' : ''
					}`}
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
						className='menu-none'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
					</svg>
				</button>

				<nav className={`menu ${isMenuOpen ? 'is-active' : ''}`}>
					{Object.keys(item).map((key) => (
						<Link href={item[key].link} key={key} passHref>
							<span className='menu-item'>{item[key].name}</span>
						</Link>
					))}
				</nav>
			</section>
		</header>
	)
}
