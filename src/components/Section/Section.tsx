import { FC, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
import { Element } from 'react-scroll'
import Background from '@/components/Background/Background'
import './Section.scss'

interface SectionProps {
	children: ReactNode
	className?: string
	id: string
	variant?: 'primary' | 'secondary'
}

const Section: FC<SectionProps> = ({ children, className = '', id, variant = 'primary' }): JSX.Element => {
	return (
		<Element name={id} id="scroll">
			<Background variant={variant}>
				<section className={className} id={id}>
					{children}
				</section>
			</Background>
		</Element>
	)
}

export default Section
