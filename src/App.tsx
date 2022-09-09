import './App.css'
import {
	Presentation,
	Experience,
	Projects,
	Education,
	Skills
} from './components'

function App (): JSX.Element {
	return (
		<div>
			<Presentation profilePic='/profile.jpg' />
			<Experience />
			<Projects />
			<Education />
			<Skills />
		</div>
	)
}

export default App
