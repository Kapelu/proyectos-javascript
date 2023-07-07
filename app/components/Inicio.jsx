/* import React, {useState} from 'react' */
import Link from 'next/link'
import '../globals.css'
import './inicio.css'

export default function Inicio() {
	const heroImage ={
		backgroundImage: 'url(assets/hero-image-home.png)',
		backgroundAttachment: 'fixed',
		}

	const heroImageOpacity={
		opacityColor:'var(--black-alpha-color)'
	}
	return (
		<article
				className='hero-image'
				style={heroImage}
			>
				<aside
					className='hero-image-opacity'
					style={heroImageOpacity}
				>
					<div className='hero-image-content'>
						<h2
							className='hero-image-title'
							/* style='--hero-text-color: var(--white-color)' */
						>
							Bienvenid@s
							<br />a mi sitio
						</h2>
						<a href='#contacto' className='btn'>
							CONTÁCTAME
						</a>
					</div>
				</aside>
			</article>
	)
}
