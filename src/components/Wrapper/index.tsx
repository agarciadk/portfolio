import { FC, ReactElement } from 'react'
import './Wrapper.css'

interface indexProps {
	children: ReactElement | ReactElement[]
}

const Wrapper: FC<indexProps> = ({ children }) => {
	return (
		<main className='wrapper'>
			{children}
		</main>
	)
}

export default Wrapper
