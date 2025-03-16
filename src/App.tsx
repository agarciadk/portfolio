import { JSX } from 'react/jsx-runtime'
import { Element } from 'react-scroll'
import {
	Contact,
	Education,
	Experience,
	Nav,
	Presentation,
	Projects,
	Skills,
	Wrapper,
} from './components'

function App (): JSX.Element {

	return (
		<>
			<Nav />
			<Wrapper>
				<Presentation profilePic='/profile.webp' />
				<Experience />
				<Projects />
				<Education />
				<Skills />
				<Contact />
			</Wrapper>
		</>
	)
}

export default App
