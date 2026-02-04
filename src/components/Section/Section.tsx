import { FC, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
import { Element } from 'react-scroll'
import Background from '@/components/Background/Background'
import './Section.scss'

interface SectionProps {
	children?: ReactNode
	className?: string
	id: string
	title: string
	variant?: 'primary' | 'secondary'
}

const Section: FC<SectionProps> = ({ children, className = '', id, title = '', variant = 'primary' }): JSX.Element => {
	return (
		<Element name={id} id='scroll'>
			<Background variant={variant}>
				<div className='container'>
					<section className={className} id={id}>
						{title && <h2 title={title} className='title'>{title}</h2>}
						{children}
					</section>
				</div>
			</Background>
		</Element>
	)
}

export default Section
