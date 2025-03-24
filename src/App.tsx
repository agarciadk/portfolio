import { JSX } from 'react/jsx-runtime'
import {
	Education,
	Experience,
	Nav,
	Presentation,
	Skills,
	Wrapper,
} from './components'

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
