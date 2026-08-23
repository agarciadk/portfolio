import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Education from '@/sections/Education/Education'

describe('Education', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Education />)
	})

	it('should render title correctly', () => {
		render(<Education />)

		screen.getByRole('heading', { name: 'Education' })
	})
})
