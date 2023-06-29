import Link from 'next/link'

export default function Header() {
	return (
		<header className='header'>
			<section className='container'>
				<div className='logo'>
					<Link href="https://github.com/Kapelu"
						target="_blank"
						rel="noopener"><img
						src="./assets/logo-kapelu.png"
						width="48"
						alt="Calderon Daniel"
				/></Link>
				</div>
				<button className='menu-btn'>
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
				<nav className='menu'>
					<Link href='/'>Inicio</Link>
					<Link href='/acerca'>Acerca</Link>
					<Link href='/servicios'>Servicios</Link>
					<Link href='/portafolio'>Portafolio</Link>
					<Link href='/testimonios'>Testimonios</Link>
					<Link href='/contacto'>Contacto</Link>
				</nav>
			</section>
		</header>
	)
}
