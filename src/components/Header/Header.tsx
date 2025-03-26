import { FC, useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import navItems from '@/mocks/navItems'
import NavItem from './NavItem'
import './Header.scss'

const Header: FC = (): JSX.Element => {
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
		<header className={`header${isSticky ? ' sticky' : ''}`}>
			<div className='header-container'>
				<span className='logo'>Alberto<span className='green'>.</span></span>
				<nav>
					{navItems.map(item =>
						<NavItem
							key={item.id}
							section={item.section}
							label={item.label}
							offset={item.offset}
							border={item.border}
						/>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
