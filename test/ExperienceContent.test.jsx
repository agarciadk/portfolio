import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { ExperienceContent } from '../src/components'

describe('ExperienceContent', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<ExperienceContent />)
	})

	it('should render Keys and Functionality correctly', () => {
		render(<ExperienceContent />)

		screen.getByText('Keys')
		screen.getByText('Functionality')
	})
})
