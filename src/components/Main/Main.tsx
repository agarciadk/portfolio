import { FC, ReactElement } from 'react'
import { JSX } from 'react/jsx-runtime'
import './Main.scss'

interface MainProps {
	children: ReactElement | ReactElement[]
}

const Main: FC<MainProps> = ({ children }): JSX.Element => {
	return (
		<div>
			<main className='main'>
				{children}
			</main>
		</div>
	)
}

export default Main
