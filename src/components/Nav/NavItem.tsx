import { FC } from 'react'

interface NavItemProps {
	href: string
	label: string
}
const NavItem: FC<NavItemProps> = ({ href, label }) => (
	<a href={href}>{label}</a>
)

export default NavItem
