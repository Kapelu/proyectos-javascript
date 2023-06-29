import './globals.css'
import Script from 'next/script'
import Header from './components/Header'

export const metadata = {
	title: 'Daniel Calderon - Portfolio',
	description: 'Portfolio de Daniel Calderon, Creado con Next.js app',
}

export default function RootLayout({children}) {
	return (
		<html lang='es'>
			<body>
				<Header />
				<main>{children}</main>
        <Script src='./script/script-menu.js' strategy='afterInteractive'/>
			</body>
		</html>
	)
}
