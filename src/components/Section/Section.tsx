import { FC, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
import { Element } from 'react-scroll'
import Background from '@/components/Background/Background'
import './Section.scss'

interface SectionProps {
	children?: ReactNode
	className?: string
	id: string
	title?: string
	titleLineWidth?: number
	variant?: 'primary' | 'secondary'
	viewAllHref?: string
	viewAllLabel?: string
}

const Section: FC<SectionProps> = ({
	children,
	className = '',
	id,
	title = '',
	titleLineWidth,
	variant = 'primary',
	viewAllHref,
	viewAllLabel = 'View all'
}): JSX.Element => {
	return (
		<Element name={id} id='scroll'>
			<Background variant={variant}>
				<div className='container'>
					<section className={className} id={id}>
						{title && (
							<div className='section-heading'>
								<h2 className='title' aria-label={title}>
									<span className='title-hash'>#</span>{id}
								</h2>
								<span
									className='title-line'
									aria-hidden='true'
									style={titleLineWidth ? { flex: `0 0 ${titleLineWidth}%` } : undefined}
								/>
								{viewAllHref && (
									<a className='title-view-all' href={viewAllHref}>
										{viewAllLabel} <span className='arrow' aria-hidden='true'>⇝</span>
									</a>
								)}
							</div>
						)}
						{children}
					</section>
				</div>
			</Background>
		</Element>
	)
}

export default Section
