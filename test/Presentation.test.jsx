import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Presentation from '@/components/Presentation/Presentation'

describe('Presentation', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Presentation />)
	})
})
