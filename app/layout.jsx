"use client"
import Script from'next/script'
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
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
				{/* <Script>
				window.addEventListener('blur', {() => {
				document.title = 'Come back! 🥺'
			}})
			window.addEventListener('focus', {() => {
				document.title = 'Daniel Calderon'
			}})
				</Script> */}
			</body>
		</html>
	)
}
