import { JSX, } from 'react/jsx-runtime'
import { Project, Language } from '@/types'
import hashLanguages from '@/utils/hashLanguages'
import globe from '@/assets/icons/globe.svg'
import { FC } from 'react';
import './ProjectCard.scss'

const ProjectCard: FC<Project> = ({ title, description, image, languages, githubUrl, demoUrl }): JSX.Element => {
	return (
		<div className='card' role="column">
			<div className='card-image-wrapper'>
				{demoUrl ? (
					<a href={demoUrl} target='_blank' rel='noopener noreferrer' title='Ver proyecto desplegado'>
						<img className='card-image' src={image} alt={`Captura de pantalla de ${title}`} loading='lazy' />
					</a>
				) : (
					<img className='card-image' src={image} alt={`Captura de pantalla de ${title}`} loading='lazy' />
				)}
			</div>
			<div className='card-languages'>
				<span className='card-languages-label'>Stack</span>
				<div className='card-languages-icons'>
					{languages.map((language: Language) => (
						<span
							key={`${title}-${language}`}
							className='card-language-icon'
							data-tooltip={language}
						>
							<img src={hashLanguages[language]} alt={language} />
						</span>
					))}
				</div>
			</div>

			<div className='card-body'>
				<h3 className='card-title'>{title}</h3>
				<p className='card-description'>{description}</p>
			</div>

			<div className='card-links'>
				<a
					className='card-link border-green'
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					title='Ver código en GitHub'
				>
					<img src={hashLanguages.github} alt='' aria-hidden='true' />
					Code
				</a>
				{demoUrl && (
					<a
						className='card-link'
						href={demoUrl}
						target='_blank'
						rel='noopener noreferrer'
						title='Ver proyecto desplegado'
					>
						<img src={globe} alt='' aria-hidden='true' />
						Demo
					</a>
				)}
			</div>
		</div>
	)
}

export default ProjectCard
