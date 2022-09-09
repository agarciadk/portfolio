import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Education } from '../src/components'

describe('Education', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Education />)
	})

	it('should render title correctly', () => {
		render(<Education />)

		screen.getByText('Educación')
	})
})
