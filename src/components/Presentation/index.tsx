import { FC } from 'react'

interface PresentationProps {
	profilePic: string
}

const Presentation: FC<PresentationProps> = ({ profilePic }): JSX.Element => {
	return (
		<section className='presentation-wrapper'>
			<div>
				<h1>Alberto</h1>
				<p title='Software Engineer' className='mt-1 subtitle'>Software Engineer</p>
			</div>
			<img
				src={profilePic}
				className='profile'
				alt='profile pic'
			/>
		</section>
	)
}

export default Presentation
