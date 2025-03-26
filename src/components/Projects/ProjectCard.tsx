import { JSX, } from 'react/jsx-runtime'
import { Project, Language } from '@/types'
import hashLanguages from '@/utils/hashLanguages'
import { FC, useState } from 'react';
import './ProjectCard.css'

const ProjectCard: FC<Project> = ({ title, description, image, languages}): JSX.Element => {
	const [visibility, setVisibility] = useState(false)
	const descIntro = description.slice(0, 128)
	const descMore = description.slice(128, description.length)

	const toggleReadDescription = (): void => setVisibility((prevState) => !prevState)

	return (
		<div className='card' role="column">
			<h3 className='card-title'>{title}</h3>
			<div className='card-links'>
				<a href='#' title='GitHub'><img src={hashLanguages.github} /></a>
				<a href='#' title='Página web'><img src={hashLanguages.globe} /></a>
			</div>
			<img className='card-image' src={image} />
			<div className='card-description'>
				<p>
					{descIntro}
					<span
						className={ visibility ? 'card__read-more card__read-more--open' : 'card__read-more'}
						aria-label='more'
					>
						{descMore}
					</span>
				</p>
				<a
					role='button'
					className='read-more-btn'
					title={visibility ? 'Leer menos...' : 'Leer mas...'}
					onClick={() => toggleReadDescription()}
				>
					{visibility ? 'Leer menos...' : 'Leer mas...'}
				</a>
			</div>
			<div className='card-languages'>
				{languages.map((language: Language) => (
					<img
						key={`${title}-${language}`}
						src={hashLanguages[language]}
						alt={language}
						title={language}
					/>
				))}
			</div>
		</div>
	)
}

export default ProjectCard
