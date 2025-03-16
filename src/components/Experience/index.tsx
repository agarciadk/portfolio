import { JSX } from 'react/jsx-runtime'
import ExperienceContent from './ExperienceContent'
import experiences from '../../data/experiences'
import { ArrowDownRight } from '../Icons/ArrowDownRight'
import { ArrowDownLeft } from '../Icons/ArrowDownLeft'
import Section from '../Section'
import './Experience.css'

const Experience = (): JSX.Element => {
	return (
		<Section className='experience-section' id='experience' variant='secondary'>
			<h2 title='Experiencie'>Experience</h2>
			{experiences.map(experience =>
				<ExperienceContent key={experience.company} {...experience} />
			)}
			<ArrowDownRight />
			<ArrowDownLeft />
		</Section>
	)
}

export default Experience
