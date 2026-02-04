import { FC, useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import navItems from '@/mocks/navItems'
import NavItem from './NavItem'
import Close from '@/components/Icons/Close'
import HamburgerMenu from '@/components/Icons/HamburgerMenu'
import './Header.scss'

const Header: FC = (): JSX.Element => {
	const lastItem = navItems[navItems.length - 1];
	const restItems = navItems.slice(0, -1);
	const [isOpen, setIsOpen] = useState(false)
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

	let navStyle: {
		maxHeight: string,
		overflowY: 'auto',
		height?: string
	} = {
		maxHeight: 'calc(-9rem + 100vh)',
		overflowY: 'auto' as const
	}
	if (isOpen) {
		navStyle = {
			maxHeight: 'calc(-9rem + 100vh)',
			overflowY: 'auto' as const,
			height: 'fit-content'
		}
	}
	return (
		<header className={`header${isSticky ? ' sticky' : ''}${isOpen ? ' header--open' : ''}`}>
			<div className='header__container'>
				<div className='header__container-mobile'>
					<button className='header__nav-toggle' id='header__nav-toggle' aria-label='Menu button' onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <Close /> : <HamburgerMenu />}
					</button>
					<span className='logo'>Alberto<span className='green'>.</span></span>
					<a className='contact-button-mobile border-green' href='mailto:agarciadk@gmail.com'>
						{lastItem.label}
					</a>
				</div>
				<nav className={`header__nav${isOpen ? ' open' : ''}`} aria-expanded={isOpen} style={navStyle}>
					<ul className='header__nav-list'>
						{restItems.map(item =>
							<li key={item.id}>
							<NavItem
								section={item.section}
								label={item.label}
								offset={item.offset}
								border={item.border}
							/>
							</li>
						)}
						<a className='contact-button-desktop border-green' href='mailto:agarciadk@gmail.com'>
							{lastItem.label}
						</a>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
