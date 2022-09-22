import { FC, ReactElement } from 'react'

interface indexProps {
	children: ReactElement[]
}

const Wrapper: FC<indexProps> = ({ children }) => {
	return (
		<main className='wrapper'>
			{children}
		</main>
	)
}

export default Wrapper
