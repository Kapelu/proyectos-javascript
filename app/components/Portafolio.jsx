import portafolio from '../json/portfolio.json'
import Link from 'next/link'
/* import Image from 'next/image' */
import '../globals.css'
import './portafolio.css'
import './portafolioModal.css'

export default function Portafolio() {
	const [activeModalId, setActiveModalId] = React.useState('')

	const openModal = (id) => {
		setActiveModalId(id)
	}

	const closeModal = () => {
		setActiveModalId('')
	}
	return (
		<>
			<div className='container'>
				<h2 className='section-title'>Mis Trabajos</h2>

				{portafolio.map((item, index) => (
					<Link
						href={`#${item.id}`}
						className={`portfolio-card ${
							modalOpen ? 'modal-open' : ''
						}`}
						key={index}
						onClick={openModal}
					>
						<img src={item.imagen} alt={item.titulo} />
						<aside className='portfolio-card-info'>
							<div>
								<h3>{item.titulo}</h3>
								<p>{item.descripcion}</p>
							</div>
						</aside>
					</Link>
				))}
			</div>
			{portafolio.map((item) => (
				<article
					className='modal'
					id={`trabajo-${item.id}`}
					key={item.id}
				>
					<div className='modal-content'>
						<Link href='#cerrar' className='modal-close'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z' />
							</svg>
						</Link>
						<article className='portfolio-modal'>
							<img src={item.imagen} alt={item.titulo} />
							<div className='portfolio-info'>
								<h3>{item.titulo}</h3>
								<p>{item.descripcion}</p>
								<aside className='portfolio-details'>
									<small>
										<b>FECHA:</b>
									</small>
									<small>{item.fecha}</small>
									<small>
										<b>TIPO:</b>
									</small>
									<small>{item.tipo}</small>
									<small>
										<b>ENLACE:</b>
									</small>
									<small>
										<Link
											href={item.enlace}
											target='_blank'
											rel='noopener'
										>
											{item.enlace}
										</Link>
									</small>
									<small>
										<b>REPOSITORIO:</b>
									</small>
									<small>
										<Link
											href={item.repositorio}
											target='_blank'
											rel='noopener'
										>
											{item.repositorio}
										</Link>
									</small>
								</aside>
							</div>
						</article>
					</div>
				</article>
			))}
		</>
	)
}
