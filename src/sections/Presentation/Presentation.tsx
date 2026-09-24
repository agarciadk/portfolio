import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import downloadCV from '@/assets/download.svg'
import Section from '@/components/Section/Section'
import './Presentation.scss'
import './Typewriter.scss'

const Presentation: FC = (): JSX.Element => {
	const startDate = new Date('2022-10-01');
	const now = new Date();

	const months =
  	(now.getFullYear() - startDate.getFullYear()) * 12 +
  	now.getMonth() -
  	startDate.getMonth();

	const years = Math.floor(months / 12);

	return (
		<Section className='presentation-wrapper' id='presentation'>
			<div className='input-wrapper green'>
				<span className='placeholder'></span>
			</div>
			<p className='position'>Software Engineer at <mark className='metal-green'>BBVA Technology</mark></p>
			<p className='description'>Dedicated and dilient software engineer with a passion
				for embracing new challenges. Committed to professional growth, I am eager to expand
				my skill set. I excell as a collaborative team player, actively sharing my knowledge
				and assisting others. I possess a keen eye for detail, ensuring meticulous attention
				to even the smallest aspect.
			</p>
			<span className='years'>{years}+ years experience working</span>
			<div className="actions">
				<a
					role='button'
					className='email-me-btn border-green'
					title='Email me'
					href='mailto:alberto@gapaci.dev'
				>
					Email me
				</a>
				
				<a className='download-cv-btn' href='/Frontend_Developer-Alberto_Garcia_de_Paredes-CV.pdf' title='Download CV' download>
					Download CV
					<img src={downloadCV} alt="download icon" className='icon' />
				</a>
			</div>
		</Section>
	)
}

export default Presentation
