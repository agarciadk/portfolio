import { CSSProperties, FC, useCallback, useEffect, useRef, useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import navItems from '@/mocks/navItems'
import NavItem from './NavItem'
import Close from '@/components/Icons/Close'
import HamburgerMenu from '@/components/Icons/HamburgerMenu'
import hashLanguages from '@/utils/hashLanguages'
import mail from '@/assets/icons/mail.svg'
import './Header.scss'

// debe coincidir con la duración de la animación del círculo en Header.scss
const STAGGER_BASE_DELAY_MS = 250
const STAGGER_STEP_MS = 60

const Header: FC = (): JSX.Element => {
	const lastItem = navItems[navItems.length - 1];
	const restItems = navItems.slice(0, -1);
	const [isOpen, setIsOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)
	const [origin, setOrigin] = useState({ x: 0, y: 0 })
	const toggleButtonRef = useRef<HTMLButtonElement>(null)

	// calcula el centro del botón hamburger para que el círculo nazca desde ahí
	const openMenu = useCallback((): void => {
		const button = toggleButtonRef.current
		if (button) {
			const rect = button.getBoundingClientRect()
			setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
		}
		setIsOpen(true)
	}, [])

	const closeMenu = useCallback((returnFocus = false): void => {
		setIsOpen(false)
		if (returnFocus) toggleButtonRef.current?.focus()
	}, [])

	const toggleMenu = (): void => (isOpen ? closeMenu() : openMenu())

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 25)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!isOpen) return

		const { documentElement, body } = document
		const previousHtmlOverflow = documentElement.style.overflow
		const previousBodyOverflow = body.style.overflow
		documentElement.style.overflow = 'hidden'
		body.style.overflow = 'hidden'

		return () => {
			documentElement.style.overflow = previousHtmlOverflow
			body.style.overflow = previousBodyOverflow
		}
	}, [isOpen])

	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') closeMenu(true)
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, closeMenu])

	const menuOriginStyle = {
		'--menu-origin-x': `${origin.x}px`,
		'--menu-origin-y': `${origin.y}px`
	} as CSSProperties

	return (
		<header className={`header${isSticky ? ' sticky' : ''}`}>
			<div className='header__container'>
				<div className='header__container-mobile'>
					<button
						ref={toggleButtonRef}
						className='header__nav-toggle'
						id='header__nav-toggle'
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isOpen}
						aria-controls='header__nav'
						onClick={toggleMenu}
					>
						{isOpen ? <Close /> : <HamburgerMenu />}
					</button>
					<span className='logo'>Alberto<span className='green'>.</span></span>
					<a className='contact-button-mobile border-green' href='mailto:agarciadk@gmail.com'>
						{lastItem.label}
					</a>
				</div>
				<nav
					id='header__nav'
					className={`header__nav${isOpen ? ' open' : ''}`}
					aria-expanded={isOpen}
					style={menuOriginStyle}
					onClick={() => closeMenu()}
				>
					<span className='header__nav-circle' aria-hidden='true' />
					<ul className='header__nav-list'>
						{restItems.map((item, index) =>
							<li
								key={item.id}
								style={{ transitionDelay: isOpen ? `${STAGGER_BASE_DELAY_MS + index * STAGGER_STEP_MS}ms` : '0ms' }}
							>
								<NavItem
									section={item.section}
									label={item.label}
									offset={item.offset}
									border={item.border}
									onClick={() => closeMenu()}
								/>
							</li>
						)}
						<li style={{ transitionDelay: isOpen ? `${STAGGER_BASE_DELAY_MS + restItems.length * STAGGER_STEP_MS}ms` : '0ms' }}>
							<a className='contact-button-desktop border-green' href='mailto:agarciadk@gmail.com' onClick={() => closeMenu()}>
								{lastItem.label}
							</a>
						</li>
					</ul>
					<div
						className='header__nav-social'
						style={{ transitionDelay: isOpen ? `${STAGGER_BASE_DELAY_MS + (restItems.length + 1) * STAGGER_STEP_MS}ms` : '0ms' }}
					>
						<a href='https://github.com/agarciadk' target='_blank' rel='noopener noreferrer' title='GitHub'>
							<img src={hashLanguages.github} alt='' aria-hidden='true' />
						</a>
						<a href='mailto:agarciadk@gmail.com' title='Email'>
							<img src={mail} alt='' aria-hidden='true' />
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
