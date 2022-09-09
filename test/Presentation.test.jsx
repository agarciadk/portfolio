import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Presentation } from '../src/components'

describe('Presentation', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Presentation />)
	})

	it('should render the name and title correctly', () => {
		render(<Presentation />)

		screen.getByText('Alberto García de Paredes Cidoncha')
		screen.getByText('Software Engineer')
	})

	it('should render the profile pic correctly', () => {
		const testPic = '/profile.jpg'
		render(<Presentation profilePic={testPic} />)

		const image = screen.getByAltText('profile pic')
		expect(image.src).toContain(testPic)
	})
})
