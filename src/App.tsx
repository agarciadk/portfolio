import {
	Presentation,
	Experience,
	Projects,
	Education,
	Skills,
	Wrapper,
	Nav
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
			</Wrapper>
		</>
	)
}

export default App
