import { FC } from 'react'
import { Experience as ExperienceProps } from '../../types'

const ExperienceContent: FC<ExperienceProps> = ({
	company,
	position,
	sector,
	business,
	beginning,
	ending,
	location,
	keys,
	functionality
}) => (
	<div className='experience-wrapper' role='row'>
		<div className='experience-header'>
			<h3 className='m-0'>{company}</h3>
			<p className='m-0 subtitle'><small>{position}</small></p>
			<div className='experience-date'>
				<p className='m-0'><small>{beginning} - {ending}, {location}</small></p>
				<p className='m-0'><small>{sector} ({business})</small></p>
			</div>
		</div>
		<div className='experience-description mx-2'>
			<h4>Keys</h4>
			<p className='t-justify'>{keys}</p>
			<h4 className='mt-1'>Functionality</h4>
			<p className='t-justify'>{functionality}</p>
		</div>
	</div>
)

export default ExperienceContent
