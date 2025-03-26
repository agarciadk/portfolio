import { FC, ReactElement, useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import './Main.scss'

interface MainProps {
	children: ReactElement | ReactElement[]
}

const Main: FC<MainProps> = ({ children }): JSX.Element => {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 25)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isSticky])

	return (
		<main className={`main${isSticky ? ' sticky' : ''}`}>
			{children}
		</main>
	)
}

export default Main
