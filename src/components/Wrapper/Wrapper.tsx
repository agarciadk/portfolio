import { FC, ReactElement } from 'react'
import { JSX } from 'react/jsx-runtime'
import './Wrapper.scss'

interface WrapperProps {
	children: ReactElement | ReactElement[]
}

const Wrapper: FC<WrapperProps> = ({ children }): JSX.Element => {
	return (
		<main className='wrapper'>
			{children}
		</main>
	)
}

export default Wrapper
