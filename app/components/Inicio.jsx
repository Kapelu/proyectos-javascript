/* import React, {useState} from 'react' */
import Link from 'next/link'
import '../globals.css'
import './inicio.css'

export default function Inicio() {
	const styleInLine = ()=>{
		const imagen ={
			imagen: url('assets/hero-image-home.png')
			/* hero-attachment: fixed */
		}
	
	return (
		<article
				className='hero-image'
				style={imagen}
			>
				<aside
					className='hero-image-opacity'
					/* style='--hero-opacity-color: var(--black-alpha-color)' */
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
	)}
}
