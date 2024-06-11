import { FC } from 'react'

interface PresentationProps {
	profilePic: string
}

const Presentation: FC<PresentationProps> = ({ profilePic }): JSX.Element => {
	return (
		<section id='introduction' className='presentation-wrapper'>
			<img
				src={profilePic}
				className='profile'
				alt='profile pic'
			/>
		</section>
	)
}

export default Presentation
