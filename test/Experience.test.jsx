import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Experience } from '../src/components'

describe('Experience', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Experience />)
	})

	it('should render title correctly', () => {
		render(<Experience />)

		screen.getByText('Experiencia')
	})

	it('should render 2 rows', () => {
		render(<Experience />)

		const rows = screen.getAllByRole('row')
		expect(rows).toHaveLength(2)
	})
})
