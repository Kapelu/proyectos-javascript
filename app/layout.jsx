"use client"
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

/* export const metadata = {
	title: 'Daniel Calderon - Portfolio',
	description: 'Portfolio de Daniel Calderon, Creado con Next.js app',
} */

export default function RootLayout({children}) {
	return (
		<html lang='es'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
