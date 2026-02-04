import { FC } from 'react'
import { Link } from 'react-scroll'

interface NavItemProps {
	section: string
	label: string
	offset?: number
	border?: boolean
	className?: string
	href?: string
}
const NavItem: FC<NavItemProps> = ({ section, label, offset = 0, border = false, className = '' , href = '' }) => {
	const hasBorder = border ? `border-green ${className}` : className;
	return <Link to={section} smooth={true} duration={500} offset={offset} className={hasBorder} href={href}>{label}</Link>
}

export default NavItem
