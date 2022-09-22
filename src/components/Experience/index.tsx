import mockExperiences from '../../mocks/experiences'
import ExperienceContent from './ExperienceContent'

const Experience = (): JSX.Element => {
	return (
		<section id='experience'>
			<h2 title='Experiencia'>Experiencia</h2>
			{mockExperiences.map(experience =>
				<ExperienceContent key={experience.company} {...experience} />
			)}
		</section>
	)
}

export default Experience
