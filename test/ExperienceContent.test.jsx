import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import ExperienceContent from '@/components/Experience/ExperienceContent'
import * as Mock from './utils/mocks'

describe('ExperienceContent', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<ExperienceContent {...Mock.experienceContentMock} />)
	})

	it('should render Keys and Functionality correctly', () => {
		render(<ExperienceContent {...Mock.experienceContentMock} />)

		screen.getByText('Responsibilities')
		screen.getByText('Key Accomplishments')
	})
})
