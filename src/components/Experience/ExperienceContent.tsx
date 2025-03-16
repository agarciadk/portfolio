import { FC } from 'react'
import { Experience as ExperienceProps } from '../../types'
import './ExperienceContent.css'

const Responsibility: FC<{ title: string, description?: string[] }> = ({ title, description = [] }) => (
	<ul>
		<li className='t-justify'>{title}</li>
		<ol>
			{description?.map((desc, index) => <li key={`responsibility-${index}`}>{desc}</li>)}
		</ol>
	</ul>
)

const Key : FC<{ title: string, description?: string[] }> = ({ title, description = [] }) => (
	<ul>
		<li className='t-justify'>{title}</li>
		<ol>
			{description?.map((desc, index) => <li key={`key-${index}`}>{desc}</li>)}
		</ol>
	</ul>
)

const ExperienceContent: FC<ExperienceProps> = ({
	company,
	position,
	sector,
	business,
	beginning,
	ending,
	location,
	responsibilities,
	keys
}) => (
	<div className='experience-wrapper' role='row'>
		<div className='experience-header'>
			<h3 className='m-0'><span className='subtitle'>{position}</span> at <span className='green'>{company}</span></h3>
			<div className='experience-date'>
				<p className='m-0'><small>{beginning} - {ending}</small></p>
				<p className='m-0'><small>{sector} ({business})</small></p>
			</div>
			<p className='m-0 opacity-8'><small>{location}</small></p>
		</div>
		<div className='experience-description mx-2'>
			<h4>Resposibilities</h4>
			{responsibilities.map(({ title, description }) => <Responsibility key={title} title={title} description={description} />)}
			<h4 className='mt-1'>Key Accomplishments</h4>
			{keys.map(({ title, description }) => <Key key={title} title={title} description={description} />)}
		</div>
	</div>
)

export default ExperienceContent
