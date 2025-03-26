import { JSX } from 'react/jsx-runtime'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Presentation from './components/Presentation/Presentation'
import Skills from './components/Skills/Skills'

function App (): JSX.Element {
	return (
		<>
			<Header />
			<Main>
				<Presentation />
				<Experience />
				<Skills />
				<Education />
			</Main>
		</>
	)
}

export default App
