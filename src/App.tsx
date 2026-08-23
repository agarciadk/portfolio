import { JSX } from 'react/jsx-runtime'
import DecorativeBackground from './components/DecorativeBackground/DecorativeBackground'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Presentation from './sections/Presentation/Presentation'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App (): JSX.Element {
	return (
		<>
			<DecorativeBackground />
			<Header />
			<Main>
				<Presentation />
				<Projects />
				<Skills />
				<Experience />
			</Main>
			<Footer />
			{import.meta.env.PROD && <Analytics />}
			{import.meta.env.PROD && <SpeedInsights />}
		</>
	)
}

export default App
