import './Experience.css'
import mockExperiences from '../../mocks/experiences'
import ExperienceContent from './ExperienceContent'

const Experience = (): JSX.Element => {
	return (
		<>
			<h2>Experiencia</h2>
			{mockExperiences.map(experience => (<ExperienceContent key={experience.company} {...experience} />))}
		</>
	)
}

export default Experience
