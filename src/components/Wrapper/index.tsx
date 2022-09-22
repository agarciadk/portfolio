import { FC, ReactElement } from 'react'

interface indexProps {
	children: ReactElement[]
}

const Wrapper: FC<indexProps> = ({ children }) => {
	return (
		<div className='wrapper'>
			{children}
		</div>
	)
}

export default Wrapper
