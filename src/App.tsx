import { JSX } from 'react/jsx-runtime'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Nav from './components/Nav/Nav'
import Presentation from './components/Presentation/Presentation'
import Skills from './components/Skills/Skills'
import Wrapper from './components/Wrapper/Wrapper'

function App (): JSX.Element {
	return (
		<>
			<Nav />
			<Wrapper>
				<Presentation />
				<Experience />
				<Education />
				<Skills />
			</Wrapper>
		</>
	)
}

export default App
