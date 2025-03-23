import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import './Presentation.css'
import './TypeWriter.css'
import downloadCV from '../../assets/download.svg'
import Section from '../Section'

interface PresentationProps {
	profilePic: string
}

const Presentation: FC<PresentationProps> = ({ profilePic }): JSX.Element => {
	return (
		<Section className='presentation-wrapper' id='presentation'>
			<div className='input-wrapper green'>
				<span className='placeholder'></span>
			</div>
			<p className='position'>Software Engineer @ Minsait</p>
			<p className='description'>Dedicated and dilient software engineer with a passion
				for embracing new challenges. Committed to professional growth, I am eager to expand
				my skill set. I excell as a collaborative team player, actively sharing my knowledge
				and assisting others. I possess a keen eye for detail, ensuring meticulous attention
				to even the smallest aspect.
			</p>
			<span className='years'>2+ years experience working</span>
			<div className="actions">
				<a
					role='button'
					className='email-me-btn'
					target='_blank'
					title='Email me'
					href='mailto:agarciadk@gmail.com'
				>
					Email me
				</a>
				
				<a className='download-cv-btn' href='/Frontend_Developer-Alberto_Garcia_de_Paredes-CV.pdf' title='Download CV' download>
					<img src={downloadCV} alt="download icon" className='icon' />
					Download CV
				</a>
			</div>
		</Section>
	)
}

export default Presentation
