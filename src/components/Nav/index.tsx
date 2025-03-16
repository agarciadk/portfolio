import navItems from '../../mocks/navItems'
import NavItem from './NavItem'
import './Nav.css'

const Nav = () => {
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
