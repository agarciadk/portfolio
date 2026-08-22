import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Projects from '@/sections/Projects/Projects'
import projectsData from '@/data/projects'

describe('Projects', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Projects />)
	})

	it('should render title correctly', () => {
		render(<Projects />)

		screen.getByRole('heading', { name: 'Projects' })
	})

	it('should render a column per project', () => {
		render(<Projects />)

		const columns = screen.getAllByRole('column')
		expect(columns).toHaveLength(projectsData.length)
	})
})
