import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Footer from '@/sections/Footer/Footer'

describe('Footer', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Footer />)
	})

	it('should render the copyright notice', () => {
		render(<Footer />)

		screen.getByText(/All rights reserved/)
	})
})
