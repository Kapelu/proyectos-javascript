import '../components/footer.css'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				Sitio diseñado y desarrollado por &nbsp;
				<Link className='link'
					href='https://github.com/Kapelu'
					target='_blank'
					rel='noopener'
				>
					@Kapelu
				</Link>
			</small>
		</footer>
	)
}
