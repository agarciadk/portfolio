import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Projects } from '../src/components'

describe('Projects', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Projects />)
	})

	it('should render title correctly', () => {
		render(<Projects />)

		screen.getByText('Proyectos')
	})

	it('should render 3 columns', () => {
		render(<Projects />)

		const columns = screen.getAllByRole('column')
		expect(columns).toHaveLength(3)
	})
})
