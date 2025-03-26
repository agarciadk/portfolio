import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import experiences from '@/data/experiences'
import ArrowDownLeft from '@/components/Icons/ArrowDownLeft'
import ArrowDownRight from '@/components/Icons/ArrowDownRight'
import Section from '@/components/Section/Section'
import ExperienceContent from '@/components/Experience/ExperienceContent'
import './Experience.scss'

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
const Experience: FC = (): JSX.Element => {
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
