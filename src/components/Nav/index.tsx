import { FC } from 'react'
import navItems from '../../mocks/navItems'
import NavItem from './NavItem'

const Nav: FC<{}> = () => {
	return (
		<nav>
			{navItems.map(item =>
				<NavItem
					key={item.id}
					href={item.href}
					label={item.label}
				/>
			)}
		</nav>
	)
}

export default Nav
