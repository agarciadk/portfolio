import { FC } from 'react'
import { Link } from 'react-scroll'
import './NavItem.css'

interface NavItemProps {
	section: string
	label: string
	offset?: number
	border?: boolean
}
const NavItem: FC<NavItemProps> = ({ section, label, offset = 0, border = false }) => {
	const className = border ? 'border-green' : '';
	return <Link to={section} smooth={true} duration={500} offset={offset} className={className}>{label}</Link>
}

export default NavItem
