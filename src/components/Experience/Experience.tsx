import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import experiences from '@/data/experiences'
import Section from '@/components/Section/Section'
import ExperienceContent from '@/components/Experience/ExperienceContent'
import './Experience.scss'

const Experience: FC = (): JSX.Element => {
	return (
		<Section className='experience-section' id='experience' title='Experience'>
			<div className='timeline'>
				{experiences.map((experience, idx) => 
					<>
			 			<div className={`experience-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={`experience-${idx}`}>
							<ExperienceContent key={experience.company} {...experience} />
						</div>
					</>
				)}
			</div>
		</Section>
	)
}

export default Experience
