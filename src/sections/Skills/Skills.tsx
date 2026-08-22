import { JSX } from 'react/jsx-runtime'
import Section from '@/components/Section/Section'
import hashLanguages from '@/utils/hashLanguages'
import './Skills.scss'

const languages = Object.keys(hashLanguages) as Array<keyof typeof hashLanguages>

const Skills = (): JSX.Element => {
	return <Section id='skills' title='Skills' titleLineWidth={30}>
		<div className='skills-section'>
			<div className='skills-marquee'>
				<div className='skills-track'>
					{[...Array(10).keys()].map((row) =>
						<ul className='skills-row' key={`skills-row-${row}`}>
						{languages.map((language) =>
							<li key={`${row}-${language}`} className='skills-icon' data-tooltip={language}>
								<img src={hashLanguages[language]} alt={language} />
							</li>
						)}
						</ul>
					)}
				</div>
			</div>
		</div>
	</Section>
}

export default Skills
