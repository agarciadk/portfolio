import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Skills from '@/sections/Skills/Skills'

describe('Skills', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Skills />)
	})

	it('should render title correctly', () => {
		render(<Skills />)

		screen.getByRole('heading', { name: 'Skills' })
	})
})
