import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Skills } from '../src/components'

describe('Skills', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Skills />)
	})

	it('should render title correctly', () => {
		render(<Skills />)

		screen.getByText('Skills')
	})
})
