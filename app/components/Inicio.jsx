import Image from 'next/image'
import '../globals.css'
import './inicio.css'

export default function Inicio() {
	return (
		<article className='hero-image'>
			<aside className='hero-image-opacity'>
				<div className='hero-image-content'>
					<div>
						<h2 className='hero-image-title'>
							Bienvenid@s
							<br />a mi sitio
						</h2>
						<br />
						<a href='#contacto' className='btn'>
							CONTÁCTAME
						</a>
					</div>
					<div>
						<Image
							src='/assets/perfil.png'
							alt='Picture of the author'
							width={800}
							height={500}
							quality={100}
							priority={true}
						/>
					</div>
				</div>
			</aside>
		</article>
	)
}
