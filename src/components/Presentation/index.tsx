import { FC } from 'react'
import './Presentation.css'

interface PresentationProps {
	profilePic: string
}

const Presentation: FC<PresentationProps> = ({ profilePic }): JSX.Element => {
	return (
		<div className='presentation-wrapper'>
			<img
				src={profilePic}
				className='profile'
				alt='profile pic'
			/>
			<div>
				<h3>Alberto García de Paredes Cidoncha</h3>
				<p>Software Engineer</p>
			</div>
		</div>
	)
}

export default Presentation
