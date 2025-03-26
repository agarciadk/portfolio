import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import navItems from '@/mocks/navItems'
import NavItem from './NavItem'
import './Nav.scss'

const Nav: FC = (): JSX.Element => {
	return (
		<nav>
			<span className='logo'>Alberto<span className='green'>.</span></span>
			<ul>
				{navItems.map(item =>
					<NavItem
						key={item.id}
						section={item.section}
						label={item.label}
						offset={item.offset}
						border={item.border}
					/>
				)}
			</ul>
		</nav>
	)
}

export default Nav
