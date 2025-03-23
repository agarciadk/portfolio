import { JSX } from 'react/jsx-runtime'
import ExperienceContent from './ExperienceContent'
import experiences from '../../data/experiences'
import { ArrowDownRight } from '../Icons/ArrowDownRight'
import { ArrowDownLeft } from '../Icons/ArrowDownLeft'
import Section from '../Section'
import './Experience.css'
const calculatePositionArrowDownRight = (idx: number) => {
	if (idx === 0) {
		return;
	}
	if (idx % 2 === 1){
	 return <ArrowDownRight />;
	}
}
const calculatePositionArrowDownLeft = (idx: number) => {
	if (idx === 0) {
		return;
	}
	if (idx % 2 === 0){
	 return <ArrowDownLeft />;
	}
}
const Experience = (): JSX.Element => {
	return (
		<Section className='experience-section' id='experience' variant='secondary'>
			<h2 title='Experiencie' className="title">Experience</h2>
			{experiences.map((experience, idx) => 
			 	<div className='row' key={`experience-${idx}`}>
					{calculatePositionArrowDownRight(idx)}
					<ExperienceContent key={experience.company} {...experience} />
					{calculatePositionArrowDownLeft(idx)}
				</div>
			)}
		</Section>
	)
}

export default Experience
