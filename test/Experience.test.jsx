import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Experience from '@/components/Experience/Experience'

describe('Experience', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Experience />)
	})

	it('should render title correctly', () => {
		render(<Experience />)

		screen.getByText('Experience')
	})

	it('should render 3 rows', () => {
		render(<Experience />)

		const rows = screen.getAllByRole('row')
		expect(rows).toHaveLength(3)
	})
})
