import { FC, useState } from 'react'
import { Project, Language } from '../../types'
import hashLanguages from '../../utils/hashLanguages'

const ProjectCard: FC<Project> = ({ title, description, image, languages }): JSX.Element => {
	const [hidden, setHidden] = useState(true)
	const descIntro = description.slice(0, 140)
	const descMore = description.slice(140, description.length)

	const readMore = (): void => {
		setHidden(false)
	}
	const dotStyle = hidden ? { display: 'inline' } : { display: 'none' }
	const moreStyle = !hidden ? { display: 'inline' } : { display: 'none' }
	return (
		<div className='card' role="column">
			<h3 className='card-title'>{title}</h3>
			<div className='card-links'>
				<a href='#' title='GitHub'><img src={hashLanguages.github} /></a>
				<a href='#' title='Página web'><img src={hashLanguages.globe} /></a>
			</div>
			<img src={image} />
			<div className='card-description'>
				<p>
					{descIntro}
					<span id='dots' style={dotStyle} aria-label='dots'>...</span>
					<span id='more' style={moreStyle} aria-label='more'>
						{descMore}
					</span>
					{' '}
					<a role='button' onClick={() => readMore()} style={dotStyle}>leer mas</a>
				</p>
			</div>
			<div className='card-languages'>
				{languages.map((language: Language) => (
					<img
						key={`${title}-${language}`}
						src={hashLanguages[language]}
					/>
				))}
			</div>
		</div>
	)
}

export default ProjectCard
