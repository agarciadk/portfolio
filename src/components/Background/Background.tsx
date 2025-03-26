import { FC, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
import './Background.scss'

interface BackgroundProps {
	children: ReactNode
	variant?: 'primary' | 'secondary'
}

const Background: FC<BackgroundProps> = ({ children, variant = 'primary' }): JSX.Element => {
	return (
		<div className={`background-${variant}`}>
			{children}
		</div>
	)
}

export default Background
