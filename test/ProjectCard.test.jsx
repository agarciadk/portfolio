import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectCard from '@/sections/Projects/ProjectCard'

const projectCardProps = {
	title: 'Proyecto 1',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
	image: 'https://placehold.co/250',
	languages: ['react', 'typescript', 'nodejs', 'express', 'postgresql'],
	githubUrl: 'https://github.com/example/project-1',
	demoUrl: 'https://project-1.example.com'
}

describe('ProjectCard', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<ProjectCard {...projectCardProps} />)
	})

	it('should render the full description', () => {
		render(<ProjectCard {...projectCardProps} />)

		screen.getByText(/Lorem ipsum dolor sit amet/)
	})

	it('should render a link to the github repository', () => {
		render(<ProjectCard {...projectCardProps} />)

		const link = screen.getByTitle('Ver código en GitHub')
		expect(link.getAttribute('href')).toBe(projectCardProps.githubUrl)
	})

	it('should render a link to the demo', () => {
		render(<ProjectCard {...projectCardProps} />)

		const links = screen.getAllByTitle('Ver proyecto desplegado')
		expect(links.length).toBeGreaterThan(0)
		links.forEach(link => expect(link.getAttribute('href')).toBe(projectCardProps.demoUrl))
	})
})

