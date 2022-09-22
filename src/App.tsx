import {
	Presentation,
	Experience,
	Projects,
	Education,
	Skills,
	Wrapper
} from './components'

function App (): JSX.Element {
	return (
		<Wrapper>
			<Presentation profilePic='/profile.jpg' />
			<Experience />
			<Projects />
			<Education />
			<Skills />
		</Wrapper>
	)
}

export default App
