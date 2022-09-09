import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { ProjectCard } from '../src/components'

const projectCardProps = {
	title: 'Proyecto 1',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
	image: 'https://via.placeholder.com/250/771796',
	languages: ['react', 'typescript', 'nodejs', 'express', 'postgresql']
}

describe('ProjectCard', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<ProjectCard {...projectCardProps} />)
	})

	it('should render a read more button', () => {
		render(<ProjectCard {...projectCardProps} />)

		screen.getByRole('button')
	})

	it('should show the rest of description when user click on read more', () => {
		render(<ProjectCard {...projectCardProps} />)
		const dots = screen.getByLabelText('dots')
		const more = screen.getByLabelText('more')
		const button = screen.getByRole('button')
		expect(dots.style.display).toBe('inline')
		expect(more.style.display).toBe('none')
		expect(button.style.display).toBe('inline')

		fireEvent.click(button)

		expect(dots.style.display).toBe('none')
		expect(more.style.display).toBe('inline')
		expect(button.style.display).toBe('none')
	})
})
