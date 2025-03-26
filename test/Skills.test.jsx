import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Skills from '@/components/Skills/Skills'

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
