import './acerca.css'

export default function Acerca() {
	return (
		<>
			<article className='text-lg-left'>
				<aside className='text-center text-lg-center'>
					<h1>Daniel Calderon</h1>
					<h5>
						<i>Full Stack Developer</i>
					</h5>
				</aside>
				<p>
					Soy un desarrollador <i>web</i> autodidacta, durante los
					ultimos 3 años he dedicado gran parte de mi tiempo a
					adquirir habilidades y conocimientos en el campo del
					desarrollo <i>web</i>.
				</p>
				<p>
					Soy una persona dedicada y comprometida con mi trabajo, y
					estoy dispuesto a aprender y adquirir nuevos conocimientos
					para mejorar mis habilidades como programador. Estoy más
					orientado al <i>Backend</i>, pero también hago <i>Frontend</i>. 
					Me gusta enfrentar nuevos desafíos y encontrar soluciones 
					creativas a	los problemas que se presentan.
				</p>
				<p>
					Estoy emocionado de tener la oportunidad de unirme a un
					equipo y contribuir al crecimiento de una empresa. Creo que
					esta va a ser una oportunidad ideal para seguir creciendo y
					aprendiendo, y estoy dispuesto a trabajar arduamente para
					alcanzar los objetivos de la empresa.
				</p>
				<div className='text-center text-lg-left'>
					<a
						className='btn'
						href='https://drive.google.com/file/d/19qdgxbpHagDmuI5Ssk8ybSDLXp9xy6bF/view?usp=share_link'
						target='_blank'
						rel='noopener'
					>
						DESCARGA MI CV
					</a>
				</div>
			</article>
			<article>
				<img
					className='gray-scale'
					src='./assets/perfil.png'
					alt='Daniel Calderon'
				/>
				<aside
					className='text-center description'
				>
					<p>
						“No soy un gran programador. Solo soy un buen
						programador con excelentes hábitos”
					</p>
				</aside>
				{/* 
                $ AGENDAR REUNION A TRAVES DE CALENDLY
                $ ************************************

                <div className='text-center text-lg-center'>
                    <a
                        className='btn'
                        href='https://calendly.com/daniel_calderon/30min'
                        target='_blank'
                        rel='noopener'
                    >AGENDAR REUNIÓN</a>
                </div> */}
			</article>
			<article>
				<h2 className='text-center text-lg-left'>Mis Habilidades</h2>
				<div className='progress'>
					<p>
						<b>RESOLUCIÓN DE PROBLEMAS</b>
						<b>80%</b>
					</p>
					<progress value='80' min='0' max='100'></progress>
				</div>

				<div className='progress'>
					<p>
						<b>ADAPTABILIDAD</b>
						<b>90%</b>
					</p>
					<progress value='90' min='0' max='100'></progress>
				</div>
				<div className='progress'>
					<p>
						<b>COMUNICACIÓN</b>
						<b>85%</b>
					</p>
					<progress value='85' min='0' max='100'></progress>
				</div>
				<div className='progress'>
					<p>
						<b>AUTOMOTIVACIÓN</b>
						<b>80%</b>
					</p>
					<progress value='80' min='0' max='100'></progress>
				</div>
				<div className='progress'>
					<p>
						<b>GESTIÓN DEL TIEMPO</b>
						<b>85%</b>
					</p>
					<progress value='85' min='0' max='100'></progress>
				</div>
			</article>
		</>
	)
}
