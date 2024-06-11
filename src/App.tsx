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
				<Presentation profilePic='https://github.com/agarciadk/agarciadk/assets/4200145/e76b360e-0bdc-4ad4-8ca5-bb91ebccf09a' />
				<Experience />
				<Projects />
				<Education />
				<Skills />
			</Wrapper>
		</>
	)
}

export default App
