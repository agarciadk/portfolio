import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectCard from '@/components/Projects/ProjectCard'

const projectCardProps = {
	title: 'Proyecto 1',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
	image: 'https://placehold.co/250',
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
		const more = screen.getByLabelText('more')
		const button = screen.getByRole('button')

		expect(more.className).toBe('card__read-more')
		expect(button.textContent).toBe('Leer mas...')

		fireEvent.click(button)

		expect(more.className).toBe('card__read-more card__read-more--open')
		expect(button.textContent).toBe('Leer menos...')
	})
})
